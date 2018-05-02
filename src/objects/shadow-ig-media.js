/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import ShadowIGComment from './shadow-ig-comment';
import InstagramInsightsResult from './instagram-insights-result';

/**
 * ShadowIGMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGMedia extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      caption: 'caption',
      comments_count: 'comments_count',
      id: 'id',
      ig_id: 'ig_id',
      is_comment_enabled: 'is_comment_enabled',
      like_count: 'like_count',
      media_type: 'media_type',
      media_url: 'media_url',
      owner: 'owner',
      permalink: 'permalink',
      shortcode: 'shortcode',
      thumbnail_url: 'thumbnail_url',
      timestamp: 'timestamp',
      username: 'username'
    });
  }

  getComments (fields, params, fetchFirstPage = true): ShadowIGComment {
    return this.getEdge(
      ShadowIGComment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  createComment (fields, params): ShadowIGComment {
    return this.createEdge(
      '/comments',
      fields,
      params,
      ShadowIGComment
    );
  }

  getInsights (fields, params, fetchFirstPage = true): InstagramInsightsResult {
    return this.getEdge(
      InstagramInsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  get (fields, params): ShadowIGMedia {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): ShadowIGMedia {
    return super.update(
      params
    );
  }
}
