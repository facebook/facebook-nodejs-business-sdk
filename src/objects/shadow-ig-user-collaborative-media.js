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
 * ShadowIGUserCollaborativeMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGUserCollaborativeMedia extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      caption: 'caption',
      comments_count: 'comments_count',
      id: 'id',
      like_count: 'like_count',
      media_product_type: 'media_product_type',
      media_type: 'media_type',
      media_url: 'media_url',
      permalink: 'permalink',
      reposts_count: 'reposts_count',
      saved_count: 'saved_count',
      shares_count: 'shares_count',
      thumbnail_url: 'thumbnail_url',
      timestamp: 'timestamp',
      total_comments_count: 'total_comments_count',
      total_like_count: 'total_like_count',
      total_views_count: 'total_views_count',
      username: 'username',
    });
  }

}
