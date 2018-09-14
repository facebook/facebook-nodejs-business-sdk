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
 * AdsPixelTrafficAnomalyConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelTrafficAnomalyConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      last_updated_time: 'last_updated_time',
      lookback_aggregation_window: 'lookback_aggregation_window',
      lower_bound_traffic_volume: 'lower_bound_traffic_volume',
      preferred_events: 'preferred_events',
      upper_bound_traffic_volume: 'upper_bound_traffic_volume'
    });
  }

  get (fields, params): AdsPixelTrafficAnomalyConfig {
    return this.read(
      fields,
      params
    );
  }
}
