 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdStudy from './ad-study';
import AdRule from './ad-rule';
import Ad from './ad';
import AdSet from './ad-set';
import HighDemandPeriod from './high-demand-period';
import AdsInsights from './ads-insights';
import AdReportRun from './ad-report-run';

/**
 * Campaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Campaign extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account_id: 'account_id',
      adlabels: 'adlabels',
      advantage_state_info: 'advantage_state_info',
      bid_strategy: 'bid_strategy',
      boosted_object_id: 'boosted_object_id',
      brand_lift_studies: 'brand_lift_studies',
      budget_rebalance_flag: 'budget_rebalance_flag',
      budget_remaining: 'budget_remaining',
      buying_type: 'buying_type',
      campaign_group_active_time: 'campaign_group_active_time',
      can_create_brand_lift_study: 'can_create_brand_lift_study',
      can_use_spend_cap: 'can_use_spend_cap',
      configured_status: 'configured_status',
      created_time: 'created_time',
      daily_budget: 'daily_budget',
      effective_status: 'effective_status',
      has_secondary_skadnetwork_reporting: 'has_secondary_skadnetwork_reporting',
      id: 'id',
      is_budget_schedule_enabled: 'is_budget_schedule_enabled',
      is_skadnetwork_attribution: 'is_skadnetwork_attribution',
      issues_info: 'issues_info',
      last_budget_toggling_time: 'last_budget_toggling_time',
      lifetime_budget: 'lifetime_budget',
      name: 'name',
      objective: 'objective',
      pacing_type: 'pacing_type',
      primary_attribution: 'primary_attribution',
      promoted_object: 'promoted_object',
      recommendations: 'recommendations',
      smart_promotion_type: 'smart_promotion_type',
      source_campaign: 'source_campaign',
      source_campaign_id: 'source_campaign_id',
      source_recommendation_type: 'source_recommendation_type',
      special_ad_categories: 'special_ad_categories',
      special_ad_category: 'special_ad_category',
      special_ad_category_country: 'special_ad_category_country',
      spend_cap: 'spend_cap',
      start_time: 'start_time',
      status: 'status',
      stop_time: 'stop_time',
      topline_id: 'topline_id',
      updated_time: 'updated_time',
    });
  }

  static get BidStrategy (): Object {
    return Object.freeze({
      cost_cap: 'COST_CAP',
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
      lowest_cost_with_bid_cap: 'LOWEST_COST_WITH_BID_CAP',
      lowest_cost_with_min_roas: 'LOWEST_COST_WITH_MIN_ROAS',
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
      in_process: 'IN_PROCESS',
      paused: 'PAUSED',
      with_issues: 'WITH_ISSUES',
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
  static get ExecutionOptions (): Object {
    return Object.freeze({
      include_recommendations: 'include_recommendations',
      validate_only: 'validate_only',
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
      messages: 'MESSAGES',
      offer_claims: 'OFFER_CLAIMS',
      outcome_app_promotion: 'OUTCOME_APP_PROMOTION',
      outcome_awareness: 'OUTCOME_AWARENESS',
      outcome_engagement: 'OUTCOME_ENGAGEMENT',
      outcome_leads: 'OUTCOME_LEADS',
      outcome_sales: 'OUTCOME_SALES',
      outcome_traffic: 'OUTCOME_TRAFFIC',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      product_catalog_sales: 'PRODUCT_CATALOG_SALES',
      reach: 'REACH',
      store_visits: 'STORE_VISITS',
      video_views: 'VIDEO_VIEWS',
    });
  }
  static get SmartPromotionType (): Object {
    return Object.freeze({
      guided_creation: 'GUIDED_CREATION',
      smart_app_promotion: 'SMART_APP_PROMOTION',
    });
  }
  static get SpecialAdCategories (): Object {
    return Object.freeze({
      credit: 'CREDIT',
      employment: 'EMPLOYMENT',
      financial_products_services: 'FINANCIAL_PRODUCTS_SERVICES',
      housing: 'HOUSING',
      issues_elections_politics: 'ISSUES_ELECTIONS_POLITICS',
      none: 'NONE',
      online_gambling_and_gaming: 'ONLINE_GAMBLING_AND_GAMING',
    });
  }
  static get SpecialAdCategoryCountry (): Object {
    return Object.freeze({
      ad: 'AD',
      ae: 'AE',
      af: 'AF',
      ag: 'AG',
      ai: 'AI',
      al: 'AL',
      am: 'AM',
      an: 'AN',
      ao: 'AO',
      aq: 'AQ',
      ar: 'AR',
      as: 'AS',
      at: 'AT',
      au: 'AU',
      aw: 'AW',
      ax: 'AX',
      az: 'AZ',
      ba: 'BA',
      bb: 'BB',
      bd: 'BD',
      be: 'BE',
      bf: 'BF',
      bg: 'BG',
      bh: 'BH',
      bi: 'BI',
      bj: 'BJ',
      bl: 'BL',
      bm: 'BM',
      bn: 'BN',
      bo: 'BO',
      bq: 'BQ',
      br: 'BR',
      bs: 'BS',
      bt: 'BT',
      bv: 'BV',
      bw: 'BW',
      by: 'BY',
      bz: 'BZ',
      ca: 'CA',
      cc: 'CC',
      cd: 'CD',
      cf: 'CF',
      cg: 'CG',
      ch: 'CH',
      ci: 'CI',
      ck: 'CK',
      cl: 'CL',
      cm: 'CM',
      cn: 'CN',
      co: 'CO',
      cr: 'CR',
      cu: 'CU',
      cv: 'CV',
      cw: 'CW',
      cx: 'CX',
      cy: 'CY',
      cz: 'CZ',
      de: 'DE',
      dj: 'DJ',
      dk: 'DK',
      dm: 'DM',
      do: 'DO',
      dz: 'DZ',
      ec: 'EC',
      ee: 'EE',
      eg: 'EG',
      eh: 'EH',
      er: 'ER',
      es: 'ES',
      et: 'ET',
      fi: 'FI',
      fj: 'FJ',
      fk: 'FK',
      fm: 'FM',
      fo: 'FO',
      fr: 'FR',
      ga: 'GA',
      gb: 'GB',
      gd: 'GD',
      ge: 'GE',
      gf: 'GF',
      gg: 'GG',
      gh: 'GH',
      gi: 'GI',
      gl: 'GL',
      gm: 'GM',
      gn: 'GN',
      gp: 'GP',
      gq: 'GQ',
      gr: 'GR',
      gs: 'GS',
      gt: 'GT',
      gu: 'GU',
      gw: 'GW',
      gy: 'GY',
      hk: 'HK',
      hm: 'HM',
      hn: 'HN',
      hr: 'HR',
      ht: 'HT',
      hu: 'HU',
      id: 'ID',
      ie: 'IE',
      il: 'IL',
      im: 'IM',
      in: 'IN',
      io: 'IO',
      iq: 'IQ',
      ir: 'IR',
      is: 'IS',
      it: 'IT',
      je: 'JE',
      jm: 'JM',
      jo: 'JO',
      jp: 'JP',
      ke: 'KE',
      kg: 'KG',
      kh: 'KH',
      ki: 'KI',
      km: 'KM',
      kn: 'KN',
      kp: 'KP',
      kr: 'KR',
      kw: 'KW',
      ky: 'KY',
      kz: 'KZ',
      la: 'LA',
      lb: 'LB',
      lc: 'LC',
      li: 'LI',
      lk: 'LK',
      lr: 'LR',
      ls: 'LS',
      lt: 'LT',
      lu: 'LU',
      lv: 'LV',
      ly: 'LY',
      ma: 'MA',
      mc: 'MC',
      md: 'MD',
      me: 'ME',
      mf: 'MF',
      mg: 'MG',
      mh: 'MH',
      mk: 'MK',
      ml: 'ML',
      mm: 'MM',
      mn: 'MN',
      mo: 'MO',
      mp: 'MP',
      mq: 'MQ',
      mr: 'MR',
      ms: 'MS',
      mt: 'MT',
      mu: 'MU',
      mv: 'MV',
      mw: 'MW',
      mx: 'MX',
      my: 'MY',
      mz: 'MZ',
      na: 'NA',
      nc: 'NC',
      ne: 'NE',
      nf: 'NF',
      ng: 'NG',
      ni: 'NI',
      nl: 'NL',
      no: 'NO',
      np: 'NP',
      nr: 'NR',
      nu: 'NU',
      nz: 'NZ',
      om: 'OM',
      pa: 'PA',
      pe: 'PE',
      pf: 'PF',
      pg: 'PG',
      ph: 'PH',
      pk: 'PK',
      pl: 'PL',
      pm: 'PM',
      pn: 'PN',
      pr: 'PR',
      ps: 'PS',
      pt: 'PT',
      pw: 'PW',
      py: 'PY',
      qa: 'QA',
      re: 'RE',
      ro: 'RO',
      rs: 'RS',
      ru: 'RU',
      rw: 'RW',
      sa: 'SA',
      sb: 'SB',
      sc: 'SC',
      sd: 'SD',
      se: 'SE',
      sg: 'SG',
      sh: 'SH',
      si: 'SI',
      sj: 'SJ',
      sk: 'SK',
      sl: 'SL',
      sm: 'SM',
      sn: 'SN',
      so: 'SO',
      sr: 'SR',
      ss: 'SS',
      st: 'ST',
      sv: 'SV',
      sx: 'SX',
      sy: 'SY',
      sz: 'SZ',
      tc: 'TC',
      td: 'TD',
      tf: 'TF',
      tg: 'TG',
      th: 'TH',
      tj: 'TJ',
      tk: 'TK',
      tl: 'TL',
      tm: 'TM',
      tn: 'TN',
      to: 'TO',
      tr: 'TR',
      tt: 'TT',
      tv: 'TV',
      tw: 'TW',
      tz: 'TZ',
      ua: 'UA',
      ug: 'UG',
      um: 'UM',
      us: 'US',
      uy: 'UY',
      uz: 'UZ',
      va: 'VA',
      vc: 'VC',
      ve: 'VE',
      vg: 'VG',
      vi: 'VI',
      vn: 'VN',
      vu: 'VU',
      wf: 'WF',
      ws: 'WS',
      xk: 'XK',
      ye: 'YE',
      yt: 'YT',
      za: 'ZA',
      zm: 'ZM',
      zw: 'ZW',
    });
  }
  static get Operator (): Object {
    return Object.freeze({
      all: 'ALL',
      any: 'ANY',
    });
  }
  static get SpecialAdCategory (): Object {
    return Object.freeze({
      credit: 'CREDIT',
      employment: 'EMPLOYMENT',
      financial_products_services: 'FINANCIAL_PRODUCTS_SERVICES',
      housing: 'HOUSING',
      issues_elections_politics: 'ISSUES_ELECTIONS_POLITICS',
      none: 'NONE',
      online_gambling_and_gaming: 'ONLINE_GAMBLING_AND_GAMING',
    });
  }
  static get StatusOption (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      inherited_from_source: 'INHERITED_FROM_SOURCE',
      paused: 'PAUSED',
    });
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

  createAdLabel (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Campaign> {
    return this.createEdge(
      '/adlabels',
      fields,
      params,
      Campaign,
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

  getAdSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/adsets'
    );
  }

  createBudgetSchedule (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<HighDemandPeriod> {
    return this.createEdge(
      '/budget_schedules',
      fields,
      params,
      HighDemandPeriod,
      pathOverride,
    );
  }

  getCopies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Campaign,
      fields,
      params,
      fetchFirstPage,
      '/copies'
    );
  }

  createCopy (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Campaign> {
    return this.createEdge(
      '/copies',
      fields,
      params,
      Campaign,
      pathOverride,
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

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Campaign {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Campaign {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
