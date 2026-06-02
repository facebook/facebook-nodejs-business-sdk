/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * Preference is an allowlist to specify what data are allowed to be
 * automatically set on the CAPI event from the request context object.
 * All fields default to true.
 */
export default class Preference {
	_is_fbc_allowed: boolean;
	_is_fbp_allowed: boolean;
	_is_client_ip_address_allowed: boolean;
	_is_referrer_url_allowed: boolean;
	_is_event_source_url_allowed: boolean;

	/**
	 * @param {Boolean} is_fbc_allowed Whether fbc is allowed (default: true)
	 * @param {Boolean} is_fbp_allowed Whether fbp is allowed (default: true)
	 * @param {Boolean} is_client_ip_address_allowed Whether client_ip_address is allowed (default: true)
	 * @param {Boolean} is_referrer_url_allowed Whether referrer_url is allowed (default: true)
	 * @param {Boolean} is_event_source_url_allowed Whether event_source_url is allowed (default: true)
	 */
	constructor(
		is_fbc_allowed: boolean = true,
		is_fbp_allowed: boolean = true,
		is_client_ip_address_allowed: boolean = true,
		is_referrer_url_allowed: boolean = true,
		is_event_source_url_allowed: boolean = true,
	) {
		this._is_fbc_allowed = is_fbc_allowed;
		this._is_fbp_allowed = is_fbp_allowed;
		this._is_client_ip_address_allowed = is_client_ip_address_allowed;
		this._is_referrer_url_allowed = is_referrer_url_allowed;
		this._is_event_source_url_allowed = is_event_source_url_allowed;
	}

	/**
	 * Gets whether fbc is allowed to be set from the request context.
	 */
	isFbcAllowed() {
		return this._is_fbc_allowed;
	}

	/**
	 * Gets whether fbp is allowed to be set from the request context.
	 */
	isFbpAllowed() {
		return this._is_fbp_allowed;
	}

	/**
	 * Gets whether client_ip_address is allowed to be set from the request context.
	 */
	isClientIpAddressAllowed() {
		return this._is_client_ip_address_allowed;
	}

	/**
	 * Gets whether referrer_url is allowed to be set from the request context.
	 */
	isReferrerUrlAllowed() {
		return this._is_referrer_url_allowed;
	}

	/**
	 * Gets whether event_source_url is allowed to be set from the request context.
	 */
	isEventSourceUrlAllowed() {
		return this._is_event_source_url_allowed;
	}
}
