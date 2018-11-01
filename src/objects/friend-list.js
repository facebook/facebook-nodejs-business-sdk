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

/**
 * FriendList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FriendList extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      list_type: 'list_type',
      name: 'name',
      owner: 'owner'
    });
  }

  static get ListType (): Object {
    return Object.freeze({
      app_created: 'app_created'
    });
  }

  deleteMembers (params): AbstractObject {
    return super.deleteEdge(
      '/members',
      params
    );
  }

  createMember (fields, params): FriendList {
    return this.createEdge(
      '/members',
      fields,
      params,
      FriendList
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): FriendList {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): FriendList {
    return super.update(
      params
    );
  }
}
