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
 * ProductDeliveryPreference
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductDeliveryPreference extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_object_id: 'ad_object_id',
      id: 'id',
      product_priority: 'product_priority',
      product_priority_category: 'product_priority_category',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): ProductDeliveryPreference {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
