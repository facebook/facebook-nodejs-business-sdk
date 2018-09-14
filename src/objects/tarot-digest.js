/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Post from './post';

/**
 * TarotDigest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TarotDigest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creationtime: 'creationtime',
      errors: 'errors',
      has_errors: 'has_errors',
      id: 'id',
      is_schedulable: 'is_schedulable',
      publication_date: 'publication_date',
      publish_status: 'publish_status',
      title: 'title'
    });
  }

  static get PublishStatuses (): Object {
    return Object.freeze({
      published: 'PUBLISHED',
      draft: 'DRAFT',
      scheduled: 'SCHEDULED'
    });
  }

  getShareDPosts (fields, params, fetchFirstPage = true): Post {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/sharedposts'
    );
  }

  get (fields, params): TarotDigest {
    return this.read(
      fields,
      params
    );
  }
}
