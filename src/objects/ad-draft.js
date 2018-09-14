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
 * AdDraft
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdDraft extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      api_version: 'api_version',
      async_request_set: 'async_request_set',
      author_id: 'author_id',
      created_by: 'created_by',
      id: 'id',
      is_active: 'is_active',
      name: 'name',
      publish_status: 'publish_status',
      state: 'state',
      summary: 'summary',
      time_created: 'time_created',
      time_updated: 'time_updated'
    });
  }

  getAdDraftFragments (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/addraft_fragments'
    );
  }

  getAdDraftPublish (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/addraft_publish'
    );
  }

  getAdDraftSubscribers (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/addraft_subscribers'
    );
  }

  get (fields, params): AdDraft {
    return this.read(
      fields,
      params
    );
  }
}
