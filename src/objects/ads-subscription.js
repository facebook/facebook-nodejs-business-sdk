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
import Cursor from './../cursor';
import AdsSubscriptionDelete from './ads-subscription-delete';
import AdsSubscriptionGet from './ads-subscription-get';

/**
 * AdsSubscription
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsSubscription extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  gendelete (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/subscriptions/{Dynamic}',
      params
    );
  }

  genget (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsSubscriptionGet,
      fields,
      params,
      fetchFirstPage,
      '/subscriptions'
    );
  }
}
