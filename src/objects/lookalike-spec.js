/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * LookalikeSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LookalikeSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      country: 'country',
      is_financial_service: 'is_financial_service',
      origin: 'origin',
      ratio: 'ratio',
      starting_ratio: 'starting_ratio',
      target_countries: 'target_countries',
      type: 'type'
    });
  }
}
