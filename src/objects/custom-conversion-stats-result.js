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
 * CustomConversionStatsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomConversionStatsResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      aggregation: 'aggregation',
      data: 'data',
      timestamp: 'timestamp'
    });
  }

  static get Aggregation (): Object {
    return Object.freeze({
      count: 'COUNT',
      device_type: 'DEVICE_TYPE',
      host: 'HOST',
      pixel_fire: 'PIXEL_FIRE',
      unmatched_count: 'UNMATCHED_COUNT',
      unmatched_usd_amount: 'UNMATCHED_USD_AMOUNT',
      url: 'URL',
      usd_amount: 'USD_AMOUNT'
    });
  }
}
