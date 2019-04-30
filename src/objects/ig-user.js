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
import InstagramInsightsResult from './instagram-insights-result';
import IGMedia from './ig-media';

/**
 * IGUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUser extends AbstractCrudObject {
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

  getMedia (fields, params, fetchFirstPage = true): IGMedia {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/media'
    );
  }

  createMedia (fields, params): IGMedia {
    return this.createEdge(
      '/media',
      fields,
      params,
      IGMedia
    );
  }

  createMediaPublish (fields, params): IGMedia {
    return this.createEdge(
      '/media_publish',
      fields,
      params,
      IGMedia
    );
  }

  createMention (fields, params): AbstractObject {
    return this.createEdge(
      '/mentions',
      fields,
      params

    );
  }

  getRecentlySearchedHashtags (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/recently_searched_hashtags'
    );
  }

  getStories (fields, params, fetchFirstPage = true): IGMedia {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/stories'
    );
  }

  getTags (fields, params, fetchFirstPage = true): IGMedia {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/tags'
    );
  }

  get (fields, params): IGUser {
    return this.read(
      fields,
      params
    );
  }
}
