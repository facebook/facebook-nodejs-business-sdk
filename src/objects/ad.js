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
import AdCreative from './ad-creative';
import AdLabel from './ad-label';
import AdRule from './ad-rule';
import AdsInsights from './ads-insights';
import AdReportRun from './ad-report-run';
import AdKeywordStats from './ad-keyword-stats';
import Lead from './lead';
import AdPreview from './ad-preview';
import TargetingSentenceLine from './targeting-sentence-line';

/**
 * Ad
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Ad extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      ad_review_feedback: 'ad_review_feedback',
      adlabels: 'adlabels',
      adset: 'adset',
      adset_id: 'adset_id',
      bid_amount: 'bid_amount',
      bid_info: 'bid_info',
      bid_type: 'bid_type',
      campaign: 'campaign',
      campaign_id: 'campaign_id',
      configured_status: 'configured_status',
      conversion_specs: 'conversion_specs',
      created_time: 'created_time',
      creative: 'creative',
      effective_status: 'effective_status',
      id: 'id',
      last_updated_by_app_id: 'last_updated_by_app_id',
      name: 'name',
      recommendations: 'recommendations',
      source_ad: 'source_ad',
      source_ad_id: 'source_ad_id',
      status: 'status',
      tracking_specs: 'tracking_specs',
      updated_time: 'updated_time'
    });
  }

  static get BidType (): Object {
    return Object.freeze({
      cpc: 'CPC',
      cpm: 'CPM',
      multi_premium: 'MULTI_PREMIUM',
      absolute_ocpm: 'ABSOLUTE_OCPM',
      cpa: 'CPA'
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
  static get ExecutionOptions (): Object {
    return Object.freeze({
      validate_only: 'validate_only',
      synchronous_ad_review: 'synchronous_ad_review',
      include_recommendations: 'include_recommendations'
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
      params,
      AdLabel
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

  createCopy (fields, params): Ad {
    return this.createEdge(
      '/copies',
      fields,
      params,
      Ad
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

  getKeywordStats (fields, params, fetchFirstPage = true): AdKeywordStats {
    return this.getEdge(
      AdKeywordStats,
      fields,
      params,
      fetchFirstPage,
      '/keywordstats'
    );
  }

  getLeads (fields, params, fetchFirstPage = true): Lead {
    return this.getEdge(
      Lead,
      fields,
      params,
      fetchFirstPage,
      '/leads'
    );
  }

  createLead (fields, params): AbstractObject {
    return this.createEdge(
      '/leads',
      fields,
      params

    );
  }

  getPreviews (fields, params, fetchFirstPage = true): AdPreview {
    return this.getEdge(
      AdPreview,
      fields,
      params,
      fetchFirstPage,
      '/previews'
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

  get (fields, params): Ad {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Ad {
    return super.update(
      params
    );
  }
}
