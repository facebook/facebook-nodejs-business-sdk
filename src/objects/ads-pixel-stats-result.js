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
 * AdsPixelStatsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelStatsResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      aggregation: 'aggregation',
      data: 'data',
      timestamp: 'timestamp'
    });
  }

  static get Aggregation (): Object {
    return Object.freeze({
      browser_type: 'BROWSER_TYPE',
      custom_data_field: 'CUSTOM_DATA_FIELD',
      device_os: 'DEVICE_OS',
      device_type: 'DEVICE_TYPE',
      event: 'EVENT',
      host: 'HOST',
      pixel_fire: 'PIXEL_FIRE',
      url: 'URL'
    });
  }
}
