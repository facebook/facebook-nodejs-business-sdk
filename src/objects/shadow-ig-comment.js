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
 * ShadowIGComment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGComment extends AbstractCrudObject {
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

  getReplies (fields, params, fetchFirstPage = true): ShadowIGComment {
    return this.getEdge(
      ShadowIGComment,
      fields,
      params,
      fetchFirstPage,
      '/replies'
    );
  }

  createReply (fields, params): ShadowIGComment {
    return this.createEdge(
      '/replies',
      fields,
      params,
      ShadowIGComment
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): ShadowIGComment {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): ShadowIGComment {
    return super.update(
      params
    );
  }
}
