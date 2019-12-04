/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import AdsPixel from './../ads-pixel';
import FacebookAdsApi from './../../api';
import EventResponse from './event-response';
import ServerEvent from './server-event';

/**
 * EventRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters}
 */

export default class EventRequest {

	_events: Array;
	_access_token: string;
	_test_event_code: string;
	_pixel: string;
	_debug_mode: bool;
	_api: Object

	/**
	 * @param {Array} events data for the request Payload for a Server Side Event
	 * @param {String} test_event_code Test Event Code used to verify that your server events are received correctly by Facebook.
	 * @param {String} access_token Access Token for the user calling Graph API
	 * @param {String} pixel Pixel Id to which you are sending the events
	 * @param {Boolean} debug_mode Set to true if you want to enable more logging in SDK
	 */
	constructor(events: Array, test_event_code: string, access_token: string, pixel: string, debug_mode_flag: bool = true) {

		this._events = events;
		this._test_event_code = test_event_code;
		this._pixel = pixel;
		this._access_token = access_token;
		this._debug_mode = debug_mode_flag;

		this.api = FacebookAdsApi.init(this._access_token);

		if (this.debug_mode) {
			this.api.setDebug(true);
		}
	}

	/**
	 * Gets the data for the request Payload for a Server Side Event. events is represented by a list/array of ServerEvent objects.
	 */
	get events() {
		return this._events;
	}

	/**
	 * Sets the events for the request Payload for a Server Side Event.
	 * data is represented by a list/array of ServerEvent objects.
	 * @param events for the current server event
	 */
	set events(events) {
		this._events = events;
	}


	/**
	 * Gets the test_event_code for the request
	 * Code used to verify that your server events are received correctly by Facebook.
	 * Use this code to test your server events in the Test Events feature in Events Manager.
	 * See Test Events Tool (https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/using-the-api#testEvents) for an example.
	 */
	get test_event_code() {
		return this._test_event_code;
	}

	/**
	 * Sets the test_event_code for the request
	 * Code used to verify that your server events are received correctly by Facebook.
	 * Use this code to test your server events in the Test Events feature in Events Manager.
	 * See Test Events Tool (https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/using-the-api#testEvents) for an example.
	 */
	set test_event_code(test_event_code) {
		this._test_event_code = test_event_code;
	}


	/**
	 * Gets the debug mode flag for the Graph API request
	 */
	get debug_mode() {
		return this._debug_mode;
	}

	/**
	 * Sets the debug mode flag for the Graph API request
	 * @param debug_mode boolean value representing whether you want to send the request in debug mode to get detailed logging.
	 */
	set debug_mode(debug_mode) {
		this._debug_mode = debug_mode;
	}


	/**
	 * Executes the current event_request data by making a call to the Facebook Graph API.
	 */
	execute(): EventResponse {
		let fields, params;
		fields = [];

		let normalized_events = [];

		for (let i = 0; i < this.events.length; i++) {
			const event = this.events[i];
			const normalized_event = event.normalize.call(event);
			normalized_events.push(normalized_event);
		}


		params = {
			'data': normalized_events,
		}

		if (this.test_event_code) {
			params['test_event_code'] = this.test_event_code;
		}

		const response = (new AdsPixel(this._pixel)).createEvent(
			fields,
			params
		);

		const eventResponse = new EventResponse(response.events_received, response.messages, response.fbtrace_id);

		return eventResponse;
	}
}
