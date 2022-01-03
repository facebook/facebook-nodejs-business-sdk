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
 * AdCampaignDeliveryEstimate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignDeliveryEstimate extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      daily_outcomes_curve: 'daily_outcomes_curve',
      estimate_dau: 'estimate_dau',
      estimate_mau: 'estimate_mau',
      estimate_mau_lower_bound: 'estimate_mau_lower_bound',
      estimate_mau_upper_bound: 'estimate_mau_upper_bound',
      estimate_ready: 'estimate_ready',
      targeting_optimization_types: 'targeting_optimization_types',
    });
  }

  static get OptimizationGoal (): Object {
    return Object.freeze({
      ad_recall_lift: 'AD_RECALL_LIFT',
      app_installs: 'APP_INSTALLS',
      app_installs_and_offsite_conversions: 'APP_INSTALLS_AND_OFFSITE_CONVERSIONS',
      conversations: 'CONVERSATIONS',
      derived_events: 'DERIVED_EVENTS',
      engaged_users: 'ENGAGED_USERS',
      event_responses: 'EVENT_RESPONSES',
      impressions: 'IMPRESSIONS',
      landing_page_views: 'LANDING_PAGE_VIEWS',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      none: 'NONE',
      offsite_conversions: 'OFFSITE_CONVERSIONS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      quality_call: 'QUALITY_CALL',
      quality_lead: 'QUALITY_LEAD',
      reach: 'REACH',
      thruplay: 'THRUPLAY',
      value: 'VALUE',
      visit_instagram_profile: 'VISIT_INSTAGRAM_PROFILE',
    });
  }
}
