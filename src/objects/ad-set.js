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
import Cursor from './../cursor';
import AdActivity from './ad-activity';
import AdStudy from './ad-study';
import AdCreative from './ad-creative';
import AdRule from './ad-rule';
import Ad from './ad';
import AdAsyncRequest from './ad-async-request';
import AdCampaignDeliveryEstimate from './ad-campaign-delivery-estimate';
import AdsInsights from './ads-insights';
import AdReportRun from './ad-report-run';
import TargetingSentenceLine from './targeting-sentence-line';

/**
 * AdSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account_id: 'account_id',
      adlabels: 'adlabels',
      adset_schedule: 'adset_schedule',
      asset_feed_id: 'asset_feed_id',
      attribution_spec: 'attribution_spec',
      bid_adjustments: 'bid_adjustments',
      bid_amount: 'bid_amount',
      bid_constraints: 'bid_constraints',
      bid_info: 'bid_info',
      bid_strategy: 'bid_strategy',
      billing_event: 'billing_event',
      budget_remaining: 'budget_remaining',
      campaign: 'campaign',
      campaign_attribution: 'campaign_attribution',
      campaign_id: 'campaign_id',
      configured_status: 'configured_status',
      created_time: 'created_time',
      creative_sequence: 'creative_sequence',
      daily_budget: 'daily_budget',
      daily_min_spend_target: 'daily_min_spend_target',
      daily_spend_cap: 'daily_spend_cap',
      destination_type: 'destination_type',
      dsa_beneficiary: 'dsa_beneficiary',
      dsa_payor: 'dsa_payor',
      effective_status: 'effective_status',
      end_time: 'end_time',
      existing_customer_budget_percentage: 'existing_customer_budget_percentage',
      frequency_control_specs: 'frequency_control_specs',
      full_funnel_exploration_mode: 'full_funnel_exploration_mode',
      id: 'id',
      instagram_actor_id: 'instagram_actor_id',
      is_dynamic_creative: 'is_dynamic_creative',
      issues_info: 'issues_info',
      learning_stage_info: 'learning_stage_info',
      lifetime_budget: 'lifetime_budget',
      lifetime_imps: 'lifetime_imps',
      lifetime_min_spend_target: 'lifetime_min_spend_target',
      lifetime_spend_cap: 'lifetime_spend_cap',
      multi_optimization_goal_weight: 'multi_optimization_goal_weight',
      name: 'name',
      optimization_goal: 'optimization_goal',
      optimization_sub_event: 'optimization_sub_event',
      pacing_type: 'pacing_type',
      promoted_object: 'promoted_object',
      recommendations: 'recommendations',
      recurring_budget_semantics: 'recurring_budget_semantics',
      review_feedback: 'review_feedback',
      rf_prediction_id: 'rf_prediction_id',
      source_adset: 'source_adset',
      source_adset_id: 'source_adset_id',
      start_time: 'start_time',
      status: 'status',
      targeting: 'targeting',
      targeting_optimization_types: 'targeting_optimization_types',
      time_based_ad_rotation_id_blocks: 'time_based_ad_rotation_id_blocks',
      time_based_ad_rotation_intervals: 'time_based_ad_rotation_intervals',
      updated_time: 'updated_time',
      use_new_app_click: 'use_new_app_click',
    });
  }

  static get BidStrategy (): Object {
    return Object.freeze({
      cost_cap: 'COST_CAP',
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
      lowest_cost_with_bid_cap: 'LOWEST_COST_WITH_BID_CAP',
    });
  }
  static get BillingEvent (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      clicks: 'CLICKS',
      impressions: 'IMPRESSIONS',
      link_clicks: 'LINK_CLICKS',
      listing_interaction: 'LISTING_INTERACTION',
      none: 'NONE',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      purchase: 'PURCHASE',
      thruplay: 'THRUPLAY',
    });
  }
  static get ConfiguredStatus (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      deleted: 'DELETED',
      paused: 'PAUSED',
    });
  }
  static get EffectiveStatus (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      campaign_paused: 'CAMPAIGN_PAUSED',
      deleted: 'DELETED',
      in_process: 'IN_PROCESS',
      paused: 'PAUSED',
      with_issues: 'WITH_ISSUES',
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
      in_app_value: 'IN_APP_VALUE',
      landing_page_views: 'LANDING_PAGE_VIEWS',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      messaging_appointment_conversion: 'MESSAGING_APPOINTMENT_CONVERSION',
      messaging_purchase_conversion: 'MESSAGING_PURCHASE_CONVERSION',
      none: 'NONE',
      offsite_conversions: 'OFFSITE_CONVERSIONS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      quality_call: 'QUALITY_CALL',
      quality_lead: 'QUALITY_LEAD',
      reach: 'REACH',
      subscribers: 'SUBSCRIBERS',
      thruplay: 'THRUPLAY',
      value: 'VALUE',
      visit_instagram_profile: 'VISIT_INSTAGRAM_PROFILE',
    });
  }
  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      deleted: 'DELETED',
      paused: 'PAUSED',
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
  static get DestinationType (): Object {
    return Object.freeze({
      app: 'APP',
      applinks_automatic: 'APPLINKS_AUTOMATIC',
      facebook: 'FACEBOOK',
      messenger: 'MESSENGER',
      undefined: 'UNDEFINED',
      website: 'WEBSITE',
    });
  }
  static get ExecutionOptions (): Object {
    return Object.freeze({
      include_recommendations: 'include_recommendations',
      validate_only: 'validate_only',
    });
  }
  static get FullFunnelExplorationMode (): Object {
    return Object.freeze({
      extended_exploration: 'EXTENDED_EXPLORATION',
      limited_exploration: 'LIMITED_EXPLORATION',
      none_exploration: 'NONE_EXPLORATION',
    });
  }
  static get MultiOptimizationGoalWeight (): Object {
    return Object.freeze({
      balanced: 'BALANCED',
      prefer_event: 'PREFER_EVENT',
      prefer_install: 'PREFER_INSTALL',
      undefined: 'UNDEFINED',
    });
  }
  static get OptimizationSubEvent (): Object {
    return Object.freeze({
      none: 'NONE',
      travel_intent: 'TRAVEL_INTENT',
      travel_intent_bucket_01: 'TRAVEL_INTENT_BUCKET_01',
      travel_intent_bucket_02: 'TRAVEL_INTENT_BUCKET_02',
      travel_intent_bucket_03: 'TRAVEL_INTENT_BUCKET_03',
      travel_intent_bucket_04: 'TRAVEL_INTENT_BUCKET_04',
      travel_intent_bucket_05: 'TRAVEL_INTENT_BUCKET_05',
      travel_intent_no_destination_intent: 'TRAVEL_INTENT_NO_DESTINATION_INTENT',
      trip_consideration: 'TRIP_CONSIDERATION',
      video_sound_on: 'VIDEO_SOUND_ON',
    });
  }
  static get TuneForCategory (): Object {
    return Object.freeze({
      credit: 'CREDIT',
      employment: 'EMPLOYMENT',
      housing: 'HOUSING',
      issues_elections_politics: 'ISSUES_ELECTIONS_POLITICS',
      none: 'NONE',
      online_gambling_and_gaming: 'ONLINE_GAMBLING_AND_GAMING',
    });
  }
  static get Operator (): Object {
    return Object.freeze({
      all: 'ALL',
      any: 'ANY',
    });
  }
  static get StatusOption (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      inherited_from_source: 'INHERITED_FROM_SOURCE',
      paused: 'PAUSED',
    });
  }

  getActivities (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdActivity,
      fields,
      params,
      fetchFirstPage,
      '/activities'
    );
  }

  getAdStudies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdStudy,
      fields,
      params,
      fetchFirstPage,
      '/ad_studies'
    );
  }

  getAdCreatives (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdCreative,
      fields,
      params,
      fetchFirstPage,
      '/adcreatives'
    );
  }

  deleteAdLabels (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/adlabels',
      params
    );
  }

  createAdLabel (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdSet> {
    return this.createEdge(
      '/adlabels',
      fields,
      params,
      AdSet,
      pathOverride,
    );
  }

  getAdRulesGoverned (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdRule,
      fields,
      params,
      fetchFirstPage,
      '/adrules_governed'
    );
  }

  getAds (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/ads'
    );
  }

  getAsyncAdRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAsyncRequest,
      fields,
      params,
      fetchFirstPage,
      '/asyncadrequests'
    );
  }

  getCopies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/copies'
    );
  }

  createCopy (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdSet> {
    return this.createEdge(
      '/copies',
      fields,
      params,
      AdSet,
      pathOverride,
    );
  }

  getDeliveryEstimate (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdCampaignDeliveryEstimate,
      fields,
      params,
      fetchFirstPage,
      '/delivery_estimate'
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsInsights,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getInsightsAsync (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdReportRun> {
    return this.createEdge(
      '/insights',
      fields,
      params,
      AdReportRun,
      pathOverride,
    );
  }

  getTargetingSentenceLines (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      TargetingSentenceLine,
      fields,
      params,
      fetchFirstPage,
      '/targetingsentencelines'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdSet {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdSet {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
