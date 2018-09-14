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
 * AdsPixelRealTimeEventLogResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelRealTimeEventLogResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      data_json: 'data_json',
      device_type: 'device_type',
      event: 'event',
      event_detection_method: 'event_detection_method',
      timestamp: 'timestamp',
      url: 'url',
      id: 'id'
    });
  }

  get (fields, params): AdsPixelRealTimeEventLogResult {
    return this.read(
      fields,
      params
    );
  }
}
