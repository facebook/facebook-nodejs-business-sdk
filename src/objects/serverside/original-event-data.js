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

    /**
	 * @param {String} event_name A Meta pixel Standard Event or Custom Event name.
	 * @param {Number} event_time A Unix timestamp in seconds indicating when the original event occurred.
     */
    constructor(event_name: string, event_time: number) {
        this._event_name = event_name;
        this._event_time = event_time;
    }

    /**
	 * Gets the Event Name for the current Event.
	 */
	get event_name() {
		return this._event_name;
	}

	/**
	 * Sets the Event Name for the current Event.
	 * @param {String} event_name a Meta pixel Standard Event or Custom Event name.
	 */
	set event_name(event_name: string) {
		this._event_name = event_name;
	}

	/**
	 * Sets the Event Name for the current Event.
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

		return originalEventData;
	}
}
