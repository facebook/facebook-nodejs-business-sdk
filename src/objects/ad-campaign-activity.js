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
      updated_time_old: 'updated_time_old'
    });
  }

  static get BidStrategyNew (): Object {
    return Object.freeze({
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
      lowest_cost_with_bid_cap: 'LOWEST_COST_WITH_BID_CAP',
      target_cost: 'TARGET_COST'
    });
  }
  static get BidStrategyOld (): Object {
    return Object.freeze({
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
      lowest_cost_with_bid_cap: 'LOWEST_COST_WITH_BID_CAP',
      target_cost: 'TARGET_COST'
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
      video_views: 'VIDEO_VIEWS'
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
      video_views: 'VIDEO_VIEWS'
    });
  }
  static get OptimizationGoalNew (): Object {
    return Object.freeze({
      none: 'NONE',
      app_installs: 'APP_INSTALLS',
      brand_awareness: 'BRAND_AWARENESS',
      ad_recall_lift: 'AD_RECALL_LIFT',
      clicks: 'CLICKS',
      engaged_users: 'ENGAGED_USERS',
      event_responses: 'EVENT_RESPONSES',
      impressions: 'IMPRESSIONS',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      offer_claims: 'OFFER_CLAIMS',
      offsite_conversions: 'OFFSITE_CONVERSIONS',
      page_engagement: 'PAGE_ENGAGEMENT',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      reach: 'REACH',
      social_impressions: 'SOCIAL_IMPRESSIONS',
      video_views: 'VIDEO_VIEWS',
      app_downloads: 'APP_DOWNLOADS',
      landing_page_views: 'LANDING_PAGE_VIEWS',
      value: 'VALUE',
      replies: 'REPLIES'
    });
  }
  static get OptimizationGoalOld (): Object {
    return Object.freeze({
      none: 'NONE',
      app_installs: 'APP_INSTALLS',
      brand_awareness: 'BRAND_AWARENESS',
      ad_recall_lift: 'AD_RECALL_LIFT',
      clicks: 'CLICKS',
      engaged_users: 'ENGAGED_USERS',
      event_responses: 'EVENT_RESPONSES',
      impressions: 'IMPRESSIONS',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      offer_claims: 'OFFER_CLAIMS',
      offsite_conversions: 'OFFSITE_CONVERSIONS',
      page_engagement: 'PAGE_ENGAGEMENT',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      reach: 'REACH',
      social_impressions: 'SOCIAL_IMPRESSIONS',
      video_views: 'VIDEO_VIEWS',
      app_downloads: 'APP_DOWNLOADS',
      landing_page_views: 'LANDING_PAGE_VIEWS',
      value: 'VALUE',
      replies: 'REPLIES'
    });
  }
  static get ChangedAll (): Object {
    return Object.freeze({
      auto_create_lookalike: 'AUTO_CREATE_LOOKALIKE',
      bid_adjustments_spec: 'BID_ADJUSTMENTS_SPEC',
      bid_amount: 'BID_AMOUNT',
      bid_constraints: 'BID_CONSTRAINTS',
      bid_info: 'BID_INFO',
      bid_strategy: 'BID_STRATEGY',
      bid_type: 'BID_TYPE',
      billing_event: 'BILLING_EVENT',
      brande_audience_id: 'BRANDE_AUDIENCE_ID',
      budget_limit: 'BUDGET_LIMIT',
      created_time: 'CREATED_TIME',
      daily_impressions: 'DAILY_IMPRESSIONS',
      delivery_behavior: 'DELIVERY_BEHAVIOR',
      destination_type: 'DESTINATION_TYPE',
      dco_mode: 'DCO_MODE',
      frequency_cap: 'FREQUENCY_CAP',
      frequency_cap_reset_period: 'FREQUENCY_CAP_RESET_PERIOD',
      friendly_name: 'FRIENDLY_NAME',
      invoicing_limit: 'INVOICING_LIMIT',
      is_autobid: 'IS_AUTOBID',
      is_average_price_pacing: 'IS_AVERAGE_PRICE_PACING',
      lifetime_conversions: 'LIFETIME_CONVERSIONS',
      lifetime_frequency_cap: 'LIFETIME_FREQUENCY_CAP',
      lifetime_impressions: 'LIFETIME_IMPRESSIONS',
      lifetime_reach: 'LIFETIME_REACH',
      min_spend_target: 'MIN_SPEND_TARGET',
      optimization_goal: 'OPTIMIZATION_GOAL',
      optimization_subevent: 'OPTIMIZATION_SUBEVENT',
      pacing_type: 'PACING_TYPE',
      run_status: 'RUN_STATUS',
      schedule: 'SCHEDULE',
      spend_cap: 'SPEND_CAP',
      start_time: 'START_TIME',
      stop_time: 'STOP_TIME',
      targeting: 'TARGETING',
      targeting_expansion: 'TARGETING_EXPANSION'
    });
  }
  static get ChangedAny (): Object {
    return Object.freeze({
      auto_create_lookalike: 'AUTO_CREATE_LOOKALIKE',
      bid_adjustments_spec: 'BID_ADJUSTMENTS_SPEC',
      bid_amount: 'BID_AMOUNT',
      bid_constraints: 'BID_CONSTRAINTS',
      bid_info: 'BID_INFO',
      bid_strategy: 'BID_STRATEGY',
      bid_type: 'BID_TYPE',
      billing_event: 'BILLING_EVENT',
      brande_audience_id: 'BRANDE_AUDIENCE_ID',
      budget_limit: 'BUDGET_LIMIT',
      created_time: 'CREATED_TIME',
      daily_impressions: 'DAILY_IMPRESSIONS',
      delivery_behavior: 'DELIVERY_BEHAVIOR',
      destination_type: 'DESTINATION_TYPE',
      dco_mode: 'DCO_MODE',
      frequency_cap: 'FREQUENCY_CAP',
      frequency_cap_reset_period: 'FREQUENCY_CAP_RESET_PERIOD',
      friendly_name: 'FRIENDLY_NAME',
      invoicing_limit: 'INVOICING_LIMIT',
      is_autobid: 'IS_AUTOBID',
      is_average_price_pacing: 'IS_AVERAGE_PRICE_PACING',
      lifetime_conversions: 'LIFETIME_CONVERSIONS',
      lifetime_frequency_cap: 'LIFETIME_FREQUENCY_CAP',
      lifetime_impressions: 'LIFETIME_IMPRESSIONS',
      lifetime_reach: 'LIFETIME_REACH',
      min_spend_target: 'MIN_SPEND_TARGET',
      optimization_goal: 'OPTIMIZATION_GOAL',
      optimization_subevent: 'OPTIMIZATION_SUBEVENT',
      pacing_type: 'PACING_TYPE',
      run_status: 'RUN_STATUS',
      schedule: 'SCHEDULE',
      spend_cap: 'SPEND_CAP',
      start_time: 'START_TIME',
      stop_time: 'STOP_TIME',
      targeting: 'TARGETING',
      targeting_expansion: 'TARGETING_EXPANSION'
    });
  }

  get (fields, params): AdCampaignActivity {
    return this.read(
      fields,
      params
    );
  }
}
