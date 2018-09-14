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
import AdCampaignActivity from './ad-campaign-activity';
import AdStudy from './ad-study';
import AdCreative from './ad-creative';
import AdDraft from './ad-draft';
import AdRule from './ad-rule';
import Ad from './ad';
import AdAsyncRequest from './ad-async-request';
import ColumnSuggestions from './column-suggestions';
import AdConversions from './ad-conversions';
import AdCampaignDeliveryEstimate from './ad-campaign-delivery-estimate';
import AdDeliveryInsights from './ad-delivery-insights';
import AdCampaignDeliveryStats from './ad-campaign-delivery-stats';
import FAMEAdGroup from './fame-ad-group';
import AdsInsights from './ads-insights';
import AdReportRun from './ad-report-run';
import ReachEstimate from './reach-estimate';
import AdsReportBuilder from './ads-report-builder';
import AdCampaignStats from './ad-campaign-stats';
import AdsTargetingInsights from './ads-targeting-insights';
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
      adasset_feed: 'adasset_feed',
      adlabels: 'adlabels',
      adset_schedule: 'adset_schedule',
      asset_feed_id: 'asset_feed_id',
      attribution_spec: 'attribution_spec',
      best_creative: 'best_creative',
      bid_adjustments: 'bid_adjustments',
      bid_amount: 'bid_amount',
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
      frequency_cap: 'frequency_cap',
      frequency_cap_reset_period: 'frequency_cap_reset_period',
      frequency_control_specs: 'frequency_control_specs',
      full_funnel_exploration_mode: 'full_funnel_exploration_mode',
      id: 'id',
      instagram_actor_id: 'instagram_actor_id',
      is_autobid: 'is_autobid',
      is_average_price_pacing: 'is_average_price_pacing',
      is_dynamic_creative: 'is_dynamic_creative',
      is_dynamic_creative_optimization: 'is_dynamic_creative_optimization',
      lifetime_budget: 'lifetime_budget',
      lifetime_frequency_cap: 'lifetime_frequency_cap',
      lifetime_imps: 'lifetime_imps',
      lifetime_min_spend_target: 'lifetime_min_spend_target',
      lifetime_spend_cap: 'lifetime_spend_cap',
      name: 'name',
      optimization_goal: 'optimization_goal',
      pacing_type: 'pacing_type',
      promoted_object: 'promoted_object',
      recommendations: 'recommendations',
      recurring_budget_semantics: 'recurring_budget_semantics',
      review_feedback: 'review_feedback',
      rf_prediction_id: 'rf_prediction_id',
      rtb_flag: 'rtb_flag',
      source_adset: 'source_adset',
      source_adset_id: 'source_adset_id',
      start_time: 'start_time',
      status: 'status',
      targeting: 'targeting',
      time_based_ad_rotation_id_blocks: 'time_based_ad_rotation_id_blocks',
      time_based_ad_rotation_intervals: 'time_based_ad_rotation_intervals',
      tracking_specs: 'tracking_specs',
      updated_time: 'updated_time',
      use_new_app_click: 'use_new_app_click'
    });
  }

  static get BidStrategy (): Object {
    return Object.freeze({
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
      lowest_cost_with_bid_cap: 'LOWEST_COST_WITH_BID_CAP',
      target_cost: 'TARGET_COST'
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
      video_views: 'VIDEO_VIEWS'
    });
  }
  static get ConfiguredStatus (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      paused: 'PAUSED',
      deleted: 'DELETED',
      archived: 'ARCHIVED'
    });
  }
  static get EffectiveStatus (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      paused: 'PAUSED',
      deleted: 'DELETED',
      pending_review: 'PENDING_REVIEW',
      disapproved: 'DISAPPROVED',
      preapproved: 'PREAPPROVED',
      pending_billing_info: 'PENDING_BILLING_INFO',
      campaign_paused: 'CAMPAIGN_PAUSED',
      archived: 'ARCHIVED',
      adset_paused: 'ADSET_PAUSED'
    });
  }
  static get OptimizationGoal (): Object {
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
  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      paused: 'PAUSED',
      deleted: 'DELETED',
      archived: 'ARCHIVED'
    });
  }
  static get DatePreset (): Object {
    return Object.freeze({
      today: 'today',
      yesterday: 'yesterday',
      this_month: 'this_month',
      last_month: 'last_month',
      this_quarter: 'this_quarter',
      lifetime: 'lifetime',
      last_3d: 'last_3d',
      last_7d: 'last_7d',
      last_14d: 'last_14d',
      last_28d: 'last_28d',
      last_30d: 'last_30d',
      last_90d: 'last_90d',
      last_week_mon_sun: 'last_week_mon_sun',
      last_week_sun_sat: 'last_week_sun_sat',
      last_quarter: 'last_quarter',
      last_year: 'last_year',
      this_week_mon_today: 'this_week_mon_today',
      this_week_sun_today: 'this_week_sun_today',
      this_year: 'this_year'
    });
  }
  static get DestinationType (): Object {
    return Object.freeze({
      undefined: 'UNDEFINED',
      website: 'WEBSITE',
      app: 'APP',
      messenger: 'MESSENGER',
      applinks_automatic: 'APPLINKS_AUTOMATIC'
    });
  }
  static get ExecutionOptions (): Object {
    return Object.freeze({
      validate_only: 'validate_only',
      include_recommendations: 'include_recommendations'
    });
  }
  static get FullFunnelExplorationMode (): Object {
    return Object.freeze({
      none_exploration: 'NONE_EXPLORATION',
      limited_exploration: 'LIMITED_EXPLORATION',
      extended_exploration: 'EXTENDED_EXPLORATION'
    });
  }
  static get Operator (): Object {
    return Object.freeze({
      all: 'ALL',
      any: 'ANY'
    });
  }
  static get StatusOption (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      paused: 'PAUSED',
      inherited_from_source: 'INHERITED_FROM_SOURCE'
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

  getActivityLogs (fields, params, fetchFirstPage = true): AdCampaignActivity {
    return this.getEdge(
      AdCampaignActivity,
      fields,
      params,
      fetchFirstPage,
      '/activity_logs'
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

  getAdDrafts (fields, params, fetchFirstPage = true): AdDraft {
    return this.getEdge(
      AdDraft,
      fields,
      params,
      fetchFirstPage,
      '/addrafts'
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

  getAsyncAdRequests (fields, params, fetchFirstPage = true): AdAsyncRequest {
    return this.getEdge(
      AdAsyncRequest,
      fields,
      params,
      fetchFirstPage,
      '/asyncadrequests'
    );
  }

  getColumnSuggestions (fields, params, fetchFirstPage = true): ColumnSuggestions {
    return this.getEdge(
      ColumnSuggestions,
      fields,
      params,
      fetchFirstPage,
      '/column_suggestions'
    );
  }

  getConversions (fields, params, fetchFirstPage = true): AdConversions {
    return this.getEdge(
      AdConversions,
      fields,
      params,
      fetchFirstPage,
      '/conversions'
    );
  }

  getCopies (fields, params, fetchFirstPage = true): AdSet {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/copies'
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

  getDeliveryInsights (fields, params, fetchFirstPage = true): AdDeliveryInsights {
    return this.getEdge(
      AdDeliveryInsights,
      fields,
      params,
      fetchFirstPage,
      '/delivery_insights'
    );
  }

  getDeliveryStats (fields, params, fetchFirstPage = true): AdCampaignDeliveryStats {
    return this.getEdge(
      AdCampaignDeliveryStats,
      fields,
      params,
      fetchFirstPage,
      '/delivery_stats'
    );
  }

  getFameAds (fields, params, fetchFirstPage = true): FAMEAdGroup {
    return this.getEdge(
      FAMEAdGroup,
      fields,
      params,
      fetchFirstPage,
      '/fame_ads'
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

  getReachEstimate (fields, params, fetchFirstPage = true): ReachEstimate {
    return this.getEdge(
      ReachEstimate,
      fields,
      params,
      fetchFirstPage,
      '/reachestimate'
    );
  }

  getReporting (fields, params, fetchFirstPage = true): AdsReportBuilder {
    return this.getEdge(
      AdsReportBuilder,
      fields,
      params,
      fetchFirstPage,
      '/reporting'
    );
  }

  getStats (fields, params, fetchFirstPage = true): AdCampaignStats {
    return this.getEdge(
      AdCampaignStats,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  getTargetingInsights (fields, params, fetchFirstPage = true): AdsTargetingInsights {
    return this.getEdge(
      AdsTargetingInsights,
      fields,
      params,
      fetchFirstPage,
      '/targeting_insights'
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
