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
import User from './user';

/**
 * PageLabel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageLabel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_time: 'creation_time',
      creator_id: 'creator_id',
      from: 'from',
      id: 'id',
      name: 'name',
    });
  }


  getUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/users'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): PageLabel {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
