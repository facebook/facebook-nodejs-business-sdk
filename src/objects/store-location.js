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
 * StoreLocation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class StoreLocation extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      full_address: 'full_address',
      hours: 'hours',
      id: 'id',
      phone_number: 'phone_number',
      pickup_options: 'pickup_options',
      price_range: 'price_range',
      store_code: 'store_code',
      zip_code: 'zip_code',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): StoreLocation {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
