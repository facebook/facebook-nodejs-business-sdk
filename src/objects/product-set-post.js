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
 * ProductSetPost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSetPost extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      filter: 'filter',
      id: 'id',
      name: 'name',
      parent_id: 'parent_id',
      product_count: 'product_count',
      retailer_id: 'retailer_id',
    });
  }

}
