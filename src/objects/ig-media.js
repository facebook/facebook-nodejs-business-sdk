/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import IGComment from './ig-comment';
import InstagramInsightsResult from './instagram-insights-result';

/**
 * IGMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMedia extends AbstractCrudObject {
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

  getChildren (fields, params, fetchFirstPage = true): IGMedia {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/children'
    );
  }

  getComments (fields, params, fetchFirstPage = true): IGComment {
    return this.getEdge(
      IGComment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  createComment (fields, params): IGComment {
    return this.createEdge(
      '/comments',
      fields,
      params,
      IGComment
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

  get (fields, params): IGMedia {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): IGMedia {
    return super.update(
      params
    );
  }
}
