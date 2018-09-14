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
import AdMonetizationProperty from './ad-monetization-property';
import AdStudy from './ad-study';
import AdAccount from './ad-account';
import AdAccountCreationRequest from './ad-account-creation-request';
import AdNetworkAnalyticsSyncQueryResult from './ad-network-analytics-sync-query-result';
import AdNetworkAnalyticsAsyncQueryExport from './ad-network-analytics-async-query-export';
import AdNetworkAnalyticsAsyncQueryResult from './ad-network-analytics-async-query-result';
import AdsReportBuilder from './ads-report-builder';
import AdsPixel from './ads-pixel';
import BusinessAdvertisableApplicationsResult from './business-advertisable-applications-result';
import Page from './page';
import AppPublisher from './app-publisher';
import ANBlockedBICategory from './an-blocked-bi-category';
import WebPublisher from './web-publisher';
import PagePublisher from './page-publisher';
import AnalyticsQueryResult from './analytics-query-result';
import AnalyticsQueryExportResult from './analytics-query-export-result';
import AdImage from './ad-image';
import CustomAudience from './custom-audience';
import Photo from './photo';
import ProductCatalog from './product-catalog';
import SavedAudience from './saved-audience';
import BigDataUploadSession from './big-data-upload-session';
import BusinessActivityLogEvent from './business-activity-log-event';
import OracleTransaction from './oracle-transaction';
import BusinessPersona from './business-persona';
import BusinessResourceGroup from './business-resource-group';
import BusinessUnit from './business-unit';
import BusinessUser from './business-user';
import BusinessProject from './business-project';
import BusinessSettingLogsData from './business-setting-logs-data';
import BusinessProductCatalogTOS from './business-product-catalog-tos';
import CustomConversion from './custom-conversion';
import BusinessAdAccountRequest from './business-ad-account-request';
import Application from './application';
import PageLeadsAccessConfig from './page-leads-access-config';
import BusinessObject from './business-object';
import BusinessPageRequest from './business-page-request';
import PublisherBlockList from './publisher-block-list';
import CommerceMerchantTOSAcceptance from './commerce-merchant-tos-acceptance';
import DirectDealAvailableAdvertisers from './direct-deal-available-advertisers';
import DirectDeal from './direct-deal';
import DirectDebit from './direct-debit';
import EventSourceGroup from './event-source-group';
import ExtendedCreditApplication from './extended-credit-application';
import ExtendedCredit from './extended-credit';
import FinanceObject from './finance-object';
import ReachFrequencyPrediction from './reach-frequency-prediction';
import BusinessAssetSharingAgreement from './business-asset-sharing-agreement';
import BusinessAgreement from './business-agreement';
import InstagramUser from './instagram-user';
import IPObject from './ip-object';
import BusinessMatchedSearchApplicationsEdgeData from './business-matched-search-applications-edge-data';
import MeasurementPlayground from './measurement-playground';
import MeasurementReport from './measurement-report';
import MHubTermsOfService from './m-hub-terms-of-service';
import OfflineConversionDataSet from './offline-conversion-data-set';
import OfflineTermsOfService from './offline-terms-of-service';
import OrderIDAttributions from './order-id-attributions';
import LegacyBusinessAdAccountRequest from './legacy-business-ad-account-request';
import OwnedDomain from './owned-domain';
import PartnerIntegrationLinked from './partner-integration-linked';
import BusinessApplicationRequest from './business-application-request';
import BusinessRoleRequest from './business-role-request';
import ProfilePictureSource from './profile-picture-source';
import BusinessPixelTOS from './business-pixel-tos';
import AudiencePermission from './audience-permission';
import BusinessOwnedObjectOnBehalfOfRequest from './business-owned-object-on-behalf-of-request';
import BusinessRequest from './business-request';
import SimpleAttributionWebhook from './simple-attribution-webhook';
import SpacoDsDataCollection from './spaco-ds-data-collection';
import SystemUser from './system-user';
import BusinessTag from './business-tag';
import VideoMetricsReport from './video-metrics-report';
import WhatsAppBusinessAccount from './whats-app-business-account';

