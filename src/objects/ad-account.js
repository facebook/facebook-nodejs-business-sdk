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
import AdCreative from './ad-creative';
import AdImage from './ad-image';
import AdLabel from './ad-label';
import AdReportRun from './ad-report-run';
import AdAccountAdRulesHistory from './ad-account-ad-rules-history';
import AdRule from './ad-rule';
import Ad from './ad';
import AdSet from './ad-set';
import AdsPixel from './ads-pixel';
import AssignedUser from './assigned-user';
import Campaign from './campaign';
import AdAsyncRequestSet from './ad-async-request-set';
import BroadTargetingCategories from './broad-targeting-categories';
import CustomAudience from './custom-audience';
import CustomAudiencesTOS from './custom-audiences-tos';
import CustomConversion from './custom-conversion';
import AdAccountDeliveryEstimate from './ad-account-delivery-estimate';
import AdPreview from './ad-preview';
import AdsInsights from './ads-insights';
import LeadgenForm from './leadgen-form';
import MinimumBudget from './minimum-budget';
import OfflineConversionDataSet from './offline-conversion-data-set';
import OffsitePixel from './offsite-pixel';
import PartnerCategory from './partner-category';
import AdsDataPartner from './ads-data-partner';
import ReachEstimate from './reach-estimate';
import ReachFrequencyPrediction from './reach-frequency-prediction';
import AdAccountRoas from './ad-account-roas';
import AdAccountTargetingUnified from './ad-account-targeting-unified';
import TargetingSentenceLine from './targeting-sentence-line';
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

  static get PermittedRoles (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      general_user: 'GENERAL_USER',
      reports_only: 'REPORTS_ONLY',
      instagram_advertiser: 'INSTAGRAM_ADVERTISER',
      instagram_manager: 'INSTAGRAM_MANAGER',
      creative: 'CREATIVE',
      fb_employee_dso_advertiser: 'FB_EMPLOYEE_DSO_ADVERTISER'
    });
  }
  static get Role (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      general_user: 'GENERAL_USER',
      reports_only: 'REPORTS_ONLY',
      instagram_advertiser: 'INSTAGRAM_ADVERTISER',
      instagram_manager: 'INSTAGRAM_MANAGER',
      creative: 'CREATIVE',
      fb_employee_dso_advertiser: 'FB_EMPLOYEE_DSO_ADVERTISER'
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
      data_set: 'DATA_SET',
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

  getAdAssetFeeds (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/adasset_feeds'
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

  createAdLanguageAsset (fields, params): AbstractObject {
    return this.createEdge(
      '/adlanguage_assets',
      fields,
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

  getAdRulesHistory (fields, params, fetchFirstPage = true): AdAccountAdRulesHistory {
    return this.getEdge(
      AdAccountAdRulesHistory,
      fields,
      params,
      fetchFirstPage,
      '/adrules_history'
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

  getAdvertisableApplications (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/advertisable_applications'
    );
  }

  getAdVideos (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/advideos'
    );
  }

  createAdVideo (fields, params): AbstractObject {
    return this.createEdge(
      '/advideos',
      fields,
      params

    );
  }

  deleteAgencies (params): AbstractObject {
    return super.deleteEdge(
      '/agencies',
      params
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

  getApplications (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/applications'
    );
  }

  deleteAssignedUsers (params): AbstractObject {
    return super.deleteEdge(
      '/assigned_users',
      params
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

  getBroadTargetingCategories (fields, params, fetchFirstPage = true): BroadTargetingCategories {
    return this.getEdge(
      BroadTargetingCategories,
      fields,
      params,
      fetchFirstPage,
      '/broadtargetingcategories'
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

  createCustomConversion (fields, params): CustomConversion {
    return this.createEdge(
      '/customconversions',
      fields,
      params,
      CustomConversion
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

  getGeneratePreviews (fields, params, fetchFirstPage = true): AdPreview {
    return this.getEdge(
      AdPreview,
      fields,
      params,
      fetchFirstPage,
      '/generatepreviews'
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

  getInstagramAccounts (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
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

  getMinimumBudgets (fields, params, fetchFirstPage = true): MinimumBudget {
    return this.getEdge(
      MinimumBudget,
      fields,
      params,
      fetchFirstPage,
      '/minimum_budgets'
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

  getPartnerCategories (fields, params, fetchFirstPage = true): PartnerCategory {
    return this.getEdge(
      PartnerCategory,
      fields,
      params,
      fetchFirstPage,
      '/partnercategories'
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

  deletePendingUsers (params): AbstractObject {
    return super.deleteEdge(
      '/pending_users',
      params
    );
  }

  createPendingUser (fields, params): AdAccount {
    return this.createEdge(
      '/pending_users',
      fields,
      params,
      AdAccount
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

  getPublisherBlockLists (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/publisher_block_lists'
    );
  }

  createPublisherBlockList (fields, params): AbstractObject {
    return this.createEdge(
      '/publisher_block_lists',
      fields,
      params

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

  getRoas (fields, params, fetchFirstPage = true): AdAccountRoas {
    return this.getEdge(
      AdAccountRoas,
      fields,
      params,
      fetchFirstPage,
      '/roas'
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

  deleteTracking (params): AbstractObject {
    return super.deleteEdge(
      '/tracking',
      params
    );
  }

  createTracking (fields, params): AbstractObject {
    return this.createEdge(
      '/tracking',
      fields,
      params

    );
  }

  deleteUserMatch (params): AbstractObject {
    return super.deleteEdge(
      '/user_match',
      params
    );
  }

  createUserMatch (fields, params): AbstractObject {
    return this.createEdge(
      '/user_match',
      fields,
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
