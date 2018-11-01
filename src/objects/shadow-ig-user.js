/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import InstagramInsightsResult from './instagram-insights-result';
import ShadowIGMedia from './shadow-ig-media';

/**
 * ShadowIGUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGUser extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      biography: 'biography',
      business_discovery: 'business_discovery',
      followers_count: 'followers_count',
      follows_count: 'follows_count',
      id: 'id',
      ig_id: 'ig_id',
      media_count: 'media_count',
      mentioned_comment: 'mentioned_comment',
      mentioned_media: 'mentioned_media',
      name: 'name',
      profile_picture_url: 'profile_picture_url',
      username: 'username',
      website: 'website'
    });
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

  createMedia (fields, params): ShadowIGMedia {
    return this.createEdge(
      '/media',
      fields,
      params,
      ShadowIGMedia
    );
  }

  createMediaPublish (fields, params): ShadowIGMedia {
    return this.createEdge(
      '/media_publish',
      fields,
      params,
      ShadowIGMedia
    );
  }

  get (fields, params): ShadowIGUser {
    return this.read(
      fields,
      params
    );
  }
}
