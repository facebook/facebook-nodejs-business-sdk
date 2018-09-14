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
 * VideoStats
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoStats extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      aggregate: 'aggregate',
      error: 'error',
      metadata: 'metadata',
      time_series: 'time_series',
      totals: 'totals',
      x_axis_breakdown: 'x_axis_breakdown',
      id: 'id'
    });
  }

  static get Metrics (): Object {
    return Object.freeze({
      average_watch_time: 'AVERAGE_WATCH_TIME',
      lifetime_comments: 'LIFETIME_COMMENTS',
      lifetime_reactions: 'LIFETIME_REACTIONS',
      lifetime_shares: 'LIFETIME_SHARES',
      lifetime_social_actions: 'LIFETIME_SOCIAL_ACTIONS',
      net_followers: 'NET_FOLLOWERS',
      uploaded_comments: 'UPLOADED_COMMENTS',
      uploaded_reactions: 'UPLOADED_REACTIONS',
      uploaded_shares: 'UPLOADED_SHARES',
      uploaded_social_actions: 'UPLOADED_SOCIAL_ACTIONS',
      uploaded_reach: 'UPLOADED_REACH',
      uploaded_views_3s: 'UPLOADED_VIEWS_3S',
      uploaded_views_3s_organic: 'UPLOADED_VIEWS_3S_ORGANIC',
      uploaded_views_3s_paid: 'UPLOADED_VIEWS_3S_PAID',
      uploaded_watch_time_minutes: 'UPLOADED_WATCH_TIME_MINUTES',
      uploaded_watch_time_minutes_organic: 'UPLOADED_WATCH_TIME_MINUTES_ORGANIC',
      uploaded_watch_time_minutes_paid: 'UPLOADED_WATCH_TIME_MINUTES_PAID',
      ad_cpm: 'AD_CPM',
      ad_impressions: 'AD_IMPRESSIONS',
      revenue: 'REVENUE',
      rpm: 'RPM',
      minute_monetizable_views: 'MINUTE_MONETIZABLE_VIEWS',
      ad_subsidy: 'AD_SUBSIDY',
      earning_with_subsidy: 'EARNING_WITH_SUBSIDY'
    });
  }
  static get RequestedFields (): Object {
    return Object.freeze({
      aggregate: 'AGGREGATE',
      time_series: 'TIME_SERIES'
    });
  }

  get (fields, params): VideoStats {
    return this.read(
      fields,
      params
    );
  }
}
