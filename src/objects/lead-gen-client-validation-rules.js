 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * LeadGenClientValidationRules
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenClientValidationRules extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      exclude_emoji_and_special_chars_enabled: 'exclude_emoji_and_special_chars_enabled',
      max_length_value: 'max_length_value',
      min_length_value: 'min_length_value',
    });
  }

}
