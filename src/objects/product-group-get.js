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
 * ProductGroupGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductGroupGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      mini_shops_product_sets_count: 'mini_shops_product_sets_count',
      product_catalog: 'product_catalog',
      products: 'products',
      representative_item_id: 'representative_item_id',
      retailer_id: 'retailer_id',
      variants: 'variants',
    });
  }

}
