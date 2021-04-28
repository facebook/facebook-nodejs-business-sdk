/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import IGComment from './ig-comment';
import InstagramInsightsResult from './instagram-insights-result';

/**
 * IGMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMedia extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      caption: 'caption',
      comments_count: 'comments_count',
      id: 'id',
      ig_id: 'ig_id',
      is_comment_enabled: 'is_comment_enabled',
      like_count: 'like_count',
      media_product_type: 'media_product_type',
      media_type: 'media_type',
      media_url: 'media_url',
      owner: 'owner',
      permalink: 'permalink',
      shortcode: 'shortcode',
      thumbnail_url: 'thumbnail_url',
      timestamp: 'timestamp',
      username: 'username',
      video_title: 'video_title',
    });
  }


  getChildren (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/children'
    );
  }

  getComments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGComment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  createComment (fields: Array<string>, params: Object = {}): Promise<IGComment> {
    return this.createEdge(
      '/comments',
      fields,
      params,
      IGComment
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramInsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): IGMedia {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): IGMedia {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
