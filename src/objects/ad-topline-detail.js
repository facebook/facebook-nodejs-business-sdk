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
 * AdToplineDetail
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdToplineDetail extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      active_status: 'active_status',
      ad_account_id: 'ad_account_id',
      flight_end_date: 'flight_end_date',
      flight_start_date: 'flight_start_date',
      id: 'id',
      io_number: 'io_number',
      line_number: 'line_number',
      price: 'price',
      quantity: 'quantity',
      sf_detail_line_id: 'sf_detail_line_id',
      subline_id: 'subline_id',
      targets: 'targets',
      time_created: 'time_created',
      time_updated: 'time_updated',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AdToplineDetail {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
