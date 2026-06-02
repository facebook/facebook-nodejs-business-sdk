/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {Preference} = require('facebook-nodejs-business-sdk');

describe('Preference', function() {
    test('default constructor allows everything', function() {
        const p = new Preference();
        expect(p.isFbcAllowed()).toBe(true);
        expect(p.isFbpAllowed()).toBe(true);
        expect(p.isClientIpAddressAllowed()).toBe(true);
        expect(p.isReferrerUrlAllowed()).toBe(true);
    });

    test('all-disallowed denies every field', function() {
        const p = new Preference(false, false, false, false);
        expect(p.isFbcAllowed()).toBe(false);
        expect(p.isFbpAllowed()).toBe(false);
        expect(p.isClientIpAddressAllowed()).toBe(false);
        expect(p.isReferrerUrlAllowed()).toBe(false);
    });

    test('partial allowlist keeps requested flags true', function() {
        // Only fbc and client_ip_address allowed.
        const p = new Preference(true, false, true, false);
        expect(p.isFbcAllowed()).toBe(true);
        expect(p.isFbpAllowed()).toBe(false);
        expect(p.isClientIpAddressAllowed()).toBe(true);
        expect(p.isReferrerUrlAllowed()).toBe(false);
    });

    test('each flag is independently controllable', function() {
        const cases = [
            [true,  false, false, false, 'fbc'],
            [false, true,  false, false, 'fbp'],
            [false, false, true,  false, 'client_ip_address'],
            [false, false, false, true,  'referrer_url'],
        ];
        for (const [fbc, fbp, ip, ref, label] of cases) {
            const p = new Preference(fbc, fbp, ip, ref);
            expect(p.isFbcAllowed()).toBe(fbc);
            expect(p.isFbpAllowed()).toBe(fbp);
            expect(p.isClientIpAddressAllowed()).toBe(ip);
            expect(p.isReferrerUrlAllowed()).toBe(ref);
        }
    });
});
