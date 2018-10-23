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
      brand: 'brand',
      catalog_segment: 'catalog_segment',
      catalog_segment_id: 'catalog_segment_id',
      catalog_segment_purchase_value: 'catalog_segment_purchase_value',
      category: 'category',
      date: 'date',
      link_clicks: 'link_clicks',
      merchant_currency: 'merchant_currency',
      page: 'page',
      page_id: 'page_id',
      product_id: 'product_id',
      product_quantity: 'product_quantity',
      product_total_value: 'product_total_value',
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
