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
 * AdAccountDeliveryEstimate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountDeliveryEstimate extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      daily_outcomes_curve: 'daily_outcomes_curve',
      estimate_dau: 'estimate_dau',
      estimate_mau: 'estimate_mau',
      estimate_ready: 'estimate_ready',
    });
  }

  static get OptimizationGoal (): Object {
    return Object.freeze({
      ad_recall_lift: 'AD_RECALL_LIFT',
      app_downloads: 'APP_DOWNLOADS',
      app_installs: 'APP_INSTALLS',
      brand_awareness: 'BRAND_AWARENESS',
      clicks: 'CLICKS',
      derived_events: 'DERIVED_EVENTS',
      engaged_users: 'ENGAGED_USERS',
      event_responses: 'EVENT_RESPONSES',
      impressions: 'IMPRESSIONS',
      landing_page_views: 'LANDING_PAGE_VIEWS',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      none: 'NONE',
      offer_claims: 'OFFER_CLAIMS',
      offsite_conversions: 'OFFSITE_CONVERSIONS',
      page_engagement: 'PAGE_ENGAGEMENT',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      reach: 'REACH',
      replies: 'REPLIES',
      social_impressions: 'SOCIAL_IMPRESSIONS',
      thruplay: 'THRUPLAY',
      two_second_continuous_video_views: 'TWO_SECOND_CONTINUOUS_VIDEO_VIEWS',
      value: 'VALUE',
    });
  }
}
