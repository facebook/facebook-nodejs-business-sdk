/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

const sha256 = require('js-sha256');

/**
 * ServerSideUtils contains the Utility modules used for sending Server Side Events
 */

export default class ServerSideUtils {

	/**
	 * Normalizes the given paramter.
	 * @param  {String} [original_string]
	 * @param  {String} [field_value] Value to be normalized. eg: `foo@bar.com` for email value.
	 * @param  {String} [field_name] Key(Type) of Value to be normalized eg: 'em' for email type.
	 * @return {String} Normalized value for the string.
	 */
	static normalize(field_value: string, field_name: string) {
		if (field_value)
			field_value = field_value.toLowerCase();

		return ServerSideUtils.tosha256(field_value);
	}

	/**
	 * Calculates the SHA 256 hash of a given non-null string.
	 * @param  {String} [input] String to be hashed
	 * @return {String} SHA 256 Hash of the string
	 */
	static tosha256(input: string) {
		if (input === null)
			return input;

		return sha256(input);
	}
}
