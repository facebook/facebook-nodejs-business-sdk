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
 * OverrideDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OverrideDetails extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      key: 'key',
      type: 'type',
      values: 'values',
    });
  }

  static get Type (): Object {
    return Object.freeze({
      country: 'COUNTRY',
      language: 'LANGUAGE',
      language_and_country: 'LANGUAGE_AND_COUNTRY',
    });
  }
}
