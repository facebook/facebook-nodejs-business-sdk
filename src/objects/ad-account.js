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
import AdPlacePageSet from './ad-place-page-set';
import AdStudy from './ad-study';
import AdContract from './ad-contract';
import AdCreative from './ad-creative';
import AdImage from './ad-image';
import AdLabel from './ad-label';
import PlayableContent from './playable-content';
import AdReportRun from './ad-report-run';
import AdReportSpec from './ad-report-spec';
import AdAccountAdRulesHistory from './ad-account-ad-rules-history';
import AdRule from './ad-rule';
import Ad from './ad';
import AdSet from './ad-set';
import AdsPixel from './ads-pixel';
import AdToplineDetail from './ad-topline-detail';
import AdTopline from './ad-topline';
import Application from './application';
import AdVideo from './ad-video';
import Business from './business';
import AssignedUser from './assigned-user';
import Campaign from './campaign';
import AsyncRequest from './async-request';
import AdAsyncRequestSet from './ad-async-request-set';
import BrandAudience from './brand-audience';
import BroadTargetingCategories from './broad-targeting-categories';
import BusinessActivityLogEvent from './business-activity-log-event';
import BusinessProject from './business-project';
import BusinessSettingLogsData from './business-setting-logs-data';
import AdAccountContextualTargeting from './ad-account-contextual-targeting';
import CustomAudience from './custom-audience';
import CustomAudiencesTOS from './custom-audiences-tos';
import CustomConversion from './custom-conversion';
import AdAccountDeliveryEstimate from './ad-account-delivery-estimate';
import DirectDeal from './direct-deal';
import AdPreview from './ad-preview';
import AdsInsights from './ads-insights';
import InstagramUser from './instagram-user';
import LeadgenForm from './leadgen-form';
import AdAccountMatchedSearchApplicationsEdgeData from './ad-account-matched-search-applications-edge-data';
import AdAccountMaxBid from './ad-account-max-bid';
import MinimumBudget from './minimum-budget';
import OfflineConversionDataSet from './offline-conversion-data-set';
import OffsitePixel from './offsite-pixel';
import BusinessOwnedObjectOnBehalfOfRequest from './business-owned-object-on-behalf-of-request';
import PartnerIntegrationLinked from './partner-integration-linked';
import PartnerCategory from './partner-category';
import AdsDataPartner from './ads-data-partner';
import Page from './page';
import PublisherBlockList from './publisher-block-list';
import ReachEstimate from './reach-estimate';
import ReachFrequencyPrediction from './reach-frequency-prediction';
import Referral from './referral';
import AdAccountRoas from './ad-account-roas';
import SavedAudience from './saved-audience';
import AdAccountTargetingUnified from './ad-account-targeting-unified';
import TargetingSentenceLine from './targeting-sentence-line';
import TimezoneOffset from './timezone-offset';
import AdAccountTrackingData from './ad-account-tracking-data';
import AdAccountUser from './ad-account-user';

