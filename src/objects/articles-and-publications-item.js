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
import ArticlesAndPublicationsItemDelete from './articles-and-publications-item-delete';

/**
 * ArticlesAndPublicationsItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ArticlesAndPublicationsItem extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  gendelete (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/',
      params
    );
  }
}