/**
 * Business
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Business extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      block_offline_analytics: 'block_offline_analytics',
      created_by: 'created_by',
      created_time: 'created_time',
      extended_updated_time: 'extended_updated_time',
      id: 'id',
      is_hidden: 'is_hidden',
      is_instagram_enabled_in_fb_analytics: 'is_instagram_enabled_in_fb_analytics',
      link: 'link',
      name: 'name',
      payment_account_id: 'payment_account_id',
      primary_page: 'primary_page',
      profile_picture_uri: 'profile_picture_uri',
      timezone_id: 'timezone_id',
      two_factor_type: 'two_factor_type',
      updated_by: 'updated_by',
      updated_time: 'updated_time',
      verification_status: 'verification_status',
      vertical: 'vertical',
      vertical_id: 'vertical_id'
    });
  }

  static get TwoFactorType (): Object {
    return Object.freeze({
      none: 'none',
      admin_required: 'admin_required',
      all_required: 'all_required'
    });
  }
  static get Vertical (): Object {
    return Object.freeze({
      advertising: 'ADVERTISING',
      automotive: 'AUTOMOTIVE',
      consumer_packaged_goods: 'CONSUMER_PACKAGED_GOODS',
      ecommerce: 'ECOMMERCE',
      education: 'EDUCATION',
      energy_and_utilities: 'ENERGY_AND_UTILITIES',
      entertainment_and_media: 'ENTERTAINMENT_AND_MEDIA',
      financial_services: 'FINANCIAL_SERVICES',
      gaming: 'GAMING',
      government_and_politics: 'GOVERNMENT_AND_POLITICS',
      marketing: 'MARKETING',
      organizations_and_associations: 'ORGANIZATIONS_AND_ASSOCIATIONS',
      professional_services: 'PROFESSIONAL_SERVICES',
      retail: 'RETAIL',
      technology: 'TECHNOLOGY',
      telecom: 'TELECOM',
      travel: 'TRAVEL',
      non_profit: 'NON_PROFIT',
      restaurant: 'RESTAURANT',
      health: 'HEALTH',
      luxury: 'LUXURY',
      other: 'OTHER'
    });
  }
  static get AccessType (): Object {
    return Object.freeze({
      owner: 'OWNER',
      agency: 'AGENCY'
    });
  }
  static get PermittedTasks (): Object {
    return Object.freeze({
      manage: 'MANAGE',
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE'
    });
  }
  static get PagePermittedRoles (): Object {
    return Object.freeze({
      manager: 'MANAGER',
      content_creator: 'CONTENT_CREATOR',
      moderator: 'MODERATOR',
      advertiser: 'ADVERTISER',
      insights_analyst: 'INSIGHTS_ANALYST'
    });
  }
  static get SurveyBusinessType (): Object {
    return Object.freeze({
      agency: 'AGENCY',
      advertiser: 'ADVERTISER',
      app_developer: 'APP_DEVELOPER',
      publisher: 'PUBLISHER'
    });
  }
  static get PermittedRoles (): Object {
    return Object.freeze({
      manager: 'MANAGER',
      content_creator: 'CONTENT_CREATOR',
      moderator: 'MODERATOR',
      advertiser: 'ADVERTISER',
      insights_analyst: 'INSIGHTS_ANALYST'
    });
  }
  static get Role (): Object {
    return Object.freeze({
      finance_editor: 'FINANCE_EDITOR',
      finance_analyst: 'FINANCE_ANALYST',
      ads_rights_reviewer: 'ADS_RIGHTS_REVIEWER',
      admin: 'ADMIN',
      employee: 'EMPLOYEE',
      fb_employee_sales_rep: 'FB_EMPLOYEE_SALES_REP'
    });
  }

  createAccessToken (fields, params): Business {
    return this.createEdge(
      '/access_token',
      fields,
      params,
      Business
    );
  }

  getAdMonetizationProperties (fields, params, fetchFirstPage = true): AdMonetizationProperty {
    return this.getEdge(
      AdMonetizationProperty,
      fields,
      params,
      fetchFirstPage,
      '/ad_monetization_properties'
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

  createAdStudy (fields, params): AdStudy {
    return this.createEdge(
      '/ad_studies',
      fields,
      params,
      AdStudy
    );
  }

  createAdAccount (fields, params): AdAccount {
    return this.createEdge(
      '/adaccount',
      fields,
      params,
      AdAccount
    );
  }

  getAdAccountCreationRequests (fields, params, fetchFirstPage = true): AdAccountCreationRequest {
    return this.getEdge(
      AdAccountCreationRequest,
      fields,
      params,
      fetchFirstPage,
      '/adaccountcreationrequests'
    );
  }

  createAdAccountCreationRequest (fields, params): AdAccountCreationRequest {
    return this.createEdge(
      '/adaccountcreationrequests',
      fields,
      params,
      AdAccountCreationRequest
    );
  }

  deleteAdAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/adaccounts',
      params
    );
  }

  getAdNetworkAnalytics (fields, params, fetchFirstPage = true): AdNetworkAnalyticsSyncQueryResult {
    return this.getEdge(
      AdNetworkAnalyticsSyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics'
    );
  }

  createAdNetworkAnalytic (fields, params): Business {
    return this.createEdge(
      '/adnetworkanalytics',
      fields,
      params,
      Business
    );
  }

  getAdNetworkAnalyticsExport (fields, params, fetchFirstPage = true): AdNetworkAnalyticsAsyncQueryExport {
    return this.getEdge(
      AdNetworkAnalyticsAsyncQueryExport,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics_export'
    );
  }

  getAdNetworkAnalyticsResults (fields, params, fetchFirstPage = true): AdNetworkAnalyticsAsyncQueryResult {
    return this.getEdge(
      AdNetworkAnalyticsAsyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics_results'
    );
  }

  getAdsReporting (fields, params, fetchFirstPage = true): AdsReportBuilder {
    return this.getEdge(
      AdsReportBuilder,
      fields,
      params,
      fetchFirstPage,
      '/ads_reporting'
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

  getAdvertisableApplications (fields, params, fetchFirstPage = true): BusinessAdvertisableApplicationsResult {
    return this.getEdge(
      BusinessAdvertisableApplicationsResult,
      fields,
      params,
      fetchFirstPage,
      '/advertisable_applications'
    );
  }

  deleteAgencies (params): AbstractObject {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencyPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/agency_pages'
    );
  }

  getAnPublisherBlockListApps (fields, params, fetchFirstPage = true): AppPublisher {
    return this.getEdge(
      AppPublisher,
      fields,
      params,
      fetchFirstPage,
      '/an_publisher_blocklist_apps'
    );
  }

  getAnPublisherBlockListCategories (fields, params, fetchFirstPage = true): ANBlockedBICategory {
    return this.getEdge(
      ANBlockedBICategory,
      fields,
      params,
      fetchFirstPage,
      '/an_publisher_blocklist_categories'
    );
  }

  getAnPublisherBlockListDomains (fields, params, fetchFirstPage = true): WebPublisher {
    return this.getEdge(
      WebPublisher,
      fields,
      params,
      fetchFirstPage,
      '/an_publisher_blocklist_domains'
    );
  }

  getAnPublisherBlockListPages (fields, params, fetchFirstPage = true): PagePublisher {
    return this.getEdge(
      PagePublisher,
      fields,
      params,
      fetchFirstPage,
      '/an_publisher_blocklist_pages'
    );
  }

  getAnalyticsQuery (fields, params, fetchFirstPage = true): AnalyticsQueryResult {
    return this.getEdge(
      AnalyticsQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_query'
    );
  }

  getAnalyticsQueryExport (fields, params, fetchFirstPage = true): AnalyticsQueryExportResult {
    return this.getEdge(
      AnalyticsQueryExportResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_query_export'
    );
  }

  deleteApps (params): AbstractObject {
    return super.deleteEdge(
      '/apps',
      params
    );
  }

  createApp (fields, params): Business {
    return this.createEdge(
      '/apps',
      fields,
      params,
      Business
    );
  }

  getAssignedAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_ad_accounts'
    );
  }

  getAssignedAdImages (fields, params, fetchFirstPage = true): AdImage {
    return this.getEdge(
      AdImage,
      fields,
      params,
      fetchFirstPage,
      '/assigned_adimages'
    );
  }

  getAssignedCustomAudiences (fields, params, fetchFirstPage = true): CustomAudience {
    return this.getEdge(
      CustomAudience,
      fields,
      params,
      fetchFirstPage,
      '/assigned_customaudiences'
    );
  }

  getAssignedMonetizationProperties (fields, params, fetchFirstPage = true): AdMonetizationProperty {
    return this.getEdge(
      AdMonetizationProperty,
      fields,
      params,
      fetchFirstPage,
      '/assigned_monetization_properties'
    );
  }

  getAssignedPagePhotos (fields, params, fetchFirstPage = true): Photo {
    return this.getEdge(
      Photo,
      fields,
      params,
      fetchFirstPage,
      '/assigned_pagephotos'
    );
  }

  getAssignedPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/assigned_pages'
    );
  }

  getAssignedProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/assigned_product_catalogs'
    );
  }

  getAssignedSavedAudiences (fields, params, fetchFirstPage = true): SavedAudience {
    return this.getEdge(
      SavedAudience,
      fields,
      params,
      fetchFirstPage,
      '/assigned_savedaudiences'
    );
  }

  getBigDataUpload (fields, params, fetchFirstPage = true): BigDataUploadSession {
    return this.getEdge(
      BigDataUploadSession,
      fields,
      params,
      fetchFirstPage,
      '/big_data_upload'
    );
  }

  createBlockListDraft (fields, params): Business {
    return this.createEdge(
      '/block_list_drafts',
      fields,
      params,
      Business
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

  getBusinessInvoices (fields, params, fetchFirstPage = true): OracleTransaction {
    return this.getEdge(
      OracleTransaction,
      fields,
      params,
      fetchFirstPage,
      '/business_invoices'
    );
  }

  getBusinessPersona (fields, params, fetchFirstPage = true): BusinessPersona {
    return this.getEdge(
      BusinessPersona,
      fields,
      params,
      fetchFirstPage,
      '/business_persona'
    );
  }

  getBusinessResourceGroups (fields, params, fetchFirstPage = true): BusinessResourceGroup {
    return this.getEdge(
      BusinessResourceGroup,
      fields,
      params,
      fetchFirstPage,
      '/business_resource_groups'
    );
  }

  getBusinessUnits (fields, params, fetchFirstPage = true): BusinessUnit {
    return this.getEdge(
      BusinessUnit,
      fields,
      params,
      fetchFirstPage,
      '/business_units'
    );
  }

  getBusinessUsers (fields, params, fetchFirstPage = true): BusinessUser {
    return this.getEdge(
      BusinessUser,
      fields,
      params,
      fetchFirstPage,
      '/business_users'
    );
  }

  createBusinessUser (fields, params): BusinessUser {
    return this.createEdge(
      '/business_users',
      fields,
      params,
      BusinessUser
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

  createBusinessProject (fields, params): BusinessProject {
    return this.createEdge(
      '/businessprojects',
      fields,
      params,
      BusinessProject
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

  getCatalogSegmentProducerTos (fields, params, fetchFirstPage = true): BusinessProductCatalogTOS {
    return this.getEdge(
      BusinessProductCatalogTOS,
      fields,
      params,
      fetchFirstPage,
      '/catalog_segment_producer_tos'
    );
  }

  createCatalogSegmentProducerTo (fields, params): Business {
    return this.createEdge(
      '/catalog_segment_producer_tos',
      fields,
      params,
      Business
    );
  }

  createClaimCustomConversion (fields, params): CustomConversion {
    return this.createEdge(
      '/claim_custom_conversions',
      fields,
      params,
      CustomConversion
    );
  }

  getClientAdAccountRequests (fields, params, fetchFirstPage = true): BusinessAdAccountRequest {
    return this.getEdge(
      BusinessAdAccountRequest,
      fields,
      params,
      fetchFirstPage,
      '/client_ad_account_requests'
    );
  }

  getClientAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/client_ad_accounts'
    );
  }

  createClientAdAccount (fields, params): Business {
    return this.createEdge(
      '/client_ad_accounts',
      fields,
      params,
      Business
    );
  }

  getClientApps (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/client_apps'
    );
  }

  createClientApp (fields, params): Business {
    return this.createEdge(
      '/client_apps',
      fields,
      params,
      Business
    );
  }

  getClientLeadsAccess (fields, params, fetchFirstPage = true): PageLeadsAccessConfig {
    return this.getEdge(
      PageLeadsAccessConfig,
      fields,
      params,
      fetchFirstPage,
      '/client_leads_access'
    );
  }

  getClientObjects (fields, params, fetchFirstPage = true): BusinessObject {
    return this.getEdge(
      BusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/client_objects'
    );
  }

  getClientPageRequests (fields, params, fetchFirstPage = true): BusinessPageRequest {
    return this.getEdge(
      BusinessPageRequest,
      fields,
      params,
      fetchFirstPage,
      '/client_page_requests'
    );
  }

  getClientPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/client_pages'
    );
  }

  createClientPage (fields, params): Business {
    return this.createEdge(
      '/client_pages',
      fields,
      params,
      Business
    );
  }

  getClientPixels (fields, params, fetchFirstPage = true): AdsPixel {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/client_pixels'
    );
  }

  getClientProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/client_product_catalogs'
    );
  }

  getClientPublisherBlockLists (fields, params, fetchFirstPage = true): PublisherBlockList {
    return this.getEdge(
      PublisherBlockList,
      fields,
      params,
      fetchFirstPage,
      '/client_publisher_block_lists'
    );
  }

  deleteClients (params): AbstractObject {
    return super.deleteEdge(
      '/clients',
      params
    );
  }

  getCommerceTosAcceptance (fields, params, fetchFirstPage = true): CommerceMerchantTOSAcceptance {
    return this.getEdge(
      CommerceMerchantTOSAcceptance,
      fields,
      params,
      fetchFirstPage,
      '/commerce_tos_acceptance'
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

  getDealShowsPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/deal_shows_pages'
    );
  }

  getDirectDealAvailableAdvertisers (fields, params, fetchFirstPage = true): DirectDealAvailableAdvertisers {
    return this.getEdge(
      DirectDealAvailableAdvertisers,
      fields,
      params,
      fetchFirstPage,
      '/direct_deal_available_advertisers'
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

  getDirectDebits (fields, params, fetchFirstPage = true): DirectDebit {
    return this.getEdge(
      DirectDebit,
      fields,
      params,
      fetchFirstPage,
      '/direct_debits'
    );
  }

  getEventSourceGroups (fields, params, fetchFirstPage = true): EventSourceGroup {
    return this.getEdge(
      EventSourceGroup,
      fields,
      params,
      fetchFirstPage,
      '/event_source_groups'
    );
  }

  createEventSourceGroup (fields, params): EventSourceGroup {
    return this.createEdge(
      '/event_source_groups',
      fields,
      params,
      EventSourceGroup
    );
  }

  getExtendedCreditApplications (fields, params, fetchFirstPage = true): ExtendedCreditApplication {
    return this.getEdge(
      ExtendedCreditApplication,
      fields,
      params,
      fetchFirstPage,
      '/extendedcreditapplications'
    );
  }

  getExtendedCredits (fields, params, fetchFirstPage = true): ExtendedCredit {
    return this.getEdge(
      ExtendedCredit,
      fields,
      params,
      fetchFirstPage,
      '/extendedcredits'
    );
  }

  getFinancePermissions (fields, params, fetchFirstPage = true): FinanceObject {
    return this.getEdge(
      FinanceObject,
      fields,
      params,
      fetchFirstPage,
      '/finance_permissions'
    );
  }

  getGrpPlans (fields, params, fetchFirstPage = true): ReachFrequencyPrediction {
    return this.getEdge(
      ReachFrequencyPrediction,
      fields,
      params,
      fetchFirstPage,
      '/grp_plans'
    );
  }

  getInitiatedAudienceSharingRequests (fields, params, fetchFirstPage = true): BusinessAssetSharingAgreement {
    return this.getEdge(
      BusinessAssetSharingAgreement,
      fields,
      params,
      fetchFirstPage,
      '/initiated_audience_sharing_requests'
    );
  }

  getInitiatedSharingAgreements (fields, params, fetchFirstPage = true): BusinessAgreement {
    return this.getEdge(
      BusinessAgreement,
      fields,
      params,
      fetchFirstPage,
      '/initiated_sharing_agreements'
    );
  }

  deleteInstagramAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/instagram_accounts',
      params
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

  getIpPermissions (fields, params, fetchFirstPage = true): IPObject {
    return this.getEdge(
      IPObject,
      fields,
      params,
      fetchFirstPage,
      '/ip_permissions'
    );
  }

  getMatchedSearchApplications (fields, params, fetchFirstPage = true): BusinessMatchedSearchApplicationsEdgeData {
    return this.getEdge(
      BusinessMatchedSearchApplicationsEdgeData,
      fields,
      params,
      fetchFirstPage,
      '/matched_search_applications'
    );
  }

  getMeasurementPlayground (fields, params, fetchFirstPage = true): MeasurementPlayground {
    return this.getEdge(
      MeasurementPlayground,
      fields,
      params,
      fetchFirstPage,
      '/measurement_playground'
    );
  }

  getMeasurementReports (fields, params, fetchFirstPage = true): MeasurementReport {
    return this.getEdge(
      MeasurementReport,
      fields,
      params,
      fetchFirstPage,
      '/measurement_reports'
    );
  }

  createMeasurementReport (fields, params): MeasurementReport {
    return this.createEdge(
      '/measurement_reports',
      fields,
      params,
      MeasurementReport
    );
  }

  getMHubTermsOfService (fields, params, fetchFirstPage = true): MHubTermsOfService {
    return this.getEdge(
      MHubTermsOfService,
      fields,
      params,
      fetchFirstPage,
      '/mhub_terms_of_service'
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

  createOfflineConversionDataSet (fields, params): OfflineConversionDataSet {
    return this.createEdge(
      '/offline_conversion_data_sets',
      fields,
      params,
      OfflineConversionDataSet
    );
  }

  getOfFLineTermsOfService (fields, params, fetchFirstPage = true): OfflineTermsOfService {
    return this.getEdge(
      OfflineTermsOfService,
      fields,
      params,
      fetchFirstPage,
      '/offline_terms_of_service'
    );
  }

  getOrderIdAttributions (fields, params, fetchFirstPage = true): OrderIDAttributions {
    return this.getEdge(
      OrderIDAttributions,
      fields,
      params,
      fetchFirstPage,
      '/order_id_attributions'
    );
  }

  getOwnedAdAccountRequests (fields, params, fetchFirstPage = true): LegacyBusinessAdAccountRequest {
    return this.getEdge(
      LegacyBusinessAdAccountRequest,
      fields,
      params,
      fetchFirstPage,
      '/owned_ad_account_requests'
    );
  }

  getOwnedAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/owned_ad_accounts'
    );
  }

  createOwnedAdAccount (fields, params): Business {
    return this.createEdge(
      '/owned_ad_accounts',
      fields,
      params,
      Business
    );
  }

  getOwnedApps (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/owned_apps'
    );
  }

  createOwnedApp (fields, params): Business {
    return this.createEdge(
      '/owned_apps',
      fields,
      params,
      Business
    );
  }

  deleteOwnedBusinesses (params): AbstractObject {
    return super.deleteEdge(
      '/owned_businesses',
      params
    );
  }

  getOwnedBusinesses (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/owned_businesses'
    );
  }

  createOwnedBusiness (fields, params): Business {
    return this.createEdge(
      '/owned_businesses',
      fields,
      params,
      Business
    );
  }

  getOwnedCustomConversions (fields, params, fetchFirstPage = true): CustomConversion {
    return this.getEdge(
      CustomConversion,
      fields,
      params,
      fetchFirstPage,
      '/owned_custom_conversions'
    );
  }

  getOwnedDomains (fields, params, fetchFirstPage = true): OwnedDomain {
    return this.getEdge(
      OwnedDomain,
      fields,
      params,
      fetchFirstPage,
      '/owned_domains'
    );
  }

  createOwnedDomain (fields, params): OwnedDomain {
    return this.createEdge(
      '/owned_domains',
      fields,
      params,
      OwnedDomain
    );
  }

  getOwnedInstagramAccounts (fields, params, fetchFirstPage = true): InstagramUser {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/owned_instagram_accounts'
    );
  }

  getOwnedObjects (fields, params, fetchFirstPage = true): BusinessObject {
    return this.getEdge(
      BusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/owned_objects'
    );
  }

  getOwnedPageRequests (fields, params, fetchFirstPage = true): BusinessPageRequest {
    return this.getEdge(
      BusinessPageRequest,
      fields,
      params,
      fetchFirstPage,
      '/owned_page_requests'
    );
  }

  getOwnedPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/owned_pages'
    );
  }

  createOwnedPage (fields, params): Business {
    return this.createEdge(
      '/owned_pages',
      fields,
      params,
      Business
    );
  }

  getOwnedPixels (fields, params, fetchFirstPage = true): AdsPixel {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/owned_pixels'
    );
  }

  getOwnedProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/owned_product_catalogs'
    );
  }

  createOwnedProductCatalog (fields, params): ProductCatalog {
    return this.createEdge(
      '/owned_product_catalogs',
      fields,
      params,
      ProductCatalog
    );
  }

  getOwnedPublisherBlockLists (fields, params, fetchFirstPage = true): PublisherBlockList {
    return this.getEdge(
      PublisherBlockList,
      fields,
      params,
      fetchFirstPage,
      '/owned_publisher_block_lists'
    );
  }

  deletePages (params): AbstractObject {
    return super.deleteEdge(
      '/pages',
      params
    );
  }

  createPage (fields, params): Business {
    return this.createEdge(
      '/pages',
      fields,
      params,
      Business
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

  createPartnerAdAccount (fields, params): AbstractObject {
    return this.createEdge(
      '/partneradaccount',
      fields,
      params

    );
  }

  getPartners (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/partners'
    );
  }

  getPendingClientAdAccounts (fields, params, fetchFirstPage = true): BusinessAdAccountRequest {
    return this.getEdge(
      BusinessAdAccountRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_client_ad_accounts'
    );
  }

  getPendingClientApps (fields, params, fetchFirstPage = true): BusinessApplicationRequest {
    return this.getEdge(
      BusinessApplicationRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_client_apps'
    );
  }

  getPendingClientPages (fields, params, fetchFirstPage = true): BusinessPageRequest {
    return this.getEdge(
      BusinessPageRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_client_pages'
    );
  }

  getPendingOwnedAdAccounts (fields, params, fetchFirstPage = true): LegacyBusinessAdAccountRequest {
    return this.getEdge(
      LegacyBusinessAdAccountRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_owned_ad_accounts'
    );
  }

  getPendingOwnedPages (fields, params, fetchFirstPage = true): BusinessPageRequest {
    return this.getEdge(
      BusinessPageRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_owned_pages'
    );
  }

  getPendingShareDPixels (fields, params, fetchFirstPage = true): AdsPixel {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/pending_shared_pixels'
    );
  }

  getPendingUsers (fields, params, fetchFirstPage = true): BusinessRoleRequest {
    return this.getEdge(
      BusinessRoleRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_users'
    );
  }

  getPicture (fields, params, fetchFirstPage = true): ProfilePictureSource {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getPixelTos (fields, params, fetchFirstPage = true): BusinessPixelTOS {
    return this.getEdge(
      BusinessPixelTOS,
      fields,
      params,
      fetchFirstPage,
      '/pixel_tos'
    );
  }

  getProductCatalogTos (fields, params, fetchFirstPage = true): BusinessProductCatalogTOS {
    return this.getEdge(
      BusinessProductCatalogTOS,
      fields,
      params,
      fetchFirstPage,
      '/product_catalog_tos'
    );
  }

  getProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  createProductCatalog (fields, params): ProductCatalog {
    return this.createEdge(
      '/product_catalogs',
      fields,
      params,
      ProductCatalog
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

  getReceivedAudiencePermissions (fields, params, fetchFirstPage = true): AudiencePermission {
    return this.getEdge(
      AudiencePermission,
      fields,
      params,
      fetchFirstPage,
      '/received_audience_permissions'
    );
  }

  getReceivedAudienceSharingRequests (fields, params, fetchFirstPage = true): BusinessAssetSharingAgreement {
    return this.getEdge(
      BusinessAssetSharingAgreement,
      fields,
      params,
      fetchFirstPage,
      '/received_audience_sharing_requests'
    );
  }

  getReceivedInprogressOnBehalfRequests (fields, params, fetchFirstPage = true): BusinessOwnedObjectOnBehalfOfRequest {
    return this.getEdge(
      BusinessOwnedObjectOnBehalfOfRequest,
      fields,
      params,
      fetchFirstPage,
      '/received_inprogress_onbehalf_requests'
    );
  }

  getReceivedRequests (fields, params, fetchFirstPage = true): BusinessRequest {
    return this.getEdge(
      BusinessRequest,
      fields,
      params,
      fetchFirstPage,
      '/received_requests'
    );
  }

  getReceivedSharingAgreements (fields, params, fetchFirstPage = true): BusinessAgreement {
    return this.getEdge(
      BusinessAgreement,
      fields,
      params,
      fetchFirstPage,
      '/received_sharing_agreements'
    );
  }

  getSentInprogressOnBehalfRequests (fields, params, fetchFirstPage = true): BusinessOwnedObjectOnBehalfOfRequest {
    return this.getEdge(
      BusinessOwnedObjectOnBehalfOfRequest,
      fields,
      params,
      fetchFirstPage,
      '/sent_inprogress_onbehalf_requests'
    );
  }

  getSentRequests (fields, params, fetchFirstPage = true): BusinessRequest {
    return this.getEdge(
      BusinessRequest,
      fields,
      params,
      fetchFirstPage,
      '/sent_requests'
    );
  }

  getShareDAudiencePermissions (fields, params, fetchFirstPage = true): AudiencePermission {
    return this.getEdge(
      AudiencePermission,
      fields,
      params,
      fetchFirstPage,
      '/shared_audience_permissions'
    );
  }

  getShareDObjects (fields, params, fetchFirstPage = true): BusinessObject {
    return this.getEdge(
      BusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/shared_objects'
    );
  }

  getSimpleAttributionWebhook (fields, params, fetchFirstPage = true): SimpleAttributionWebhook {
    return this.getEdge(
      SimpleAttributionWebhook,
      fields,
      params,
      fetchFirstPage,
      '/simple_attribution_webhook'
    );
  }

  getSpacoDataSetCollections (fields, params, fetchFirstPage = true): SpacoDsDataCollection {
    return this.getEdge(
      SpacoDsDataCollection,
      fields,
      params,
      fetchFirstPage,
      '/spaco_dataset_collections'
    );
  }

  createSpacoDataSetCollection (fields, params): SpacoDsDataCollection {
    return this.createEdge(
      '/spaco_dataset_collections',
      fields,
      params,
      SpacoDsDataCollection
    );
  }

  getSystemUsers (fields, params, fetchFirstPage = true): SystemUser {
    return this.getEdge(
      SystemUser,
      fields,
      params,
      fetchFirstPage,
      '/system_users'
    );
  }

  createSystemUser (fields, params): SystemUser {
    return this.createEdge(
      '/system_users',
      fields,
      params,
      SystemUser
    );
  }

  getTags (fields, params, fetchFirstPage = true): BusinessTag {
    return this.getEdge(
      BusinessTag,
      fields,
      params,
      fetchFirstPage,
      '/tags'
    );
  }

  deleteUserInvitations (params): AbstractObject {
    return super.deleteEdge(
      '/user_invitations',
      params
    );
  }

  getUserInvitations (fields, params, fetchFirstPage = true): BusinessRoleRequest {
    return this.getEdge(
      BusinessRoleRequest,
      fields,
      params,
      fetchFirstPage,
      '/user_invitations'
    );
  }

  deleteUserPermissions (params): AbstractObject {
    return super.deleteEdge(
      '/userpermissions',
      params
    );
  }

  createUserPermission (fields, params): Business {
    return this.createEdge(
      '/userpermissions',
      fields,
      params,
      Business
    );
  }

  getVideoMetricsReport (fields, params, fetchFirstPage = true): VideoMetricsReport {
    return this.getEdge(
      VideoMetricsReport,
      fields,
      params,
      fetchFirstPage,
      '/video_metrics_report'
    );
  }

  getWhatsAppBusinessAccounts (fields, params, fetchFirstPage = true): WhatsAppBusinessAccount {
    return this.getEdge(
      WhatsAppBusinessAccount,
      fields,
      params,
      fetchFirstPage,
      '/whatsapp_business_accounts'
    );
  }

  get (fields, params): Business {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Business {
    return super.update(
      params
    );
  }
}
