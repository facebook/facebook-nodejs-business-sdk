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
import Page from './page';

/**
 * UserContext
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserContext extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id'
    });
  }

  getAllMutualFriends (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/all_mutual_friends'
    );
  }

  getMutualFriends (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/mutual_friends'
    );
  }

  getMutualLikes (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/mutual_likes'
    );
  }

  getThreeDegreeMutualFriends (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/three_degree_mutual_friends'
    );
  }

  get (fields, params): UserContext {
    return this.read(
      fields,
      params
    );
  }
}
