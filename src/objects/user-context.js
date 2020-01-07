/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import Page from './page';

/**
 * UserContext
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserContext extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
    });
  }


  getMutualLikes (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/mutual_likes'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): UserContext {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
