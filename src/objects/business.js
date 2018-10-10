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
import AdStudy from './ad-study';
import AdAccount from './ad-account';
import AdAccountCreationRequest from './ad-account-creation-request';
import AdNetworkAnalyticsSyncQueryResult from './ad-network-analytics-sync-query-result';
import AdNetworkAnalyticsAsyncQueryResult from './ad-network-analytics-async-query-result';
import AdsPixel from './ads-pixel';
import BusinessAdvertisableApplicationsResult from './business-advertisable-applications-result';
import Page from './page';
import BusinessActivityLogEvent from './business-activity-log-event';
import OracleTransaction from './oracle-transaction';
import BusinessUser from './business-user';
import BusinessProject from './business-project';
import BusinessSettingLogsData from './business-setting-logs-data';
import BusinessProductCatalogTOS from './business-product-catalog-tos';
import CustomConversion from './custom-conversion';
import Application from './application';
import ProductCatalog from './product-catalog';
import DirectDeal from './direct-deal';
import EventSourceGroup from './event-source-group';
import ExtendedCredit from './extended-credit';
import ReachFrequencyPrediction from './reach-frequency-prediction';
import BusinessAssetSharingAgreement from './business-asset-sharing-agreement';
import BusinessAgreement from './business-agreement';
import BusinessMatchedSearchApplicationsEdgeData from './business-matched-search-applications-edge-data';
import MeasurementReport from './measurement-report';
import OfflineConversionDataSet from './offline-conversion-data-set';
import OfflineTermsOfService from './offline-terms-of-service';
import OwnedDomain from './owned-domain';
import PartnerIntegrationLinked from './partner-integration-linked';
import BusinessAdAccountRequest from './business-ad-account-request';
import BusinessApplicationRequest from './business-application-request';
import BusinessPageRequest from './business-page-request';
import LegacyBusinessAdAccountRequest from './legacy-business-ad-account-request';
import BusinessRoleRequest from './business-role-request';
import ProfilePictureSource from './profile-picture-source';
import AudiencePermission from './audience-permission';
import SystemUser from './system-user';

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

  getAdNetworkAnalyticsResults (fields, params, fetchFirstPage = true): AdNetworkAnalyticsAsyncQueryResult {
    return this.getEdge(
      AdNetworkAnalyticsAsyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics_results'
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

  deleteClients (params): AbstractObject {
    return super.deleteEdge(
      '/clients',
      params
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

  getDirectDeals (fields, params, fetchFirstPage = true): DirectDeal {
    return this.getEdge(
      DirectDeal,
      fields,
      params,
      fetchFirstPage,
      '/direct_deals'
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

  getExtendedCredits (fields, params, fetchFirstPage = true): ExtendedCredit {
    return this.getEdge(
      ExtendedCredit,
      fields,
      params,
      fetchFirstPage,
      '/extendedcredits'
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

  getMatchedSearchApplications (fields, params, fetchFirstPage = true): BusinessMatchedSearchApplicationsEdgeData {
    return this.getEdge(
      BusinessMatchedSearchApplicationsEdgeData,
      fields,
      params,
      fetchFirstPage,
      '/matched_search_applications'
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

  getPendingOfflineConversionDataSets (fields, params, fetchFirstPage = true): OfflineConversionDataSet {
    return this.getEdge(
      OfflineConversionDataSet,
      fields,
      params,
      fetchFirstPage,
      '/pending_offline_conversion_data_sets'
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

  createProductCatalog (fields, params): ProductCatalog {
    return this.createEdge(
      '/product_catalogs',
      fields,
      params,
      ProductCatalog
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

  getReceivedSharingAgreements (fields, params, fetchFirstPage = true): BusinessAgreement {
    return this.getEdge(
      BusinessAgreement,
      fields,
      params,
      fetchFirstPage,
      '/received_sharing_agreements'
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

  createSpacoDataSetCollection (fields, params): AbstractObject {
    return this.createEdge(
      '/spaco_dataset_collections',
      fields,
      params

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

  createVietnamAdAccountCreationRequest (fields, params): AdAccountCreationRequest {
    return this.createEdge(
      '/vietnamadaccountcreationrequests',
      fields,
      params,
      AdAccountCreationRequest
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
