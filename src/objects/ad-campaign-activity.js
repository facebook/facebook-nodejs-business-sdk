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
 * AdCampaignActivity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignActivity extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      auto_create_lookalike_new: 'auto_create_lookalike_new',
      auto_create_lookalike_old: 'auto_create_lookalike_old',
      bid_adjustments_spec_new: 'bid_adjustments_spec_new',
      bid_adjustments_spec_old: 'bid_adjustments_spec_old',
      bid_amount_new: 'bid_amount_new',
      bid_amount_old: 'bid_amount_old',
      bid_constraints_new: 'bid_constraints_new',
      bid_constraints_old: 'bid_constraints_old',
      bid_info_new: 'bid_info_new',
      bid_info_old: 'bid_info_old',
      bid_strategy_new: 'bid_strategy_new',
      bid_strategy_old: 'bid_strategy_old',
      bid_type_new: 'bid_type_new',
      bid_type_old: 'bid_type_old',
      billing_event_new: 'billing_event_new',
      billing_event_old: 'billing_event_old',
      brande_audience_id_new: 'brande_audience_id_new',
      brande_audience_id_old: 'brande_audience_id_old',
      budget_limit_new: 'budget_limit_new',
      budget_limit_old: 'budget_limit_old',
      created_time: 'created_time',
      daily_impressions_new: 'daily_impressions_new',
      daily_impressions_old: 'daily_impressions_old',
      dco_mode_new: 'dco_mode_new',
      dco_mode_old: 'dco_mode_old',
      delivery_behavior_new: 'delivery_behavior_new',
      delivery_behavior_old: 'delivery_behavior_old',
      destination_type_new: 'destination_type_new',
      destination_type_old: 'destination_type_old',
      event_time: 'event_time',
      event_type: 'event_type',
      id: 'id',
      invoicing_limit_new: 'invoicing_limit_new',
      invoicing_limit_old: 'invoicing_limit_old',
      min_spend_target_new: 'min_spend_target_new',
      min_spend_target_old: 'min_spend_target_old',
      name_new: 'name_new',
      name_old: 'name_old',
      optimization_goal_new: 'optimization_goal_new',
      optimization_goal_old: 'optimization_goal_old',
      pacing_type_new: 'pacing_type_new',
      pacing_type_old: 'pacing_type_old',
      run_status_new: 'run_status_new',
      run_status_old: 'run_status_old',
      schedule_new: 'schedule_new',
      schedule_old: 'schedule_old',
      spend_cap_new: 'spend_cap_new',
      spend_cap_old: 'spend_cap_old',
      start_time_new: 'start_time_new',
      start_time_old: 'start_time_old',
      stop_time_new: 'stop_time_new',
      stop_time_old: 'stop_time_old',
      targeting_expansion_new: 'targeting_expansion_new',
      targeting_expansion_old: 'targeting_expansion_old',
      updated_time_new: 'updated_time_new',
      updated_time_old: 'updated_time_old',
    });
  }

  static get BidStrategyNew (): Object {
    return Object.freeze({
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
      lowest_cost_with_bid_cap: 'LOWEST_COST_WITH_BID_CAP',
      target_cost: 'TARGET_COST',
    });
  }
  static get BidStrategyOld (): Object {
    return Object.freeze({
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
      lowest_cost_with_bid_cap: 'LOWEST_COST_WITH_BID_CAP',
      target_cost: 'TARGET_COST',
    });
  }
  static get BillingEventNew (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      clicks: 'CLICKS',
      impressions: 'IMPRESSIONS',
      link_clicks: 'LINK_CLICKS',
      none: 'NONE',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      thruplay: 'THRUPLAY',
    });
  }
  static get BillingEventOld (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      clicks: 'CLICKS',
      impressions: 'IMPRESSIONS',
      link_clicks: 'LINK_CLICKS',
      none: 'NONE',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      thruplay: 'THRUPLAY',
    });
  }
  static get OptimizationGoalNew (): Object {
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
      visit_instagram_profile: 'VISIT_INSTAGRAM_PROFILE',
    });
  }
  static get OptimizationGoalOld (): Object {
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
      visit_instagram_profile: 'VISIT_INSTAGRAM_PROFILE',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): AdCampaignActivity {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
