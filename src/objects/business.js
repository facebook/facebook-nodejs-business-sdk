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
import Application from './application';
import AdNetworkAnalyticsSyncQueryResult from './ad-network-analytics-sync-query-result';
import AdNetworkAnalyticsAsyncQueryResult from './ad-network-analytics-async-query-result';
import AdsPixel from './ads-pixel';
import AdPlacement from './ad-placement';
import BusinessAssetGroup from './business-asset-group';
import OmegaCustomerTrx from './omega-customer-trx';
import BusinessUser from './business-user';
import CustomConversion from './custom-conversion';
import Page from './page';
import ProductCatalog from './product-catalog';
import WhatsAppBusinessAccount from './whats-app-business-account';
import CPASCollaborationRequest from './cpas-collaboration-request';
import CPASAdvertiserPartnershipRecommendation from './cpas-advertiser-partnership-recommendation';
import CommerceMerchantSettings from './commerce-merchant-settings';
import CPASBusinessSetupConfig from './cpas-business-setup-config';
import CPASMerchantConfig from './cpas-merchant-config';
import CreditCard from './credit-card';
import EventSourceGroup from './event-source-group';
import ExtendedCredit from './extended-credit';
import BusinessAssetSharingAgreement from './business-asset-sharing-agreement';
import InstagramUser from './instagram-user';
import IGUser from './ig-user';
import OfflineConversionDataSet from './offline-conversion-data-set';
import BusinessAdAccountRequest from './business-ad-account-request';
import BusinessApplicationRequest from './business-application-request';
import BusinessPageRequest from './business-page-request';
import BusinessRoleRequest from './business-role-request';
import ProfilePictureSource from './profile-picture-source';
import SystemUser from './system-user';

