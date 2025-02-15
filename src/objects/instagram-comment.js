 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * InstagramComment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramComment extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      comment_type: 'comment_type',
      created_at: 'created_at',
      id: 'id',
      ig_comment_id: 'ig_comment_id',
      instagram_comment_id: 'instagram_comment_id',
      instagram_user: 'instagram_user',
      mentioned_instagram_users: 'mentioned_instagram_users',
      message: 'message',
      username: 'username',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): InstagramComment {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): InstagramComment {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