/**
 * AdAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccount extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      account_status: 'account_status',
      ad_account_creation_request: 'ad_account_creation_request',
      ad_account_promotable_objects: 'ad_account_promotable_objects',
      age: 'age',
      agency_client_declaration: 'agency_client_declaration',
      amount_spent: 'amount_spent',
      attribution_spec: 'attribution_spec',
      balance: 'balance',
      business: 'business',
      business_city: 'business_city',
      business_country_code: 'business_country_code',
      business_name: 'business_name',
      business_state: 'business_state',
      business_street: 'business_street',
      business_street2: 'business_street2',
      business_zip: 'business_zip',
      can_create_brand_lift_study: 'can_create_brand_lift_study',
      capabilities: 'capabilities',
      created_time: 'created_time',
      currency: 'currency',
      direct_deals_tos_accepted: 'direct_deals_tos_accepted',
      disable_reason: 'disable_reason',
      end_advertiser: 'end_advertiser',
      end_advertiser_name: 'end_advertiser_name',
      extended_credit_invoice_group: 'extended_credit_invoice_group',
      failed_delivery_checks: 'failed_delivery_checks',
      funding_source: 'funding_source',
      funding_source_details: 'funding_source_details',
      has_migrated_permissions: 'has_migrated_permissions',
      has_page_authorized_adaccount: 'has_page_authorized_adaccount',
      id: 'id',
      io_number: 'io_number',
      is_attribution_spec_system_default: 'is_attribution_spec_system_default',
      is_direct_deals_enabled: 'is_direct_deals_enabled',
      is_in_3ds_authorization_enabled_market: 'is_in_3ds_authorization_enabled_market',
      is_in_middle_of_local_entity_migration: 'is_in_middle_of_local_entity_migration',
      is_notifications_enabled: 'is_notifications_enabled',
      is_personal: 'is_personal',
      is_prepay_account: 'is_prepay_account',
      is_tax_id_required: 'is_tax_id_required',
      line_numbers: 'line_numbers',
      media_agency: 'media_agency',
      min_campaign_group_spend_cap: 'min_campaign_group_spend_cap',
      min_daily_budget: 'min_daily_budget',
      name: 'name',
      offsite_pixels_tos_accepted: 'offsite_pixels_tos_accepted',
      owner: 'owner',
      partner: 'partner',
      rf_spec: 'rf_spec',
      show_checkout_experience: 'show_checkout_experience',
      spend_cap: 'spend_cap',
      tax_id: 'tax_id',
      tax_id_status: 'tax_id_status',
      tax_id_type: 'tax_id_type',
      timezone_id: 'timezone_id',
      timezone_name: 'timezone_name',
      timezone_offset_hours_utc: 'timezone_offset_hours_utc',
      tos_accepted: 'tos_accepted',
      user_role: 'user_role',
      user_tos_accepted: 'user_tos_accepted'
    });
  }

  static get Currency (): Object {
    return Object.freeze({
      aed: 'AED',
      ars: 'ARS',
      aud: 'AUD',
      bdt: 'BDT',
      bob: 'BOB',
      brl: 'BRL',
      cad: 'CAD',
      chf: 'CHF',
      clp: 'CLP',
      cny: 'CNY',
      cop: 'COP',
      crc: 'CRC',
      czk: 'CZK',
      dkk: 'DKK',
      dzd: 'DZD',
      egp: 'EGP',
      eur: 'EUR',
      gbp: 'GBP',
      gtq: 'GTQ',
      hkd: 'HKD',
      hnl: 'HNL',
      huf: 'HUF',
      idr: 'IDR',
      ils: 'ILS',
      inr: 'INR',
      isk: 'ISK',
      jpy: 'JPY',
      kes: 'KES',
      krw: 'KRW',
      mop: 'MOP',
      mxn: 'MXN',
      myr: 'MYR',
      ngn: 'NGN',
      nio: 'NIO',
      nok: 'NOK',
      nzd: 'NZD',
      pen: 'PEN',
      php: 'PHP',
      pkr: 'PKR',
      pln: 'PLN',
      pyg: 'PYG',
      qar: 'QAR',
      ron: 'RON',
      rub: 'RUB',
      sar: 'SAR',
      sek: 'SEK',
      sgd: 'SGD',
      thb: 'THB',
      try: 'TRY',
      twd: 'TWD',
      usd: 'USD',
      uyu: 'UYU',
      vnd: 'VND',
      zar: 'ZAR'
    });
  }
  static get PermittedTasks (): Object {
    return Object.freeze({
      manage: 'MANAGE',
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE'
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      manage: 'MANAGE',
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE'
    });
  }
  static get ClaimObjective (): Object {
    return Object.freeze({
      automotive_model: 'AUTOMOTIVE_MODEL',
      collaborative_ads: 'COLLABORATIVE_ADS',
      home_listing: 'HOME_LISTING',
      media_title: 'MEDIA_TITLE',
      product: 'PRODUCT',
      travel: 'TRAVEL',
      vehicle: 'VEHICLE',
      vehicle_offer: 'VEHICLE_OFFER'
    });
  }
  static get ContentType (): Object {
    return Object.freeze({
      automotive_model: 'AUTOMOTIVE_MODEL',
      destination: 'DESTINATION',
      flight: 'FLIGHT',
      home_listing: 'HOME_LISTING',
      hotel: 'HOTEL',
      media_title: 'MEDIA_TITLE',
      product: 'PRODUCT',
      vehicle: 'VEHICLE',
      vehicle_offer: 'VEHICLE_OFFER'
    });
  }
  static get Subtype (): Object {
    return Object.freeze({
      custom: 'CUSTOM',
      website: 'WEBSITE',
      app: 'APP',
      offline_conversion: 'OFFLINE_CONVERSION',
      claim: 'CLAIM',
      partner: 'PARTNER',
      managed: 'MANAGED',
      video: 'VIDEO',
      lookalike: 'LOOKALIKE',
      engagement: 'ENGAGEMENT',
      bag_of_accounts: 'BAG_OF_ACCOUNTS',
      study_rule_audience: 'STUDY_RULE_AUDIENCE',
      fox: 'FOX'
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

  getAdPlacePageSets (fields, params, fetchFirstPage = true): AdPlacePageSet {
    return this.getEdge(
      AdPlacePageSet,
      fields,
      params,
      fetchFirstPage,
      '/ad_place_page_sets'
    );
  }

  createAdPlacePageSet (fields, params): AdPlacePageSet {
    return this.createEdge(
      '/ad_place_page_sets',
      fields,
      params,
      AdPlacePageSet
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

  getAdContracts (fields, params, fetchFirstPage = true): AdContract {
    return this.getEdge(
      AdContract,
      fields,
      params,
      fetchFirstPage,
      '/adcontracts'
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

  createAdCreative (fields, params): AdCreative {
    return this.createEdge(
      '/adcreatives',
      fields,
      params,
      AdCreative
    );
  }

  createAdCreativesFromMockup (fields, params): AdCreative {
    return this.createEdge(
      '/adcreatives_from_mockups',
      fields,
      params,
      AdCreative
    );
  }

  getAdCreativesByLabels (fields, params, fetchFirstPage = true): AdCreative {
    return this.getEdge(
      AdCreative,
      fields,
      params,
      fetchFirstPage,
      '/adcreativesbylabels'
    );
  }

  deleteAdImages (params): AbstractObject {
    return super.deleteEdge(
      '/adimages',
      params
    );
  }

  getAdImages (fields, params, fetchFirstPage = true): AdImage {
    return this.getEdge(
      AdImage,
      fields,
      params,
      fetchFirstPage,
      '/adimages'
    );
  }

  createAdImage (fields, params): AdImage {
    return this.createEdge(
      '/adimages',
      fields,
      params,
      AdImage
    );
  }

  getAdLabels (fields, params, fetchFirstPage = true): AdLabel {
    return this.getEdge(
      AdLabel,
      fields,
      params,
      fetchFirstPage,
      '/adlabels'
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

  getAdPlayables (fields, params, fetchFirstPage = true): PlayableContent {
    return this.getEdge(
      PlayableContent,
      fields,
      params,
      fetchFirstPage,
      '/adplayables'
    );
  }

  createAdPlayable (fields, params): PlayableContent {
    return this.createEdge(
      '/adplayables',
      fields,
      params,
      PlayableContent
    );
  }

  deleteAdReportRuns (params): AbstractObject {
    return super.deleteEdge(
      '/adreportruns',
      params
    );
  }

  getAdReportRuns (fields, params, fetchFirstPage = true): AdReportRun {
    return this.getEdge(
      AdReportRun,
      fields,
      params,
      fetchFirstPage,
      '/adreportruns'
    );
  }

  getAdReportSchedules (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/adreportschedules'
    );
  }

  createAdReportSchedule (fields, params): AbstractObject {
    return this.createEdge(
      '/adreportschedules',
      fields,
      params

    );
  }

  createAdReportSpec (fields, params): AdReportSpec {
    return this.createEdge(
      '/adreportspecs',
      fields,
      params,
      AdReportSpec
    );
  }

  getAdRulesHistory (fields, params, fetchFirstPage = true): AdAccountAdRulesHistory {
    return this.getEdge(
      AdAccountAdRulesHistory,
      fields,
      params,
      fetchFirstPage,
      '/adrules_history'
    );
  }

  getAdRulesLibrary (fields, params, fetchFirstPage = true): AdRule {
    return this.getEdge(
      AdRule,
      fields,
      params,
      fetchFirstPage,
      '/adrules_library'
    );
  }

  createAdRulesLibrary (fields, params): AdRule {
    return this.createEdge(
      '/adrules_library',
      fields,
      params,
      AdRule
    );
  }

  deleteAds (params): AbstractObject {
    return super.deleteEdge(
      '/ads',
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

  createAd (fields, params): Ad {
    return this.createEdge(
      '/ads',
      fields,
      params,
      Ad
    );
  }

  getAdsByLabels (fields, params, fetchFirstPage = true): Ad {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/adsbylabels'
    );
  }

  deleteAdSets (params): AbstractObject {
    return super.deleteEdge(
      '/adsets',
      params
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

  createAdSet (fields, params): AdSet {
    return this.createEdge(
      '/adsets',
      fields,
      params,
      AdSet
    );
  }

  getAdSetsByLabels (fields, params, fetchFirstPage = true): AdSet {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/adsetsbylabels'
    );
  }

  getAdsPixels (fields, params, fetchFirstPage = true): AdsPixel {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/adspixels'
    );
  }

  createAdsPixel (fields, params): AdsPixel {
    return this.createEdge(
      '/adspixels',
      fields,
      params,
      AdsPixel
    );
  }

  getAdToplineDetails (fields, params, fetchFirstPage = true): AdToplineDetail {
    return this.getEdge(
      AdToplineDetail,
      fields,
      params,
      fetchFirstPage,
      '/adtoplinedetails'
    );
  }

  getAdTopLines (fields, params, fetchFirstPage = true): AdTopline {
    return this.getEdge(
      AdTopline,
      fields,
      params,
      fetchFirstPage,
      '/adtoplines'
    );
  }

  getAdvertisableApplications (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/advertisable_applications'
    );
  }

  getAdVideos (fields, params, fetchFirstPage = true): AdVideo {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/advideos'
    );
  }

  createAdVideo (fields, params): AdVideo {
    return this.createEdge(
      '/advideos',
      fields,
      params,
      AdVideo
    );
  }

  getAffectedAdSets (fields, params, fetchFirstPage = true): AdSet {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/affectedadsets'
    );
  }

  deleteAgencies (params): AbstractObject {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencies (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  createAgency (fields, params): AdAccount {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      AdAccount
    );
  }

  getApplications (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/applications'
    );
  }

  getAssignedUsers (fields, params, fetchFirstPage = true): AssignedUser {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields, params): AdAccount {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      AdAccount
    );
  }

  createAsyncBatchRequest (fields, params): Campaign {
    return this.createEdge(
      '/async_batch_requests',
      fields,
      params,
      Campaign
    );
  }

  getAsyncRequests (fields, params, fetchFirstPage = true): AsyncRequest {
    return this.getEdge(
      AsyncRequest,
      fields,
      params,
      fetchFirstPage,
      '/async_requests'
    );
  }

  getAsyncAdRequestSets (fields, params, fetchFirstPage = true): AdAsyncRequestSet {
    return this.getEdge(
      AdAsyncRequestSet,
      fields,
      params,
      fetchFirstPage,
      '/asyncadrequestsets'
    );
  }

  createAsyncAdRequestSet (fields, params): AdAsyncRequestSet {
    return this.createEdge(
      '/asyncadrequestsets',
      fields,
      params,
      AdAsyncRequestSet
    );
  }

  createAudienceReplace (fields, params): AbstractObject {
    return this.createEdge(
      '/audiencereplace',
      fields,
      params

    );
  }

  createBatchReplace (fields, params): AbstractObject {
    return this.createEdge(
      '/batchreplace',
      fields,
      params

    );
  }

  createBatchUpload (fields, params): AbstractObject {
    return this.createEdge(
      '/batchupload',
      fields,
      params

    );
  }

  createBlockListDraft (fields, params): AdAccount {
    return this.createEdge(
      '/block_list_drafts',
      fields,
      params,
      AdAccount
    );
  }

  getBrandAudiences (fields, params, fetchFirstPage = true): BrandAudience {
    return this.getEdge(
      BrandAudience,
      fields,
      params,
      fetchFirstPage,
      '/brand_audiences'
    );
  }

  createBrandAudience (fields, params): BrandAudience {
    return this.createEdge(
      '/brand_audiences',
      fields,
      params,
      BrandAudience
    );
  }

  getBroadTargetingCategories (fields, params, fetchFirstPage = true): BroadTargetingCategories {
    return this.getEdge(
      BroadTargetingCategories,
      fields,
      params,
      fetchFirstPage,
      '/broadtargetingcategories'
    );
  }

  getBusinessActivities (fields, params, fetchFirstPage = true): BusinessActivityLogEvent {
    return this.getEdge(
      BusinessActivityLogEvent,
      fields,
      params,
      fetchFirstPage,
      '/business_activities'
    );
  }

  getBusinessProjects (fields, params, fetchFirstPage = true): BusinessProject {
    return this.getEdge(
      BusinessProject,
      fields,
      params,
      fetchFirstPage,
      '/businessprojects'
    );
  }

  getBusinessSettingLogs (fields, params, fetchFirstPage = true): BusinessSettingLogsData {
    return this.getEdge(
      BusinessSettingLogsData,
      fields,
      params,
      fetchFirstPage,
      '/businesssettinglogs'
    );
  }

  deleteCampaigns (params): AbstractObject {
    return super.deleteEdge(
      '/campaigns',
      params
    );
  }

  getCampaigns (fields, params, fetchFirstPage = true): Campaign {
    return this.getEdge(
      Campaign,
      fields,
      params,
      fetchFirstPage,
      '/campaigns'
    );
  }

  createCampaign (fields, params): Campaign {
    return this.createEdge(
      '/campaigns',
      fields,
      params,
      Campaign
    );
  }

  getCampaignsByLabels (fields, params, fetchFirstPage = true): Campaign {
    return this.getEdge(
      Campaign,
      fields,
      params,
      fetchFirstPage,
      '/campaignsbylabels'
    );
  }

  getContextualTargetingBrowse (fields, params, fetchFirstPage = true): AdAccountContextualTargeting {
    return this.getEdge(
      AdAccountContextualTargeting,
      fields,
      params,
      fetchFirstPage,
      '/contextual_targeting_browse'
    );
  }

  createCoupon (fields, params): AdAccount {
    return this.createEdge(
      '/coupons',
      fields,
      params,
      AdAccount
    );
  }

  getCustomAudiences (fields, params, fetchFirstPage = true): CustomAudience {
    return this.getEdge(
      CustomAudience,
      fields,
      params,
      fetchFirstPage,
      '/customaudiences'
    );
  }

  createCustomAudience (fields, params): CustomAudience {
    return this.createEdge(
      '/customaudiences',
      fields,
      params,
      CustomAudience
    );
  }

  getCustomAudiencesTos (fields, params, fetchFirstPage = true): CustomAudiencesTOS {
    return this.getEdge(
      CustomAudiencesTOS,
      fields,
      params,
      fetchFirstPage,
      '/customaudiencestos'
    );
  }

  getCustomConversions (fields, params, fetchFirstPage = true): CustomConversion {
    return this.getEdge(
      CustomConversion,
      fields,
      params,
      fetchFirstPage,
      '/customconversions'
    );
  }

  createCustomConversion (fields, params): CustomConversion {
    return this.createEdge(
      '/customconversions',
      fields,
      params,
      CustomConversion
    );
  }

  createDeactivate (fields, params): AdAccount {
    return this.createEdge(
      '/deactivate',
      fields,
      params,
      AdAccount
    );
  }

  getDeliveryEstimate (fields, params, fetchFirstPage = true): AdAccountDeliveryEstimate {
    return this.getEdge(
      AdAccountDeliveryEstimate,
      fields,
      params,
      fetchFirstPage,
      '/delivery_estimate'
    );
  }

  getDeprecatedTargetingAdSets (fields, params, fetchFirstPage = true): AdSet {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/deprecatedtargetingadsets'
    );
  }

  getDirectDeals (fields, params, fetchFirstPage = true): DirectDeal {
    return this.getEdge(
      DirectDeal,
      fields,
      params,
      fetchFirstPage,
      '/direct_deals'
    );
  }

  createDirectDealsTo (fields, params): AdAccount {
    return this.createEdge(
      '/direct_deals_tos',
      fields,
      params,
      AdAccount
    );
  }

  createEmailImport (fields, params): AbstractObject {
    return this.createEdge(
      '/emailimport',
      fields,
      params

    );
  }

  getGeneratePreviews (fields, params, fetchFirstPage = true): AdPreview {
    return this.getEdge(
      AdPreview,
      fields,
      params,
      fetchFirstPage,
      '/generatepreviews'
    );
  }

  getImpactingAdStudies (fields, params, fetchFirstPage = true): AdStudy {
    return this.getEdge(
      AdStudy,
      fields,
      params,
      fetchFirstPage,
      '/impacting_ad_studies'
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

  getInstagramAccounts (fields, params, fetchFirstPage = true): InstagramUser {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/instagram_accounts'
    );
  }

  getLeadGenForms (fields, params, fetchFirstPage = true): LeadgenForm {
    return this.getEdge(
      LeadgenForm,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_forms'
    );
  }

  createLocationCluster (fields, params): AdAccount {
    return this.createEdge(
      '/locationclusters',
      fields,
      params,
      AdAccount
    );
  }

  getMatchedSearchApplications (fields, params, fetchFirstPage = true): AdAccountMatchedSearchApplicationsEdgeData {
    return this.getEdge(
      AdAccountMatchedSearchApplicationsEdgeData,
      fields,
      params,
      fetchFirstPage,
      '/matched_search_applications'
    );
  }

  getMaxBid (fields, params, fetchFirstPage = true): AdAccountMaxBid {
    return this.getEdge(
      AdAccountMaxBid,
      fields,
      params,
      fetchFirstPage,
      '/max_bid'
    );
  }

  getMinimumBudgets (fields, params, fetchFirstPage = true): MinimumBudget {
    return this.getEdge(
      MinimumBudget,
      fields,
      params,
      fetchFirstPage,
      '/minimum_budgets'
    );
  }

  createMockup (fields, params): AbstractObject {
    return this.createEdge(
      '/mockups',
      fields,
      params

    );
  }

  getOfflineConversionDataSets (fields, params, fetchFirstPage = true): OfflineConversionDataSet {
    return this.getEdge(
      OfflineConversionDataSet,
      fields,
      params,
      fetchFirstPage,
      '/offline_conversion_data_sets'
    );
  }

  getOffsitePixels (fields, params, fetchFirstPage = true): OffsitePixel {
    return this.getEdge(
      OffsitePixel,
      fields,
      params,
      fetchFirstPage,
      '/offsitepixels'
    );
  }

  getOnBehalfRequests (fields, params, fetchFirstPage = true): BusinessOwnedObjectOnBehalfOfRequest {
    return this.getEdge(
      BusinessOwnedObjectOnBehalfOfRequest,
      fields,
      params,
      fetchFirstPage,
      '/onbehalf_requests'
    );
  }

  getPartnerIntegrations (fields, params, fetchFirstPage = true): PartnerIntegrationLinked {
    return this.getEdge(
      PartnerIntegrationLinked,
      fields,
      params,
      fetchFirstPage,
      '/partner_integrations'
    );
  }

  createPartnerIntegration (fields, params): PartnerIntegrationLinked {
    return this.createEdge(
      '/partner_integrations',
      fields,
      params,
      PartnerIntegrationLinked
    );
  }

  getPartnerCategories (fields, params, fetchFirstPage = true): PartnerCategory {
    return this.getEdge(
      PartnerCategory,
      fields,
      params,
      fetchFirstPage,
      '/partnercategories'
    );
  }

  createPartnerDatum (fields, params): AdAccount {
    return this.createEdge(
      '/partnerdata',
      fields,
      params,
      AdAccount
    );
  }

  createPartnerRequest (fields, params): AbstractObject {
    return this.createEdge(
      '/partnerrequests',
      fields,
      params

    );
  }

  getPartners (fields, params, fetchFirstPage = true): AdsDataPartner {
    return this.getEdge(
      AdsDataPartner,
      fields,
      params,
      fetchFirstPage,
      '/partners'
    );
  }

  createProductAudience (fields, params): CustomAudience {
    return this.createEdge(
      '/product_audiences',
      fields,
      params,
      CustomAudience
    );
  }

  getPromotePages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/promote_pages'
    );
  }

  getPublisherBlockLists (fields, params, fetchFirstPage = true): PublisherBlockList {
    return this.getEdge(
      PublisherBlockList,
      fields,
      params,
      fetchFirstPage,
      '/publisher_block_lists'
    );
  }

  createPublisherBlockList (fields, params): PublisherBlockList {
    return this.createEdge(
      '/publisher_block_lists',
      fields,
      params,
      PublisherBlockList
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

  getReachFrequencyPredictions (fields, params, fetchFirstPage = true): ReachFrequencyPrediction {
    return this.getEdge(
      ReachFrequencyPrediction,
      fields,
      params,
      fetchFirstPage,
      '/reachfrequencypredictions'
    );
  }

  createReachFrequencyPrediction (fields, params): ReachFrequencyPrediction {
    return this.createEdge(
      '/reachfrequencypredictions',
      fields,
      params,
      ReachFrequencyPrediction
    );
  }

  getReferral (fields, params, fetchFirstPage = true): Referral {
    return this.getEdge(
      Referral,
      fields,
      params,
      fetchFirstPage,
      '/referral'
    );
  }

  createReferral (fields, params): Referral {
    return this.createEdge(
      '/referral',
      fields,
      params,
      Referral
    );
  }

  getRoas (fields, params, fetchFirstPage = true): AdAccountRoas {
    return this.getEdge(
      AdAccountRoas,
      fields,
      params,
      fetchFirstPage,
      '/roas'
    );
  }

  getSavedAudiences (fields, params, fetchFirstPage = true): SavedAudience {
    return this.getEdge(
      SavedAudience,
      fields,
      params,
      fetchFirstPage,
      '/saved_audiences'
    );
  }

  createSponsoredMessageAd (fields, params): AbstractObject {
    return this.createEdge(
      '/sponsored_message_ads',
      fields,
      params

    );
  }

  getTargetingBrowse (fields, params, fetchFirstPage = true): AdAccountTargetingUnified {
    return this.getEdge(
      AdAccountTargetingUnified,
      fields,
      params,
      fetchFirstPage,
      '/targetingbrowse'
    );
  }

  getTargetingSearch (fields, params, fetchFirstPage = true): AdAccountTargetingUnified {
    return this.getEdge(
      AdAccountTargetingUnified,
      fields,
      params,
      fetchFirstPage,
      '/targetingsearch'
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

  getTargetingSuggestions (fields, params, fetchFirstPage = true): AdAccountTargetingUnified {
    return this.getEdge(
      AdAccountTargetingUnified,
      fields,
      params,
      fetchFirstPage,
      '/targetingsuggestions'
    );
  }

  getTargetingValidation (fields, params, fetchFirstPage = true): AdAccountTargetingUnified {
    return this.getEdge(
      AdAccountTargetingUnified,
      fields,
      params,
      fetchFirstPage,
      '/targetingvalidation'
    );
  }

  getTimezoneOffsets (fields, params, fetchFirstPage = true): TimezoneOffset {
    return this.getEdge(
      TimezoneOffset,
      fields,
      params,
      fetchFirstPage,
      '/timezoneoffsets'
    );
  }

  deleteTracking (params): AbstractObject {
    return super.deleteEdge(
      '/tracking',
      params
    );
  }

  getTracking (fields, params, fetchFirstPage = true): AdAccountTrackingData {
    return this.getEdge(
      AdAccountTrackingData,
      fields,
      params,
      fetchFirstPage,
      '/tracking'
    );
  }

  createTracking (fields, params): AdAccount {
    return this.createEdge(
      '/tracking',
      fields,
      params,
      AdAccount
    );
  }

  deleteUserMatch (params): AbstractObject {
    return super.deleteEdge(
      '/usermatch',
      params
    );
  }

  createUserMatch (fields, params): AbstractObject {
    return this.createEdge(
      '/usermatch',
      fields,
      params

    );
  }

  deleteUsers (params): AbstractObject {
    return super.deleteEdge(
      '/users',
      params
    );
  }

  getUsers (fields, params, fetchFirstPage = true): AdAccountUser {
    return this.getEdge(
      AdAccountUser,
      fields,
      params,
      fetchFirstPage,
      '/users'
    );
  }

  createUser (fields, params): AdAccount {
    return this.createEdge(
      '/users',
      fields,
      params,
      AdAccount
    );
  }

  deleteUsersOfAnyAudience (params): AbstractObject {
    return super.deleteEdge(
      '/usersofanyaudience',
      params
    );
  }

  get (fields, params): AdAccount {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdAccount {
    return super.update(
      params
    );
  }
}
