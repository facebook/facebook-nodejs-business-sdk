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
import AdLabel from './ad-label';
import Ad from './ad';
import AdSet from './ad-set';
import AdsInsights from './ads-insights';
import AdReportRun from './ad-report-run';

/**
 * Campaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Campaign extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      adlabels: 'adlabels',
      boosted_object_id: 'boosted_object_id',
      brand_lift_studies: 'brand_lift_studies',
      budget_rebalance_flag: 'budget_rebalance_flag',
      buying_type: 'buying_type',
      can_create_brand_lift_study: 'can_create_brand_lift_study',
      can_use_spend_cap: 'can_use_spend_cap',
      configured_status: 'configured_status',
      created_time: 'created_time',
      effective_status: 'effective_status',
      id: 'id',
      kpi_custom_conversion_id: 'kpi_custom_conversion_id',
      kpi_type: 'kpi_type',
      name: 'name',
      objective: 'objective',
      recommendations: 'recommendations',
      source_campaign: 'source_campaign',
      source_campaign_id: 'source_campaign_id',
      spend_cap: 'spend_cap',
      start_time: 'start_time',
      status: 'status',
      stop_time: 'stop_time',
      updated_time: 'updated_time'
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
  static get DeleteStrategy (): Object {
    return Object.freeze({
      delete_any: 'DELETE_ANY',
      delete_oldest: 'DELETE_OLDEST',
      delete_archived_before: 'DELETE_ARCHIVED_BEFORE'
    });
  }
  static get ExecutionOptions (): Object {
    return Object.freeze({
      validate_only: 'VALIDATE_ONLY',
      include_recommendations: 'INCLUDE_RECOMMENDATIONS'
    });
  }
  static get Objective (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      brand_awareness: 'BRAND_AWARENESS',
      conversions: 'CONVERSIONS',
      event_responses: 'EVENT_RESPONSES',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      local_awareness: 'LOCAL_AWARENESS',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      product_catalog_sales: 'PRODUCT_CATALOG_SALES',
      reach: 'REACH',
      video_views: 'VIDEO_VIEWS'
    });
  }
  static get Operator (): Object {
    return Object.freeze({
      all: 'ALL',
      any: 'ANY'
    });
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

  getAdSets (fields, params, fetchFirstPage = true): AdSet {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/adsets'
    );
  }

  getCopies (fields, params, fetchFirstPage = true): Campaign {
    return this.getEdge(
      Campaign,
      fields,
      params,
      fetchFirstPage,
      '/copies'
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

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): Campaign {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Campaign {
    return super.update(
      params
    );
  }
}
