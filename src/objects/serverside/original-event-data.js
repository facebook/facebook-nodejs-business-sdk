/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * OriginalEventData contains original event info used for attribution passback event or generalized value optimization(GVO).
 */
export default class OriginalEventData {
    _event_name: string;
	_event_time: number;
	_order_id: string;
	_event_id: string;

    /**
	 * @param {String} event_name A Meta pixel Standard Event or Custom Event name.
	 * @param {Number} event_time A Unix timestamp in seconds indicating when the original event occurred.
	 * @param {String} order_id The order ID for this transaction as a string.
	 * @param {String} event_id A unique string chosen by the advertiser.
     */
    constructor(event_name: string, event_time: number, order_id: string, event_id: string) {
        this._event_name = event_name;
        this._event_time = event_time;
        this._order_id = order_id;
        this._event_id = event_id;
    }

    /**
	 * Gets the Event Name for the original Event.
	 */
	get event_name() {
		return this._event_name;
	}

	/**
	 * Sets the Event Name for the original Event.
	 * @param {String} event_name a Meta pixel Standard Event or Custom Event name.
	 */
	set event_name(event_name: string) {
		this._event_name = event_name;
	}

	/**
	 * Sets the Event Name for the original Event.
	 * @param {String} event_name Meta pixel Standard Event or Custom Event name.
	 */
	setEventName(event_name: string) : OriginalEventData {
		this._event_name = event_name;
		return this;
	}

	/**
	 * Gets the Event Time when the original Event happened.
	 */
	get event_time() {
		return this._event_time;
	}

	/**
	 * Sets the Event Time when the original Event happened.
	 * @param {Number} event_time is a Unix timestamp in seconds indicating when the original event occurred.
	 */
	set event_time(event_time: number) {
		this._event_time = event_time;
	}

	/**
	 * Sets the Event Time when the original Event happened.
	 * @param {Number} event_time is a Unix timestamp in seconds indicating when the original event occurred.
	 */
	setEventTime(event_time: number) : OriginalEventData {
		this._event_time = event_time;
		return this;
	}

	/**
	 * Gets the order_id of original Event.
	 */
	get order_id() {
		return this._order_id;
	}

	/**
	 * Sets the Order ID for the original Event.
	 * @param {String} order_id The order ID for this transaction as a string.
	 */
	set order_id(order_id: string) {
		this._order_id = order_id;
	}

	/**
	 * Sets the Order ID for the original Event.
	 * @param {String} order_id The order ID for this transaction as a string.
	 */
	setOrderID(order_id: string) : OriginalEventData {
		this._order_id = order_id;
		return this;
	}

	/**
	 * Gets the event_id of original Event.
	 */
	get event_id() {
		return this._event_id;
	}

	/**
	 * Sets the Event ID for the original Event.
	 * @param {String} event_id A unique string chosen by the advertiser.
	 */
	set event_id(event_id: string) {
		this._event_id = event_id;
	}

	/**
	 * Sets the Event ID for the original Event.
	 * @param {String} event_id A unique string chosen by the advertiser.
	 */
	setEventID(event_id: string) : OriginalEventData {
		this._event_id = event_id;
		return this;
	}

    /**
	 * Returns the normalized payload for the original event data.
	 * @returns {Object} normalized original event data payload.
	 */
	normalize(): Object {

		const originalEventData = {};

		if (this.event_name) {
			originalEventData.event_name = this.event_name;
		}

		if (this.event_time) {
			originalEventData.event_time = this.event_time;
		}

		if (this.order_id) {
			originalEventData.order_id = this.order_id;
		}

		if (this.event_id) {
			originalEventData.event_id = this.event_id;
		}

		return originalEventData;
	}
}
