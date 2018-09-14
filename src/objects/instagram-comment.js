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
 * InstagramComment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramComment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      comment_type: 'comment_type',
      created_at: 'created_at',
      id: 'id',
      instagram_comment_id: 'instagram_comment_id',
      mentioned_instagram_users: 'mentioned_instagram_users',
      message: 'message'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): InstagramComment {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): InstagramComment {
    return super.update(
      params
    );
  }
}
