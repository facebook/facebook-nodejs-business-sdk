/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
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
      name: 'name'
    });
  }

  deleteUsers (params): AbstractObject {
    return super.deleteEdge(
      '/users',
      params
    );
  }

  createUser (fields, params): User {
    return this.createEdge(
      '/users',
      fields,
      params,
      User
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): PageLabel {
    return this.read(
      fields,
      params
    );
  }
}
