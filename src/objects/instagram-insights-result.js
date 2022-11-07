/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * InstagramInsightsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramInsightsResult extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      description: 'description',
      id: 'id',
      name: 'name',
      period: 'period',
      title: 'title',
      values: 'values',
    });
  }

  static get Metric (): Object {
    return Object.freeze({
      carousel_album_engagement: 'carousel_album_engagement',
      carousel_album_impressions: 'carousel_album_impressions',
      carousel_album_reach: 'carousel_album_reach',
      carousel_album_saved: 'carousel_album_saved',
      carousel_album_video_views: 'carousel_album_video_views',
      comments: 'comments',
      engagement: 'engagement',
      exits: 'exits',
      follows: 'follows',
      impressions: 'impressions',
      likes: 'likes',
      navigation: 'navigation',
      plays: 'plays',
      profile_activity: 'profile_activity',
      profile_visits: 'profile_visits',
      reach: 'reach',
      replies: 'replies',
      saved: 'saved',
      shares: 'shares',
      taps_back: 'taps_back',
      taps_forward: 'taps_forward',
      total_interactions: 'total_interactions',
      video_views: 'video_views',
    });
  }
  static get Period (): Object {
    return Object.freeze({
      day: 'day',
      days_28: 'days_28',
      lifetime: 'lifetime',
      month: 'month',
      week: 'week',
    });
  }
}
