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
 * InsightsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InsightsResult extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      description: 'description',
      description_from_api_doc: 'description_from_api_doc',
      id: 'id',
      name: 'name',
      period: 'period',
      title: 'title',
      values: 'values',
    });
  }

  static get Breakdown (): Object {
    return Object.freeze({
      action_type: 'action_type',
      follow_type: 'follow_type',
      story_navigation_action_type: 'story_navigation_action_type',
      surface_type: 'surface_type',
    });
  }
  static get Metric (): Object {
    return Object.freeze({
      clips_replays_count: 'clips_replays_count',
      comments: 'comments',
      follows: 'follows',
      ig_reels_aggregated_all_plays_count: 'ig_reels_aggregated_all_plays_count',
      ig_reels_avg_watch_time: 'ig_reels_avg_watch_time',
      ig_reels_video_view_total_time: 'ig_reels_video_view_total_time',
      impressions: 'impressions',
      likes: 'likes',
      navigation: 'navigation',
      peak_concurrent_viewers: 'peak_concurrent_viewers',
      plays: 'plays',
      profile_activity: 'profile_activity',
      profile_visits: 'profile_visits',
      quotes: 'quotes',
      reach: 'reach',
      replies: 'replies',
      reposts: 'reposts',
      saved: 'saved',
      shares: 'shares',
      thread_replies: 'thread_replies',
      thread_shares: 'thread_shares',
      total_interactions: 'total_interactions',
      video_views: 'video_views',
      views: 'views',
    });
  }
  static get Period (): Object {
    return Object.freeze({
      day: 'day',
      days_28: 'days_28',
      lifetime: 'lifetime',
      month: 'month',
      total_over_range: 'total_over_range',
      week: 'week',
    });
  }
  static get DatePreset (): Object {
    return Object.freeze({
      data_maximum: 'data_maximum',
      last_14d: 'last_14d',
      last_28d: 'last_28d',
      last_30d: 'last_30d',
      last_3d: 'last_3d',
      last_7d: 'last_7d',
      last_90d: 'last_90d',
      last_month: 'last_month',
      last_quarter: 'last_quarter',
      last_week_mon_sun: 'last_week_mon_sun',
      last_week_sun_sat: 'last_week_sun_sat',
      last_year: 'last_year',
      maximum: 'maximum',
      this_month: 'this_month',
      this_quarter: 'this_quarter',
      this_week_mon_today: 'this_week_mon_today',
      this_week_sun_today: 'this_week_sun_today',
      this_year: 'this_year',
      today: 'today',
      yesterday: 'yesterday',
    });
  }
}
