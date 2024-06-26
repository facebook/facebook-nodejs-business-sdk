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
 * ProductItemInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemInsights extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_click_count: 'ad_click_count',
      ad_impression_count: 'ad_impression_count',
      add_to_cart_count: 'add_to_cart_count',
      purchase_count: 'purchase_count',
      view_content_count: 'view_content_count',
    });
  }

}
