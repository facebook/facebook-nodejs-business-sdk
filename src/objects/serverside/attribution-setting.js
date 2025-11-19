/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * AttributionSetting represents the attribution configuration settings.
 */
export default class AttributionSetting {
    _inactivity_window_hours: number;
    _reattribution_window_hours: number;

    /**
     * @param {Number} inactivity_window_hours The inactivity window in hours.
     * @param {Number} reattribution_window_hours The reattribution window in hours.
     */
    constructor(inactivity_window_hours: number, reattribution_window_hours: number) {
        this._inactivity_window_hours = inactivity_window_hours;
        this._reattribution_window_hours = reattribution_window_hours;
    }

    /**
     * Returns the inactivity window hours.
     * Example: 24
     */
    get inactivity_window_hours(): number {
        return this._inactivity_window_hours;
    }

    /**
     * Set the inactivity window hours.
     * @param {Number} inactivity_window_hours The inactivity window in hours.
     */
    set inactivity_window_hours(inactivity_window_hours: number): void {
        this._inactivity_window_hours = inactivity_window_hours;
    }

    /**
     * Set the inactivity window hours.
     * @param {Number} inactivity_window_hours The inactivity window in hours.
     * @returns {AttributionSetting}
     */
    setInactivityWindowHours(inactivity_window_hours: number): AttributionSetting {
        this._inactivity_window_hours = inactivity_window_hours;
        return this;
    }

    /**
     * Returns the reattribution window hours.
     * Example: 168
     */
    get reattribution_window_hours(): number {
        return this._reattribution_window_hours;
    }

    /**
     * Set the reattribution window hours.
     * @param {Number} reattribution_window_hours The reattribution window in hours.
     */
    set reattribution_window_hours(reattribution_window_hours: number): void {
        this._reattribution_window_hours = reattribution_window_hours;
    }

    /**
     * Set the reattribution window hours.
     * @param {Number} reattribution_window_hours The reattribution window in hours.
     * @returns {AttributionSetting}
     */
    setReattributionWindowHours(reattribution_window_hours: number): AttributionSetting {
        this._reattribution_window_hours = reattribution_window_hours;
        return this;
    }

    /**
     * Returns the normalized payload for the attribution setting.
     * @returns {Object} normalized attribution setting payload.
     */
    normalize(): Object {
        const attributionSetting = {};

        if (this.inactivity_window_hours !== undefined && this.inactivity_window_hours !== null) {
            attributionSetting.inactivity_window_hours = this.inactivity_window_hours;
        }

        if (this.reattribution_window_hours !== undefined && this.reattribution_window_hours !== null) {
            attributionSetting.reattribution_window_hours = this.reattribution_window_hours;
        }

        return attributionSetting;
    }
}
