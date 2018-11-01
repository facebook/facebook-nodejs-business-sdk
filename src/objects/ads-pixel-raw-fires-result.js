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
 * AdsPixelRawFiresResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelRawFiresResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      data_json: 'data_json',
      device_type: 'device_type',
      event: 'event',
      event_detection_method: 'event_detection_method',
      placed_url: 'placed_url',
      timestamp: 'timestamp',
      id: 'id'
    });
  }

  get (fields, params): AdsPixelRawFiresResult {
    return this.read(
      fields,
      params
    );
  }
}
