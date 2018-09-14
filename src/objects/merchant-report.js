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
 * MerchantReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MerchantReport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      add_to_cart: 'add_to_cart',
      catalog_segment_purchase_value: 'catalog_segment_purchase_value',
      link_clicks: 'link_clicks',
      purchase: 'purchase',
      purchase_value: 'purchase_value',
      id: 'id'
    });
  }

  get (fields, params): MerchantReport {
    return this.read(
      fields,
      params
    );
  }
}
