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
import Cursor from './../cursor';
import AdStudy from './ad-study';
import AdAccount from './ad-account';
import AdAccountCreationRequest from './ad-account-creation-request';
import AdNetworkAnalyticsSyncQueryResult from './ad-network-analytics-sync-query-result';
import AdNetworkAnalyticsAsyncQueryResult from './ad-network-analytics-async-query-result';
import AdsPixel from './ads-pixel';
import BusinessAdvertisableApplicationsResult from './business-advertisable-applications-result';
import AdPlacement from './ad-placement';
import BusinessAssetGroup from './business-asset-group';
import OracleTransaction from './oracle-transaction';
import BusinessUser from './business-user';
import BusinessProject from './business-project';
import CustomConversion from './custom-conversion';
import Application from './application';
import Page from './page';
import ProductCatalog from './product-catalog';
import BusinessCreativeFolder from './business-creative-folder';
import BusinessCreative from './business-creative';
import DirectDeal from './direct-deal';
import EventSourceGroup from './event-source-group';
import ExtendedCredit from './extended-credit';
import BusinessImage from './business-image';
import BusinessAssetSharingAgreement from './business-asset-sharing-agreement';
import BusinessAgreement from './business-agreement';
import InstagramUser from './instagram-user';
import OfflineConversionDataSet from './offline-conversion-data-set';
import OfflineTermsOfService from './offline-terms-of-service';
import BusinessAdAccountRequest from './business-ad-account-request';
import BusinessApplicationRequest from './business-application-request';
import BusinessPageRequest from './business-page-request';
import BusinessRoleRequest from './business-role-request';
import ProfilePictureSource from './profile-picture-source';
import AudiencePermission from './audience-permission';
import BusinessOwnedObjectOnBehalfOfRequest from './business-owned-object-on-behalf-of-request';
import SystemUser from './system-user';
import ThirdPartyMeasurementReportDataset from './third-party-measurement-report-dataset';
import MeasurementUploadEvent from './measurement-upload-event';
import AdVideo from './ad-video';

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
      vertical_id: 'vertical_id',
    });
  }

  static get TwoFactorType (): Object {
    return Object.freeze({
      admin_required: 'admin_required',
      all_required: 'all_required',
      none: 'none',
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
      health: 'HEALTH',
      luxury: 'LUXURY',
      marketing: 'MARKETING',
      non_profit: 'NON_PROFIT',
      organizations_and_associations: 'ORGANIZATIONS_AND_ASSOCIATIONS',
      other: 'OTHER',
      professional_services: 'PROFESSIONAL_SERVICES',
      restaurant: 'RESTAURANT',
      retail: 'RETAIL',
      technology: 'TECHNOLOGY',
      telecom: 'TELECOM',
      travel: 'TRAVEL',
    });
  }
  static get PermittedTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      creative: 'CREATIVE',
      draft: 'DRAFT',
      fb_employee_dso_advertise: 'FB_EMPLOYEE_DSO_ADVERTISE',
      manage: 'MANAGE',
    });
  }
  static get SurveyBusinessType (): Object {
    return Object.freeze({
      advertiser: 'ADVERTISER',
      agency: 'AGENCY',
      app_developer: 'APP_DEVELOPER',
      publisher: 'PUBLISHER',
    });
  }
  static get PagePermittedTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      create_content: 'CREATE_CONTENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      manage_leads: 'MANAGE_LEADS',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      platform_manage_pages: 'PLATFORM_MANAGE_PAGES',
      platform_pages_manage_instant_articles: 'PLATFORM_PAGES_MANAGE_INSTANT_ARTICLES',
      platform_read_insights: 'PLATFORM_READ_INSIGHTS',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
    });
  }

  createAccessToken (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/access_token',
      fields,
      params,
      Business
    );
  }

  deleteAdAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/ad_accounts',
      params
    );
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

  createAdStudy (fields: Array<string>, params: Object = {}): Promise<AdStudy> {
    return this.createEdge(
      '/ad_studies',
      fields,
      params,
      AdStudy
    );
  }

  createAdAccount (fields: Array<string>, params: Object = {}): Promise<AdAccount> {
    return this.createEdge(
      '/adaccount',
      fields,
      params,
      AdAccount
    );
  }

  createAdAccountCreationRequest (fields: Array<string>, params: Object = {}): Promise<AdAccountCreationRequest> {
    return this.createEdge(
      '/adaccountcreationrequests',
      fields,
      params,
      AdAccountCreationRequest
    );
  }

  getAdNetworkAnalytics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdNetworkAnalyticsSyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics'
    );
  }

  createAdNetworkAnalytic (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/adnetworkanalytics',
      fields,
      params,
      Business
    );
  }

  getAdNetworkAnalyticsResults (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdNetworkAnalyticsAsyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics_results'
    );
  }

  getAdsPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/adspixels'
    );
  }

  createAdsPixel (fields: Array<string>, params: Object = {}): Promise<AdsPixel> {
    return this.createEdge(
      '/adspixels',
      fields,
      params,
      AdsPixel
    );
  }

  getAdvertisableApplications (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAdvertisableApplicationsResult,
      fields,
      params,
      fetchFirstPage,
      '/advertisable_applications'
    );
  }

  deleteAgencies (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  getAnPlacements (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdPlacement,
      fields,
      params,
      fetchFirstPage,
      '/an_placements'
    );
  }

  createBlockListDraft (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/block_list_drafts',
      fields,
      params,
      Business
    );
  }

  getBusinessAssetGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAssetGroup,
      fields,
      params,
      fetchFirstPage,
      '/business_asset_groups'
    );
  }

  getBusinessInvoices (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OracleTransaction,
      fields,
      params,
      fetchFirstPage,
      '/business_invoices'
    );
  }

  getBusinessUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessUser,
      fields,
      params,
      fetchFirstPage,
      '/business_users'
    );
  }

  createBusinessUser (fields: Array<string>, params: Object = {}): Promise<BusinessUser> {
    return this.createEdge(
      '/business_users',
      fields,
      params,
      BusinessUser
    );
  }

  getBusinessProjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessProject,
      fields,
      params,
      fetchFirstPage,
      '/businessprojects'
    );
  }

  createBusinessProject (fields: Array<string>, params: Object = {}): Promise<BusinessProject> {
    return this.createEdge(
      '/businessprojects',
      fields,
      params,
      BusinessProject
    );
  }

  createCatalogSegmentProducerTo (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/catalog_segment_producer_tos',
      fields,
      params,
      Business
    );
  }

  createClaimCustomConversion (fields: Array<string>, params: Object = {}): Promise<CustomConversion> {
    return this.createEdge(
      '/claim_custom_conversions',
      fields,
      params,
      CustomConversion
    );
  }

  getClientAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/client_ad_accounts'
    );
  }

  createClientAdAccount (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/client_ad_accounts',
      fields,
      params,
      Business
    );
  }

  getClientApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/client_apps'
    );
  }

  createClientApp (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/client_apps',
      fields,
      params,
      Business
    );
  }

  getClientPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/client_pages'
    );
  }

  createClientPage (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/client_pages',
      fields,
      params,
      Business
    );
  }

  getClientPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/client_pixels'
    );
  }

  getClientProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/client_product_catalogs'
    );
  }

  deleteClients (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/clients',
      params
    );
  }

  getClients (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/clients'
    );
  }

  getCreativeFolders (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessCreativeFolder,
      fields,
      params,
      fetchFirstPage,
      '/creative_folders'
    );
  }

  createCreativeFolder (fields: Array<string>, params: Object = {}): Promise<BusinessCreativeFolder> {
    return this.createEdge(
      '/creative_folders',
      fields,
      params,
      BusinessCreativeFolder
    );
  }

  getCreatives (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessCreative,
      fields,
      params,
      fetchFirstPage,
      '/creatives'
    );
  }

  getCustomConversions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomConversion,
      fields,
      params,
      fetchFirstPage,
      '/customconversions'
    );
  }

  createCustomConversion (fields: Array<string>, params: Object = {}): Promise<CustomConversion> {
    return this.createEdge(
      '/customconversions',
      fields,
      params,
      CustomConversion
    );
  }

  getDealShowsPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/deal_shows_pages'
    );
  }

  getDirectDeals (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      DirectDeal,
      fields,
      params,
      fetchFirstPage,
      '/direct_deals'
    );
  }

  getEventSourceGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      EventSourceGroup,
      fields,
      params,
      fetchFirstPage,
      '/event_source_groups'
    );
  }

  createEventSourceGroup (fields: Array<string>, params: Object = {}): Promise<EventSourceGroup> {
    return this.createEdge(
      '/event_source_groups',
      fields,
      params,
      EventSourceGroup
    );
  }

  getExtendedCredits (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ExtendedCredit,
      fields,
      params,
      fetchFirstPage,
      '/extendedcredits'
    );
  }

  createImage (fields: Array<string>, params: Object = {}): Promise<BusinessImage> {
    return this.createEdge(
      '/images',
      fields,
      params,
      BusinessImage
    );
  }

  getInitiatedAudienceSharingRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAssetSharingAgreement,
      fields,
      params,
      fetchFirstPage,
      '/initiated_audience_sharing_requests'
    );
  }

  getInitiatedSharingAgreements (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAgreement,
      fields,
      params,
      fetchFirstPage,
      '/initiated_sharing_agreements'
    );
  }

  deleteInstagramAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/instagram_accounts',
      params
    );
  }

  getInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/instagram_accounts'
    );
  }

  createManagedBusiness (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/managed_businesses',
      fields,
      params,
      Business
    );
  }

  createMoveAsset (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/move_asset',
      fields,
      params,
      Business
    );
  }

  getOfflineConversionDataSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OfflineConversionDataSet,
      fields,
      params,
      fetchFirstPage,
      '/offline_conversion_data_sets'
    );
  }

  createOfflineConversionDataSet (fields: Array<string>, params: Object = {}): Promise<OfflineConversionDataSet> {
    return this.createEdge(
      '/offline_conversion_data_sets',
      fields,
      params,
      OfflineConversionDataSet
    );
  }

  getOfflineTermsOfService (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OfflineTermsOfService,
      fields,
      params,
      fetchFirstPage,
      '/offline_terms_of_service'
    );
  }

  getOwnedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/owned_ad_accounts'
    );
  }

  createOwnedAdAccount (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/owned_ad_accounts',
      fields,
      params,
      Business
    );
  }

  getOwnedApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/owned_apps'
    );
  }

  createOwnedApp (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/owned_apps',
      fields,
      params,
      Business
    );
  }

  deleteOwnedBusinesses (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/owned_businesses',
      params
    );
  }

  getOwnedBusinesses (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/owned_businesses'
    );
  }

  createOwnedBusiness (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/owned_businesses',
      fields,
      params,
      Business
    );
  }

  createOwnedDomain (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/owned_domains',
      fields,
      params,
      
    );
  }

  getOwnedInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/owned_instagram_accounts'
    );
  }

  getOwnedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/owned_pages'
    );
  }

  createOwnedPage (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/owned_pages',
      fields,
      params,
      Business
    );
  }

  getOwnedPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/owned_pixels'
    );
  }

  getOwnedProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/owned_product_catalogs'
    );
  }

  createOwnedProductCatalog (fields: Array<string>, params: Object = {}): Promise<ProductCatalog> {
    return this.createEdge(
      '/owned_product_catalogs',
      fields,
      params,
      ProductCatalog
    );
  }

  deletePages (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/pages',
      params
    );
  }

  getPendingClientAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAdAccountRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_client_ad_accounts'
    );
  }

  getPendingClientApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessApplicationRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_client_apps'
    );
  }

  getPendingClientPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessPageRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_client_pages'
    );
  }

  getPendingOfflineConversionDataSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OfflineConversionDataSet,
      fields,
      params,
      fetchFirstPage,
      '/pending_offline_conversion_data_sets'
    );
  }

  getPendingOwnedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAdAccountRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_owned_ad_accounts'
    );
  }

  getPendingOwnedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessPageRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_owned_pages'
    );
  }

  getPendingSharedCreativeFolders (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessCreativeFolder,
      fields,
      params,
      fetchFirstPage,
      '/pending_shared_creative_folders'
    );
  }

  getPendingSharedPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/pending_shared_pixels'
    );
  }

  getPendingUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessRoleRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_users'
    );
  }

  getPicture (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getReceivedAudiencePermissions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AudiencePermission,
      fields,
      params,
      fetchFirstPage,
      '/received_audience_permissions'
    );
  }

  getReceivedAudienceSharingRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAssetSharingAgreement,
      fields,
      params,
      fetchFirstPage,
      '/received_audience_sharing_requests'
    );
  }

  getReceivedInprogressOnBehalfRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessOwnedObjectOnBehalfOfRequest,
      fields,
      params,
      fetchFirstPage,
      '/received_inprogress_onbehalf_requests'
    );
  }

  getReceivedSharingAgreements (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAgreement,
      fields,
      params,
      fetchFirstPage,
      '/received_sharing_agreements'
    );
  }

  getSentInprogressOnBehalfRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessOwnedObjectOnBehalfOfRequest,
      fields,
      params,
      fetchFirstPage,
      '/sent_inprogress_onbehalf_requests'
    );
  }

  createSentInprogressOnBehalfRequest (fields: Array<string>, params: Object = {}): Promise<BusinessOwnedObjectOnBehalfOfRequest> {
    return this.createEdge(
      '/sent_inprogress_onbehalf_requests',
      fields,
      params,
      BusinessOwnedObjectOnBehalfOfRequest
    );
  }

  getSharedAudiencePermissions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AudiencePermission,
      fields,
      params,
      fetchFirstPage,
      '/shared_audience_permissions'
    );
  }

  getSystemUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      SystemUser,
      fields,
      params,
      fetchFirstPage,
      '/system_users'
    );
  }

  createSystemUser (fields: Array<string>, params: Object = {}): Promise<SystemUser> {
    return this.createEdge(
      '/system_users',
      fields,
      params,
      SystemUser
    );
  }

  getThirdPartyMeasurementReportDataset (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ThirdPartyMeasurementReportDataset,
      fields,
      params,
      fetchFirstPage,
      '/third_party_measurement_report_dataset'
    );
  }

  createUploadEvent (fields: Array<string>, params: Object = {}): Promise<MeasurementUploadEvent> {
    return this.createEdge(
      '/upload_event',
      fields,
      params,
      MeasurementUploadEvent
    );
  }

  createVideo (fields: Array<string>, params: Object = {}): Promise<AdVideo> {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Business {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Business {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