/**
 * Business
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Business extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      block_offline_analytics: 'block_offline_analytics',
      collaborative_ads_managed_partner_business_info: 'collaborative_ads_managed_partner_business_info',
      collaborative_ads_managed_partner_eligibility: 'collaborative_ads_managed_partner_eligibility',
      collaborative_ads_partner_premium_options: 'collaborative_ads_partner_premium_options',
      created_by: 'created_by',
      created_time: 'created_time',
      extended_updated_time: 'extended_updated_time',
      id: 'id',
      is_hidden: 'is_hidden',
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
      cashier_role: 'CASHIER_ROLE',
      create_content: 'CREATE_CONTENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      manage_leads: 'MANAGE_LEADS',
      messaging: 'MESSAGING',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      profile_plus_advertise: 'PROFILE_PLUS_ADVERTISE',
      profile_plus_analyze: 'PROFILE_PLUS_ANALYZE',
      profile_plus_create_content: 'PROFILE_PLUS_CREATE_CONTENT',
      profile_plus_facebook_access: 'PROFILE_PLUS_FACEBOOK_ACCESS',
      profile_plus_full_control: 'PROFILE_PLUS_FULL_CONTROL',
      profile_plus_manage: 'PROFILE_PLUS_MANAGE',
      profile_plus_messaging: 'PROFILE_PLUS_MESSAGING',
      profile_plus_moderate: 'PROFILE_PLUS_MODERATE',
      profile_plus_moderate_delegate_community: 'PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY',
      profile_plus_revenue: 'PROFILE_PLUS_REVENUE',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
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
      cashier_role: 'CASHIER_ROLE',
      create_content: 'CREATE_CONTENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      manage_leads: 'MANAGE_LEADS',
      messaging: 'MESSAGING',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      profile_plus_advertise: 'PROFILE_PLUS_ADVERTISE',
      profile_plus_analyze: 'PROFILE_PLUS_ANALYZE',
      profile_plus_create_content: 'PROFILE_PLUS_CREATE_CONTENT',
      profile_plus_facebook_access: 'PROFILE_PLUS_FACEBOOK_ACCESS',
      profile_plus_full_control: 'PROFILE_PLUS_FULL_CONTROL',
      profile_plus_manage: 'PROFILE_PLUS_MANAGE',
      profile_plus_messaging: 'PROFILE_PLUS_MESSAGING',
      profile_plus_moderate: 'PROFILE_PLUS_MODERATE',
      profile_plus_moderate_delegate_community: 'PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY',
      profile_plus_revenue: 'PROFILE_PLUS_REVENUE',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
    });
  }

  createAccessToken (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/access_token',
      fields,
      params,
      Business,
      pathOverride,
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

  createAdStudy (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdStudy> {
    return this.createEdge(
      '/ad_studies',
      fields,
      params,
      AdStudy,
      pathOverride,
    );
  }

  createAdAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdAccount> {
    return this.createEdge(
      '/adaccount',
      fields,
      params,
      AdAccount,
      pathOverride,
    );
  }

  createAdNetworkApplication (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Application> {
    return this.createEdge(
      '/adnetwork_applications',
      fields,
      params,
      Application,
      pathOverride,
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

  createAdNetworkAnalytic (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/adnetworkanalytics',
      fields,
      params,
      Business,
      pathOverride,
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

  getAdsReportingMmmReports (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ads_reporting_mmm_reports'
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

  createAdsPixel (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdsPixel> {
    return this.createEdge(
      '/adspixels',
      fields,
      params,
      AdsPixel,
      pathOverride,
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

  createBlockListDraft (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/block_list_drafts',
      fields,
      params,
      Business,
      pathOverride,
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
      OmegaCustomerTrx,
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

  createBusinessUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessUser> {
    return this.createEdge(
      '/business_users',
      fields,
      params,
      BusinessUser,
      pathOverride,
    );
  }

  createClaimCustomConversion (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CustomConversion> {
    return this.createEdge(
      '/claim_custom_conversions',
      fields,
      params,
      CustomConversion,
      pathOverride,
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

  getClientApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/client_apps'
    );
  }

  createClientApp (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/client_apps',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getClientOffsiteSignalContainerBusinessObjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/client_offsite_signal_container_business_objects'
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

  createClientPage (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/client_pages',
      fields,
      params,
      Business,
      pathOverride,
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

  getClientWhatsAppBusinessAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      WhatsAppBusinessAccount,
      fields,
      params,
      fetchFirstPage,
      '/client_whatsapp_business_accounts'
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

  getCollaborativeAdsCollaborationRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CPASCollaborationRequest,
      fields,
      params,
      fetchFirstPage,
      '/collaborative_ads_collaboration_requests'
    );
  }

  createCollaborativeAdsCollaborationRequest (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CPASCollaborationRequest> {
    return this.createEdge(
      '/collaborative_ads_collaboration_requests',
      fields,
      params,
      CPASCollaborationRequest,
      pathOverride,
    );
  }

  getCollaborativeAdsSuggestedPartners (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CPASAdvertiserPartnershipRecommendation,
      fields,
      params,
      fetchFirstPage,
      '/collaborative_ads_suggested_partners'
    );
  }

  getCommerceMerchantSettings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommerceMerchantSettings,
      fields,
      params,
      fetchFirstPage,
      '/commerce_merchant_settings'
    );
  }

  getCpasBusinessSetupConfig (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CPASBusinessSetupConfig,
      fields,
      params,
      fetchFirstPage,
      '/cpas_business_setup_config'
    );
  }

  createCpasBusinessSetupConfig (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CPASBusinessSetupConfig> {
    return this.createEdge(
      '/cpas_business_setup_config',
      fields,
      params,
      CPASBusinessSetupConfig,
      pathOverride,
    );
  }

  getCpasMerchantConfig (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CPASMerchantConfig,
      fields,
      params,
      fetchFirstPage,
      '/cpas_merchant_config'
    );
  }

  getCreditCards (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CreditCard,
      fields,
      params,
      fetchFirstPage,
      '/creditcards'
    );
  }

  createCustomConversion (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CustomConversion> {
    return this.createEdge(
      '/customconversions',
      fields,
      params,
      CustomConversion,
      pathOverride,
    );
  }

  createDraftNegativeKeywordList (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/draft_negative_keyword_lists',
      fields,
      params,
      null,
      pathOverride,
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

  createEventSourceGroup (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<EventSourceGroup> {
    return this.createEdge(
      '/event_source_groups',
      fields,
      params,
      EventSourceGroup,
      pathOverride,
    );
  }

  getExtendedCreditApplications (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/extendedcreditapplications'
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

  getInitiatedAudienceSharingRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAssetSharingAgreement,
      fields,
      params,
      fetchFirstPage,
      '/initiated_audience_sharing_requests'
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

  getInstagramBusinessAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGUser,
      fields,
      params,
      fetchFirstPage,
      '/instagram_business_accounts'
    );
  }

  deleteManagedBusinesses (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/managed_businesses',
      params
    );
  }

  createManagedBusiness (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/managed_businesses',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  createManagedPartnerBusinessSetup (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/managed_partner_business_setup',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  deleteManagedPartnerBusinesses (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/managed_partner_businesses',
      params
    );
  }

  createManagedPartnerBusiness (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/managed_partner_businesses',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  createManagedPartnerChildBusinessAsset (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/managed_partner_child_business_assets',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getNegativeKeywordLists (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/negative_keyword_lists'
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

  createOfflineConversionDataSet (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<OfflineConversionDataSet> {
    return this.createEdge(
      '/offline_conversion_data_sets',
      fields,
      params,
      OfflineConversionDataSet,
      pathOverride,
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

  createOwnedAdAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/owned_ad_accounts',
      fields,
      params,
      Business,
      pathOverride,
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

  createOwnedApp (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/owned_apps',
      fields,
      params,
      Business,
      pathOverride,
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

  createOwnedBusiness (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/owned_businesses',
      fields,
      params,
      Business,
      pathOverride,
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

  getOwnedOffsiteSignalContainerBusinessObjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/owned_offsite_signal_container_business_objects'
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

  createOwnedPage (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/owned_pages',
      fields,
      params,
      Business,
      pathOverride,
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

  createOwnedProductCatalog (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalog> {
    return this.createEdge(
      '/owned_product_catalogs',
      fields,
      params,
      ProductCatalog,
      pathOverride,
    );
  }

  getOwnedWhatsAppBusinessAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      WhatsAppBusinessAccount,
      fields,
      params,
      fetchFirstPage,
      '/owned_whatsapp_business_accounts'
    );
  }

  deletePages (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/pages',
      params
    );
  }

  createPartnerPremiumOption (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/partner_premium_options',
      fields,
      params,
      null,
      pathOverride,
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

  getPendingSharedOffsiteSignalContainerBusinessObjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/pending_shared_offsite_signal_container_business_objects'
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

  createPixelTo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/pixel_tos',
      fields,
      params,
      null,
      pathOverride,
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

  getSystemUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      SystemUser,
      fields,
      params,
      fetchFirstPage,
      '/system_users'
    );
  }

  createSystemUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<SystemUser> {
    return this.createEdge(
      '/system_users',
      fields,
      params,
      SystemUser,
      pathOverride,
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
