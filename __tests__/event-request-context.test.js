/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {ServerEvent, UserData, Preference} = require('facebook-nodejs-business-sdk');
const {ParamBuilder} = require('capi-param-builder-nodejs');

/**
 * Build a minimal http.IncomingMessage-shaped object that
 * RequestContextAdaptor.extract() in capi-param-builder-nodejs knows how
 * to parse: it reads `headers.host`, `headers.cookie`, `headers.referer`,
 * `headers['x-forwarded-for']`, and `socket.remoteAddress`.
 */
function buildMockRequest({cookies, xForwardedFor, host, referer, remoteAddress, url} = {}) {
    const cookieHeader = cookies
        ? Object.entries(cookies).map(([k, v]) => `${k}=${v}`).join('; ')
        : undefined;
    const headers = {host: host || 'shop.example.com'};
    if (cookieHeader) {
        headers.cookie = cookieHeader;
    }
    if (xForwardedFor) {
        headers['x-forwarded-for'] = xForwardedFor;
    }
    if (referer) {
        headers.referer = referer;
    }
    return {
        headers,
        url: url || '/',
        socket: remoteAddress ? {remoteAddress} : undefined,
    };
}

describe('ServerEvent.setRequestContext + Preference + auto-populate via normalize()', function() {

    // ---------------------------------------------------------------------
    // Step 1: dependency import — capi-param-builder-nodejs is loadable.
    // ---------------------------------------------------------------------

    test('ParamBuilder is importable from capi-param-builder-nodejs', function() {
        expect(typeof ParamBuilder).toBe('function');
        const builder = new ParamBuilder();
        expect(typeof builder.processRequest).toBe('function');
        expect(typeof builder.getNormalizedAndHashedPII).toBe('function');
        expect(typeof builder.getFbc).toBe('function');
        expect(typeof builder.getFbp).toBe('function');
        expect(typeof builder.getClientIpAddress).toBe('function');
    });

    // ---------------------------------------------------------------------
    // Step 2: setRequestContext stores context + Preference and returns self.
    // ---------------------------------------------------------------------

    test('setRequestContext stores the context and Preference', function() {
        const context = {req: 'opaque'};
        const pref = new Preference(false, true, true, false);

        const event = (new ServerEvent())
            .setEventName('Lead')
            .setEventTime(1700000001)
            .setRequestContext(context, pref);

        expect(event.getRequestContext()).toBe(context);
        expect(event.getPreference()).toBe(pref);
    });

    test('setRequestContext defaults to allow-all Preference', function() {
        const event = (new ServerEvent())
            .setEventName('PageView')
            .setEventTime(1700000002)
            .setRequestContext({});

        const pref = event.getPreference();
        expect(pref).toBeInstanceOf(Preference);
        expect(pref.isFbcAllowed()).toBe(true);
        expect(pref.isFbpAllowed()).toBe(true);
        expect(pref.isClientIpAddressAllowed()).toBe(true);
        expect(pref.isReferrerUrlAllowed()).toBe(true);
    });

    test('setRequestContext is fluent (returns self)', function() {
        const event = new ServerEvent();
        expect(event.setRequestContext(null)).toBe(event);
    });

    test('normalize() without setRequestContext leaves user_data untouched', function() {
        const event = (new ServerEvent())
            .setEventName('Purchase')
            .setEventTime(1700000000)
            .setUserData((new UserData()).setEmail('a@example.com'));

        const payload = event.normalize();
        expect(payload.event_name).toBe('Purchase');
        // No fbc/fbp/client_ip should appear because setRequestContext was never called.
        expect(payload.user_data.fbc).toBeUndefined();
        expect(payload.user_data.fbp).toBeUndefined();
        expect(payload.user_data.client_ip_address).toBeUndefined();
    });

    // ---------------------------------------------------------------------
    // Step 3: normalize() auto-populates fbc/fbp/client_ip from the
    // ParamBuilder, gated by the Preference allowlist.
    // ---------------------------------------------------------------------

    test('normalize() auto-populates fbc from the request _fbc cookie', function() {
        const req = buildMockRequest({
            cookies: {_fbc: 'fb.1.1700000000000.AbCdEf12345'},
        });
        const event = (new ServerEvent())
            .setEventName('PageView')
            .setEventTime(1700000010)
            .setRequestContext(req);

        const payload = event.normalize();
        expect(payload.user_data.fbc).toBeTruthy();
        expect(payload.user_data.fbc).toEqual(
            expect.stringContaining('fb.1.1700000000000.AbCdEf12345'));
    });

    test('normalize() auto-populates fbp from the request _fbp cookie', function() {
        const req = buildMockRequest({
            cookies: {_fbp: 'fb.1.1700000000000.987654321'},
        });
        const event = (new ServerEvent())
            .setEventName('PageView')
            .setEventTime(1700000011)
            .setRequestContext(req);

        const payload = event.normalize();
        expect(payload.user_data.fbp).toBeTruthy();
        expect(payload.user_data.fbp).toEqual(
            expect.stringContaining('fb.1.1700000000000.987654321'));
    });

    test('normalize() auto-populates client_ip_address from x-forwarded-for', function() {
        // 203.0.113.42 is in TEST-NET-3, treated as a valid public IPv4 by
        // the ParamBuilder's IP filter.
        const req = buildMockRequest({
            xForwardedFor: '203.0.113.42',
            remoteAddress: '10.0.0.1',
        });
        const event = (new ServerEvent())
            .setEventName('PageView')
            .setEventTime(1700000012)
            .setRequestContext(req);

        const payload = event.normalize();
        expect(payload.user_data.client_ip_address).toBeTruthy();
        expect(payload.user_data.client_ip_address).toEqual(
            expect.stringContaining('203.0.113.42'));
    });

    test('caller-supplied fbc takes precedence over the builder', function() {
        const req = buildMockRequest({
            cookies: {_fbc: 'fb.1.1700000000000.BUILDER'},
        });
        const event = (new ServerEvent())
            .setEventName('Lead')
            .setEventTime(1700000020)
            .setUserData((new UserData()).setFbc('CALLER_FBC'))
            .setRequestContext(req);

        expect(event.normalize().user_data.fbc).toBe('CALLER_FBC');
    });

    test('caller-supplied fbp takes precedence over the builder', function() {
        const req = buildMockRequest({
            cookies: {_fbp: 'fb.1.1700000000000.BUILDER'},
        });
        const event = (new ServerEvent())
            .setEventName('Lead')
            .setEventTime(1700000021)
            .setUserData((new UserData()).setFbp('CALLER_FBP'))
            .setRequestContext(req);

        expect(event.normalize().user_data.fbp).toBe('CALLER_FBP');
    });

    test('caller-supplied client_ip_address takes precedence over the builder', function() {
        const req = buildMockRequest({xForwardedFor: '203.0.113.42'});
        const event = (new ServerEvent())
            .setEventName('Lead')
            .setEventTime(1700000022)
            .setUserData((new UserData()).setClientIpAddress('CALLER_IP'))
            .setRequestContext(req);

        expect(event.normalize().user_data.client_ip_address).toBe('CALLER_IP');
    });

    test('Preference fbp=false gates fbp extraction but keeps fbc', function() {
        const req = buildMockRequest({
            cookies: {
                _fbc: 'fb.1.1700000000000.WITHFBC',
                _fbp: 'fb.1.1700000000000.WITHFBP',
            },
        });
        const pref = new Preference(/*fbc*/ true, /*fbp*/ false, /*ip*/ true, true);
        const event = (new ServerEvent())
            .setEventName('PageView')
            .setEventTime(1700000030)
            .setRequestContext(req, pref);

        const payload = event.normalize();
        expect(payload.user_data.fbc).toBeTruthy();
        expect(payload.user_data.fbp).toBeUndefined();
    });

    test('Preference all-false suppresses every auto-populated field', function() {
        const req = buildMockRequest({
            cookies: {
                _fbc: 'fb.1.1700000000000.XX',
                _fbp: 'fb.1.1700000000000.YY',
            },
            xForwardedFor: '203.0.113.42',
        });
        const pref = new Preference(false, false, false, false);
        const event = (new ServerEvent())
            .setEventName('PageView')
            .setEventTime(1700000031)
            .setRequestContext(req, pref);

        const ud = event.normalize().user_data || {};
        expect(ud.fbc).toBeUndefined();
        expect(ud.fbp).toBeUndefined();
        expect(ud.client_ip_address).toBeUndefined();
    });

    // ---------------------------------------------------------------------
    // Step 4: deferring extraction to normalize() makes call order between
    // setUserData() and setRequestContext() irrelevant.
    // ---------------------------------------------------------------------

    test('order-independent: setUserData before setRequestContext', function() {
        const req = buildMockRequest({
            cookies: {_fbc: 'fb.1.1700000000000.ORDER'},
        });
        const event = (new ServerEvent())
            .setEventName('AddToCart')
            .setEventTime(1700000040)
            .setUserData((new UserData()).setEmail('a@b.com'))
            .setRequestContext(req);

        const ud = event.normalize().user_data;
        expect(ud.fbc).toBeTruthy();
        expect(ud.em).toBeTruthy();
        expect(ud.em.length).toBe(1);
    });

    test('order-independent: setRequestContext before setUserData', function() {
        const req = buildMockRequest({
            cookies: {_fbc: 'fb.1.1700000000000.ORDER'},
        });
        const event = (new ServerEvent())
            .setEventName('AddToCart')
            .setEventTime(1700000041)
            .setRequestContext(req)
            .setUserData((new UserData()).setEmail('a@b.com'));

        const ud = event.normalize().user_data;
        expect(ud.fbc).toBeTruthy();
        expect(ud.em).toBeTruthy();
        expect(ud.em.length).toBe(1);
    });

    test('normalize() output is stable across repeated calls', function() {
        const req = buildMockRequest({
            cookies: {_fbc: 'fb.1.1700000000000.IDEM'},
        });
        const event = (new ServerEvent())
            .setEventName('Lead')
            .setEventTime(1700000050)
            .setRequestContext(req);

        const first = event.normalize();
        const second = event.normalize();
        expect(second).toEqual(first);
    });
});
