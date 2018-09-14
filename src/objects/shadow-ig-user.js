/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AnalyticsCohortQueryResult from './analytics-cohort-query-result';
import AnalyticsEntityUserConfig from './analytics-entity-user-config';
import AnalyticsEventTypes from './analytics-event-types';
import AnalyticsFunnelQueryResult from './analytics-funnel-query-result';
import AnalyticsQueryResult from './analytics-query-result';
import AnalyticsQueryExportResult from './analytics-query-export-result';
import AnalyticsSegment from './analytics-segment';
import ShadowIGMedia from './shadow-ig-media';
import InstagramInsightsResult from './instagram-insights-result';
import VideoGroup from './video-group';

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

  getAnalyticsCohortQuery (fields, params, fetchFirstPage = true): AnalyticsCohortQueryResult {
    return this.getEdge(
      AnalyticsCohortQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_cohort_query'
    );
  }

  getAnalyticsEntityUserConfig (fields, params, fetchFirstPage = true): AnalyticsEntityUserConfig {
    return this.getEdge(
      AnalyticsEntityUserConfig,
      fields,
      params,
      fetchFirstPage,
      '/analytics_entity_user_config'
    );
  }

  getAnalyticsEventTypes (fields, params, fetchFirstPage = true): AnalyticsEventTypes {
    return this.getEdge(
      AnalyticsEventTypes,
      fields,
      params,
      fetchFirstPage,
      '/analytics_event_types'
    );
  }

  getAnalyticsFunnelQuery (fields, params, fetchFirstPage = true): AnalyticsFunnelQueryResult {
    return this.getEdge(
      AnalyticsFunnelQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_funnel_query'
    );
  }

  getAnalyticsQuery (fields, params, fetchFirstPage = true): AnalyticsQueryResult {
    return this.getEdge(
      AnalyticsQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_query'
    );
  }

  getAnalyticsQueryExport (fields, params, fetchFirstPage = true): AnalyticsQueryExportResult {
    return this.getEdge(
      AnalyticsQueryExportResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_query_export'
    );
  }

  getAnalyticsSegments (fields, params, fetchFirstPage = true): AnalyticsSegment {
    return this.getEdge(
      AnalyticsSegment,
      fields,
      params,
      fetchFirstPage,
      '/analytics_segments'
    );
  }

  getBrandedContent (fields, params, fetchFirstPage = true): ShadowIGMedia {
    return this.getEdge(
      ShadowIGMedia,
      fields,
      params,
      fetchFirstPage,
      '/branded_content'
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

  getMedia (fields, params, fetchFirstPage = true): ShadowIGMedia {
    return this.getEdge(
      ShadowIGMedia,
      fields,
      params,
      fetchFirstPage,
      '/media'
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

  getStories (fields, params, fetchFirstPage = true): ShadowIGMedia {
    return this.getEdge(
      ShadowIGMedia,
      fields,
      params,
      fetchFirstPage,
      '/stories'
    );
  }

  getTags (fields, params, fetchFirstPage = true): ShadowIGMedia {
    return this.getEdge(
      ShadowIGMedia,
      fields,
      params,
      fetchFirstPage,
      '/tags'
    );
  }

  getVideoGroups (fields, params, fetchFirstPage = true): VideoGroup {
    return this.getEdge(
      VideoGroup,
      fields,
      params,
      fetchFirstPage,
      '/video_groups'
    );
  }

  get (fields, params): ShadowIGUser {
    return this.read(
      fields,
      params
    );
  }
}
