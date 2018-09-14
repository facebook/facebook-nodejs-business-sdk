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
 * AdDeliveryInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdDeliveryInsights extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_set_id: 'ad_set_id',
      auction_competitiveness: 'auction_competitiveness',
      auction_overlap: 'auction_overlap',
      audience_saturation: 'audience_saturation',
      date_start: 'date_start',
      date_stop: 'date_stop',
      report_uris: 'report_uris',
      id: 'id'
    });
  }

  get (fields, params): AdDeliveryInsights {
    return this.read(
      fields,
      params
    );
  }
}
