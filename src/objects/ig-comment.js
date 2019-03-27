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
 * IGComment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGComment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      hidden: 'hidden',
      id: 'id',
      like_count: 'like_count',
      media: 'media',
      text: 'text',
      timestamp: 'timestamp',
      user: 'user',
      username: 'username'
    });
  }

  getReplies (fields, params, fetchFirstPage = true): IGComment {
    return this.getEdge(
      IGComment,
      fields,
      params,
      fetchFirstPage,
      '/replies'
    );
  }

  createReply (fields, params): IGComment {
    return this.createEdge(
      '/replies',
      fields,
      params,
      IGComment
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): IGComment {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): IGComment {
    return super.update(
      params
    );
  }
}
