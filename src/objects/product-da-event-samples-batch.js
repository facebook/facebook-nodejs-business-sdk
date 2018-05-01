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
 * ProductDaEventSamplesBatch
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductDaEventSamplesBatch extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      samples: 'samples',
      time_start: 'time_start',
      time_stop: 'time_stop'
    });
  }

  static get AggregationType (): Object {
    return Object.freeze({
      content_id: 'CONTENT_ID',
      content_url: 'CONTENT_URL'
    });
  }
  static get Event (): Object {
    return Object.freeze({
      viewcontent: 'ViewContent',
      addtocart: 'AddToCart',
      purchase: 'Purchase',
      initiatecheckout: 'InitiateCheckout',
      search: 'Search',
      lead: 'Lead',
      addtowishlist: 'AddToWishlist'
    });
  }
}
