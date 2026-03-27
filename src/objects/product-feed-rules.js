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
import ProductFeedRulesGet from './product-feed-rules-get';

/**
 * ProductFeedRules
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedRules extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genget (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductFeedRulesGet,
      fields,
      params,
      fetchFirstPage,
      '/rules'
    );
  }
}
