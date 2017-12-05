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
import AdCreative from './ad-creative';
import AdLabel from './ad-label';
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
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      adlabels: 'adlabels',
      adset_schedule: 'adset_schedule',
      attribution_spec: 'attribution_spec',
      bid_amount: 'bid_amount',
      bid_info: 'bid_info',
      billing_event: 'billing_event',
      budget_remaining: 'budget_remaining',
      campaign: 'campaign',
      campaign_id: 'campaign_id',
      configured_status: 'configured_status',
      created_time: 'created_time',
      creative_sequence: 'creative_sequence',
      daily_budget: 'daily_budget',
      destination_type: 'destination_type',
      effective_status: 'effective_status',
      end_time: 'end_time',
      frequency_control_specs: 'frequency_control_specs',
      id: 'id',
      instagram_actor_id: 'instagram_actor_id',
      is_autobid: 'is_autobid',
      is_average_price_pacing: 'is_average_price_pacing',
      lifetime_budget: 'lifetime_budget',
      lifetime_imps: 'lifetime_imps',
      name: 'name',
      optimization_goal: 'optimization_goal',
      pacing_type: 'pacing_type',
      promoted_object: 'promoted_object',
      recommendations: 'recommendations',
      recurring_budget_semantics: 'recurring_budget_semantics',
      rf_prediction_id: 'rf_prediction_id',
      rtb_flag: 'rtb_flag',
      source_adset: 'source_adset',
      source_adset_id: 'source_adset_id',
      start_time: 'start_time',
      status: 'status',
      targeting: 'targeting',
      time_based_ad_rotation_id_blocks: 'time_based_ad_rotation_id_blocks',
      time_based_ad_rotation_intervals: 'time_based_ad_rotation_intervals',
      updated_time: 'updated_time',
      use_new_app_click: 'use_new_app_click'
    });
  }

  static get BillingEvent (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      clicks: 'CLICKS',
      impressions: 'IMPRESSIONS',
      link_clicks: 'LINK_CLICKS',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      video_views: 'VIDEO_VIEWS',
      mrc_video_views: 'MRC_VIDEO_VIEWS',
      completed_video_views: 'COMPLETED_VIDEO_VIEWS',
      video_views_15s: 'VIDEO_VIEWS_15S'
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
      landing_page_views: 'LANDING_PAGE_VIEWS'
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
      today: 'TODAY',
      yesterday: 'YESTERDAY',
      this_month: 'THIS_MONTH',
      last_month: 'LAST_MONTH',
      this_quarter: 'THIS_QUARTER',
      lifetime: 'LIFETIME',
      last_3d: 'LAST_3D',
      last_7d: 'LAST_7D',
      last_14d: 'LAST_14D',
      last_28d: 'LAST_28D',
      last_30d: 'LAST_30D',
      last_90d: 'LAST_90D',
      last_week_mon_sun: 'LAST_WEEK_MON_SUN',
      last_week_sun_sat: 'LAST_WEEK_SUN_SAT',
      last_quarter: 'LAST_QUARTER',
      last_year: 'LAST_YEAR',
      this_week_mon_today: 'THIS_WEEK_MON_TODAY',
      this_week_sun_today: 'THIS_WEEK_SUN_TODAY',
      this_year: 'THIS_YEAR'
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
      validate_only: 'VALIDATE_ONLY',
      include_recommendations: 'INCLUDE_RECOMMENDATIONS'
    });
  }
  static get Operator (): Object {
    return Object.freeze({
      all: 'ALL',
      any: 'ANY'
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

  createAdLabel (fields, params): AdLabel {
    return this.createEdge(
      '/adlabels',
      fields,
      params
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

  getCopies (fields, params, fetchFirstPage = true): AdSet {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/copies'
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
      params
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
