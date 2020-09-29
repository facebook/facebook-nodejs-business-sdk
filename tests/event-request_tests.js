/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const {
    Event,
    EventRequest,
    EventResponse,
    FacebookAdsApi,
    HttpMethod,
    HttpServiceClientConfig,
    ServerEvent,
    UserData,
} = require('facebook-nodejs-business-sdk');
const {describe} = require('mocha');
const { expect } = require('chai');

describe('EventRequest', function() {
    describe('setHttpService', function() {
        it('event_request setClient overrides the HttpServiceClientConfig client', async function() {
            const expected_response = new EventResponse(
                0,
                ['messages-1'],
                'fb-trace-id-2',
                'id-3',
                4
            );
            let actual_url, actual_method, actual_headers, actual_params;
            const mock_http_service = {
                executeRequest: (url, method, headers, params) => {
                    return new Promise((resolve, reject) => {
                        actual_url = url;
                        actual_method = method;
                        actual_headers = headers;
                        actual_params = params;
                        return resolve(expected_response);
                    });
                }
            };
            const mock_http_service_unused = {
                executeRequest: (url, method, headers, params) => {
                    throw new Exception('should not have be called');
                }
            }
            HttpServiceClientConfig.setClient(mock_http_service_unused);
            const user_data = (new UserData()).setEmail('joe@eg.com');
            const server_event = (new ServerEvent())
                .setEventName('Purchase')
                .setEventTime(Math.floor(new Date() / 1000))
                .setUserData(user_data)
            const access_token = 'access-token-0';
            const pixel_id = 'pixel-id-1';
            const event_request = (new EventRequest(access_token, pixel_id))
                .setEvents([server_event])
                .setTestEventCode('test-code-2')
                .setHttpService(mock_http_service);
            const expected_url =`${FacebookAdsApi.GRAPH}/${FacebookAdsApi.VERSION}/${pixel_id}/events`
            const expected_method = HttpMethod.POST;
            const expected_headers = {
                'User-Agent': `fbbizsdk-nodejs-${FacebookAdsApi.VERSION}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            };
            const expected_params = {
                data: [server_event.normalize.call(server_event)],
                partner_agent: event_request.partner_agent,
                test_event_code: event_request.test_event_code,
                namespace_id: event_request.namespace_id,
                upload_id: event_request.upload_id,
                upload_tag: event_request.upload_tag,
                upload_source: event_request.upload_source,
                test_event_code: event_request.test_event_code,
                access_token: access_token,
            };
            let actual_response;
            const result = await event_request.execute()
                .then(response => {
                    actual_response = response;
                })
                .catch(exception => {
                    console.error(exception);
                });

            expect(actual_response).to.deep.equal(expected_response);
            expect(actual_url).to.equal(expected_url);
            expect(actual_method).to.equal(HttpMethod.POST);
            expect(actual_headers).to.deep.equal(expected_headers);
            expect(actual_params).to.deep.equal(expected_params);
        });

        it('HttpServiceClientConfig client gets used', async function() {
            const expected_response = new EventResponse(
                0,
                ['messages-1'],
                'fb-trace-id-2',
                'id-3',
                4
            );
            let actual_url, actual_method, actual_headers, actual_params;
            const mock_http_service = {
                executeRequest: (url, method, headers, params) => {
                    return new Promise((resolve, reject) => {
                        actual_url = url;
                        actual_method = method;
                        actual_headers = headers;
                        actual_params = params;
                        return resolve(expected_response);
                    });
                }
            };
            HttpServiceClientConfig.setClient(mock_http_service);
            const pixel_id = 'pixel-id-1';
            const user_data = (new UserData()).setEmail('joe@eg.com');
            const server_event = (new ServerEvent())
                .setEventName('Purchase')
                .setEventTime(Math.floor(new Date() / 1000))
                .setUserData(user_data)
            const access_token = 'access-token-0';
            const event_request = (new EventRequest(access_token, pixel_id))
                .setEvents([server_event])
                .setTestEventCode('test-code-2');
            const expected_url =`${FacebookAdsApi.GRAPH}/${FacebookAdsApi.VERSION}/${pixel_id}/events`
            const expected_method = HttpMethod.POST;
            const expected_headers = {
                'User-Agent': `fbbizsdk-nodejs-${FacebookAdsApi.VERSION}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            };
            const expected_params = {
                data: [server_event.normalize.call(server_event)],
                partner_agent: event_request.partner_agent,
                test_event_code: event_request.test_event_code,
                namespace_id: event_request.namespace_id,
                upload_id: event_request.upload_id,
                upload_tag: event_request.upload_tag,
                upload_source: event_request.upload_source,
                test_event_code: event_request.test_event_code,
                access_token: access_token,
            };
            let actual_response;
            const result = await event_request.execute()
                .then(response => {
                    actual_response = response;
                })
                .catch(exception => {
                    console.error(exception);
                });

            expect(actual_response).to.deep.equal(expected_response);
            expect(actual_url).to.equal(expected_url);
            expect(actual_method).to.equal(HttpMethod.POST);
            expect(actual_headers).to.deep.equal(expected_headers);
            expect(actual_params).to.deep.equal(expected_params);
        });
    });

    it('cloneWithoutEvents clones the EventRequest object without the events', async function() {
        const event_request = new EventRequest(
            'access_token-1',
            'pixel_id-2',
            [new Event()],
		    'partner_agent-3',
		    'test_event_code-4',
		    'namespace_id-5',
		    'upload_id-6',
		    'upload_tag-7',
		    'upload_source-8',
            true
        );
        const cloned = event_request.cloneWithoutEvents();

        expect(cloned.access_token).to.equal(event_request.access_token);
        expect(cloned.pixel_id).to.equal(event_request.pixel_id);
        expect(cloned.events).to.deep.equal([]);
        expect(cloned.partner_agent).to.equal(event_request.partner_agent);
        expect(cloned.test_event_code).to.equal(event_request.test_event_code);
        expect(cloned.namespace_id).to.equal(event_request.namespace_id);
        expect(cloned.upload_id).to.equal(event_request.upload_id);
        expect(cloned.upload_tag).to.equal(event_request.upload_tag);
        expect(cloned.upload_source).to.equal(event_request.upload_source);
        expect(cloned.debug_mode).to.equal(event_request.debug_mode);
        expect(cloned === event_request).to.equal(false);
    });
});
