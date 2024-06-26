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
 * ProductItemShipping
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemShipping extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      shipping_country: 'shipping_country',
      shipping_price_currency: 'shipping_price_currency',
      shipping_price_value: 'shipping_price_value',
      shipping_region: 'shipping_region',
      shipping_service: 'shipping_service',
    });
  }

}
