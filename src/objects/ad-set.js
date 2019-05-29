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
import AdActivity from './ad-activity';
import AdStudy from './ad-study';
import AdCreative from './ad-creative';
import AdRule from './ad-rule';
import Ad from './ad';
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
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      ad_keywords: 'ad_keywords',
      adlabels: 'adlabels',
      adset_schedule: 'adset_schedule',
      asset_feed_id: 'asset_feed_id',
      attribution_spec: 'attribution_spec',
      best_creative: 'best_creative',
      bid_adjustments: 'bid_adjustments',
      bid_amount: 'bid_amount',
      bid_constraints: 'bid_constraints',
      bid_info: 'bid_info',
      bid_strategy: 'bid_strategy',
      billing_event: 'billing_event',
      budget_remaining: 'budget_remaining',
      campaign: 'campaign',
      campaign_id: 'campaign_id',
      configured_status: 'configured_status',
      created_time: 'created_time',
      creative_sequence: 'creative_sequence',
      daily_budget: 'daily_budget',
      daily_min_spend_target: 'daily_min_spend_target',
      daily_spend_cap: 'daily_spend_cap',
      destination_type: 'destination_type',
      effective_status: 'effective_status',
      end_time: 'end_time',
      frequency_control_specs: 'frequency_control_specs',
      full_funnel_exploration_mode: 'full_funnel_exploration_mode',
      id: 'id',
      instagram_actor_id: 'instagram_actor_id',
      is_dynamic_creative: 'is_dynamic_creative',
      issues_info: 'issues_info',
      lifetime_budget: 'lifetime_budget',
      lifetime_imps: 'lifetime_imps',
      lifetime_min_spend_target: 'lifetime_min_spend_target',
      lifetime_spend_cap: 'lifetime_spend_cap',
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
      time_based_ad_rotation_id_blocks: 'time_based_ad_rotation_id_blocks',
      time_based_ad_rotation_intervals: 'time_based_ad_rotation_intervals',
      updated_time: 'updated_time',
      use_new_app_click: 'use_new_app_click',
    });
  }

  static get BidStrategy (): Object {
    return Object.freeze({
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
      lowest_cost_with_bid_cap: 'LOWEST_COST_WITH_BID_CAP',
      target_cost: 'TARGET_COST',
    });
  }
  static get BillingEvent (): Object {
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
      video_views: 'VIDEO_VIEWS',
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
      deleted: 'DELETED',
      paused: 'PAUSED',
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
      video_views: 'VIDEO_VIEWS',
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
  static get DestinationType (): Object {
    return Object.freeze({
      app: 'APP',
      applinks_automatic: 'APPLINKS_AUTOMATIC',
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
  static get DatePreset (): Object {
    return Object.freeze({
      last_14d: 'LAST_14D',
      last_28d: 'LAST_28D',
      last_30d: 'LAST_30D',
      last_3d: 'LAST_3D',
      last_7d: 'LAST_7D',
      last_90d: 'LAST_90D',
      last_month: 'LAST_MONTH',
      last_quarter: 'LAST_QUARTER',
      last_week_mon_sun: 'LAST_WEEK_MON_SUN',
      last_week_sun_sat: 'LAST_WEEK_SUN_SAT',
      last_year: 'LAST_YEAR',
      lifetime: 'LIFETIME',
      this_month: 'THIS_MONTH',
      this_quarter: 'THIS_QUARTER',
      this_week_mon_today: 'THIS_WEEK_MON_TODAY',
      this_week_sun_today: 'THIS_WEEK_SUN_TODAY',
      this_year: 'THIS_YEAR',
      today: 'TODAY',
      yesterday: 'YESTERDAY',
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

  getActivities (fields, params, fetchFirstPage = true): AdActivity {
    return this.getEdge(
      AdActivity,
      fields,
      params,
      fetchFirstPage,
      '/activities'
    );
  }

  getAdStudies (fields, params, fetchFirstPage = true): AdStudy {
    return this.getEdge(
      AdStudy,
      fields,
      params,
      fetchFirstPage,
      '/ad_studies'
    );
  }

  getAdCreatives (fields, params, fetchFirstPage = true): AdCreative {
    return this.getEdge(
      AdCreative,
      fields,
      params,
      fetchFirstPage,
      '/adcreatives'
    );
  }

  deleteAdLabels (params): AbstractObject {
    return super.deleteEdge(
      '/adlabels',
      params
    );
  }

  createAdLabel (fields, params): AdSet {
    return this.createEdge(
      '/adlabels',
      fields,
      params,
      AdSet
    );
  }

  getAdRulesGoverned (fields, params, fetchFirstPage = true): AdRule {
    return this.getEdge(
      AdRule,
      fields,
      params,
      fetchFirstPage,
      '/adrules_governed'
    );
  }

  getAds (fields, params, fetchFirstPage = true): Ad {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/ads'
    );
  }

  createCopy (fields, params): AdSet {
    return this.createEdge(
      '/copies',
      fields,
      params,
      AdSet
    );
  }

  getDeliveryEstimate (fields, params, fetchFirstPage = true): AdCampaignDeliveryEstimate {
    return this.getEdge(
      AdCampaignDeliveryEstimate,
      fields,
      params,
      fetchFirstPage,
      '/delivery_estimate'
    );
  }

  getInsights (fields, params, fetchFirstPage = true): AdsInsights {
    return this.getEdge(
      AdsInsights,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getInsightsAsync (fields, params): AdReportRun {
    return this.createEdge(
      '/insights',
      fields,
      params,
      AdReportRun
    );
  }

  getTargetingSentenceLines (fields, params, fetchFirstPage = true): TargetingSentenceLine {
    return this.getEdge(
      TargetingSentenceLine,
      fields,
      params,
      fetchFirstPage,
      '/targetingsentencelines'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): AdSet {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdSet {
    return super.update(
      params
    );
  }
}
