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
 * EventTicketTier
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventTicketTier extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      currency: 'currency',
      description: 'description',
      end_sales_time: 'end_sales_time',
      end_show_time: 'end_show_time',
      fee_settings: 'fee_settings',
      id: 'id',
      maximum_quantity: 'maximum_quantity',
      metadata: 'metadata',
      minimum_quantity: 'minimum_quantity',
      name: 'name',
      price: 'price',
      priority: 'priority',
      retailer_id: 'retailer_id',
      seating_map_image_url: 'seating_map_image_url',
      start_sales_time: 'start_sales_time',
      start_show_time: 'start_show_time',
      status: 'status',
      total_quantity: 'total_quantity',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): EventTicketTier {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
