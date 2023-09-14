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
import BusinessCreativeFolder from './business-creative-folder';
import CreditCard from './credit-card';
import EventSourceGroup from './event-source-group';
import ExtendedCredit from './extended-credit';
import BusinessImage from './business-image';
import BusinessAssetSharingAgreement from './business-asset-sharing-agreement';
import InstagramUser from './instagram-user';
import IGUser from './ig-user';
import OfflineConversionDataSet from './offline-conversion-data-set';
import OpenBridgeConfiguration from './open-bridge-configuration';
import BusinessAdAccountRequest from './business-ad-account-request';
import BusinessApplicationRequest from './business-application-request';
import BusinessPageRequest from './business-page-request';
import BusinessRoleRequest from './business-role-request';
import ProfilePictureSource from './profile-picture-source';
import WhatsAppBusinessPreVerifiedPhoneNumber from './whats-app-business-pre-verified-phone-number';
import SystemUser from './system-user';
import AdVideo from './ad-video';

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
      user_access_expire_time: 'user_access_expire_time',
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
      profile_plus_manage_leads: 'PROFILE_PLUS_MANAGE_LEADS',
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
      profile_plus_manage_leads: 'PROFILE_PLUS_MANAGE_LEADS',
      profile_plus_messaging: 'PROFILE_PLUS_MESSAGING',
      profile_plus_moderate: 'PROFILE_PLUS_MODERATE',
      profile_plus_moderate_delegate_community: 'PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY',
      profile_plus_revenue: 'PROFILE_PLUS_REVENUE',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
    });
  }
  static get SubverticalV2 (): Object {
    return Object.freeze({
      accounting_and_tax: 'ACCOUNTING_AND_TAX',
      activities_and_leisure: 'ACTIVITIES_AND_LEISURE',
      air: 'AIR',
      apparel_and_accessories: 'APPAREL_AND_ACCESSORIES',
      arts_and_heritage_and_education: 'ARTS_AND_HERITAGE_AND_EDUCATION',
      ar_or_vr_gaming: 'AR_OR_VR_GAMING',
      audio_streaming: 'AUDIO_STREAMING',
      auto: 'AUTO',
      auto_insurance: 'AUTO_INSURANCE',
      auto_rental: 'AUTO_RENTAL',
      baby: 'BABY',
      ballot_initiative_or_referendum: 'BALLOT_INITIATIVE_OR_REFERENDUM',
      beauty: 'BEAUTY',
      beauty_and_fashion: 'BEAUTY_AND_FASHION',
      beer_and_wine_and_liquor_and_malt_beverages: 'BEER_AND_WINE_AND_LIQUOR_AND_MALT_BEVERAGES',
      bookstores: 'BOOKSTORES',
      broadcast_television: 'BROADCAST_TELEVISION',
      business_consultants: 'BUSINESS_CONSULTANTS',
      buying_agency: 'BUYING_AGENCY',
      cable_and_satellite: 'CABLE_AND_SATELLITE',
      cable_television: 'CABLE_TELEVISION',
      call_center_and_messaging_services: 'CALL_CENTER_AND_MESSAGING_SERVICES',
      candidate_or_politician: 'CANDIDATE_OR_POLITICIAN',
      career: 'CAREER',
      career_and_tech: 'CAREER_AND_TECH',
      casual_dining: 'CASUAL_DINING',
      chronic_conditions_and_medical_causes: 'CHRONIC_CONDITIONS_AND_MEDICAL_CAUSES',
      civic_influencers: 'CIVIC_INFLUENCERS',
      clinical_trials: 'CLINICAL_TRIALS',
      coffee: 'COFFEE',
      computer_and_software_and_hardware: 'COMPUTER_AND_SOFTWARE_AND_HARDWARE',
      console_and_cross_platform_gaming: 'CONSOLE_AND_CROSS_PLATFORM_GAMING',
      consulting: 'CONSULTING',
      consumer_electronics: 'CONSUMER_ELECTRONICS',
      counseling_and_psychotherapy: 'COUNSELING_AND_PSYCHOTHERAPY',
      creative_agency: 'CREATIVE_AGENCY',
      credit_and_financing_and_mortages: 'CREDIT_AND_FINANCING_AND_MORTAGES',
      cruises_and_marine: 'CRUISES_AND_MARINE',
      culture_and_lifestyle: 'CULTURE_AND_LIFESTYLE',
      data_analytics_and_data_management: 'DATA_ANALYTICS_AND_DATA_MANAGEMENT',
      dating_and_technology_apps: 'DATING_AND_TECHNOLOGY_APPS',
      department_store: 'DEPARTMENT_STORE',
      desktop_software: 'DESKTOP_SOFTWARE',
      dieting_and_fitness_programs: 'DIETING_AND_FITNESS_PROGRAMS',
      digital_native_education_or_training: 'DIGITAL_NATIVE_EDUCATION_OR_TRAINING',
      drinking_places: 'DRINKING_PLACES',
      education_resources: 'EDUCATION_RESOURCES',
      ed_tech: 'ED_TECH',
      elearning_and_massive_online_open_courses: 'ELEARNING_AND_MASSIVE_ONLINE_OPEN_COURSES',
      election_commission: 'ELECTION_COMMISSION',
      electronics_and_appliances: 'ELECTRONICS_AND_APPLIANCES',
      engineering_and_design: 'ENGINEERING_AND_DESIGN',
      environment_and_animal_welfare: 'ENVIRONMENT_AND_ANIMAL_WELFARE',
      esports: 'ESPORTS',
      events: 'EVENTS',
      farming_and_ranching: 'FARMING_AND_RANCHING',
      file_storage_and_cloud_and_data_services: 'FILE_STORAGE_AND_CLOUD_AND_DATA_SERVICES',
      finance: 'FINANCE',
      fin_tech: 'FIN_TECH',
      fishing_and_hunting_and_forestry_and_logging: 'FISHING_AND_HUNTING_AND_FORESTRY_AND_LOGGING',
      fitness: 'FITNESS',
      food: 'FOOD',
      footwear: 'FOOTWEAR',
      for_profit_colleges_and_universities: 'FOR_PROFIT_COLLEGES_AND_UNIVERSITIES',
      full_service_agency: 'FULL_SERVICE_AGENCY',
      government_controlled_entity: 'GOVERNMENT_CONTROLLED_ENTITY',
      government_department_or_agency: 'GOVERNMENT_DEPARTMENT_OR_AGENCY',
      government_official: 'GOVERNMENT_OFFICIAL',
      government_owned_media: 'GOVERNMENT_OWNED_MEDIA',
      grocery_and_drug_and_convenience: 'GROCERY_AND_DRUG_AND_CONVENIENCE',
      head_of_state: 'HEAD_OF_STATE',
      health_insurance: 'HEALTH_INSURANCE',
      health_systems_and_practitioners: 'HEALTH_SYSTEMS_AND_PRACTITIONERS',
      health_tech: 'HEALTH_TECH',
      home_and_furniture_and_office: 'HOME_AND_FURNITURE_AND_OFFICE',
      home_improvement: 'HOME_IMPROVEMENT',
      home_insurance: 'HOME_INSURANCE',
      home_tech: 'HOME_TECH',
      hotel_and_accomodation: 'HOTEL_AND_ACCOMODATION',
      household_goods_durable: 'HOUSEHOLD_GOODS_DURABLE',
      household_goods_non_durable: 'HOUSEHOLD_GOODS_NON_DURABLE',
      hr_and_financial_management: 'HR_AND_FINANCIAL_MANAGEMENT',
      humanitarian_or_disaster_relief: 'HUMANITARIAN_OR_DISASTER_RELIEF',
      independent_expenditure_group: 'INDEPENDENT_EXPENDITURE_GROUP',
      insurance_tech: 'INSURANCE_TECH',
      international_organizaton: 'INTERNATIONAL_ORGANIZATON',
      investment_bank_and_brokerage: 'INVESTMENT_BANK_AND_BROKERAGE',
      issue_advocacy: 'ISSUE_ADVOCACY',
      legal: 'LEGAL',
      life_insurance: 'LIFE_INSURANCE',
      logistics_and_transportation_and_fleet_management: 'LOGISTICS_AND_TRANSPORTATION_AND_FLEET_MANAGEMENT',
      manufacturing: 'MANUFACTURING',
      medical_devices_and_supplies_and_equipment: 'MEDICAL_DEVICES_AND_SUPPLIES_AND_EQUIPMENT',
      medspa_and_elective_surgeries_and_alternative_medicine: 'MEDSPA_AND_ELECTIVE_SURGERIES_AND_ALTERNATIVE_MEDICINE',
      mining_and_quarrying: 'MINING_AND_QUARRYING',
      mobile_gaming: 'MOBILE_GAMING',
      movies: 'MOVIES',
      museums_and_parks_and_libraries: 'MUSEUMS_AND_PARKS_AND_LIBRARIES',
      music: 'MUSIC',
      network_security_products: 'NETWORK_SECURITY_PRODUCTS',
      news_and_current_events: 'NEWS_AND_CURRENT_EVENTS',
      non_prescription: 'NON_PRESCRIPTION',
      not_for_profit_colleges_and_universities: 'NOT_FOR_PROFIT_COLLEGES_AND_UNIVERSITIES',
      office: 'OFFICE',
      office_or_business_supplies: 'OFFICE_OR_BUSINESS_SUPPLIES',
      oil_and_gas_and_consumable_fuel: 'OIL_AND_GAS_AND_CONSUMABLE_FUEL',
      online_only_publications: 'ONLINE_ONLY_PUBLICATIONS',
      package_or_freight_delivery: 'PACKAGE_OR_FREIGHT_DELIVERY',
      party_independent_expenditure_group_us: 'PARTY_INDEPENDENT_EXPENDITURE_GROUP_US',
      payment_processing_and_gateway_solutions: 'PAYMENT_PROCESSING_AND_GATEWAY_SOLUTIONS',
      pc_gaming: 'PC_GAMING',
      people: 'PEOPLE',
      personal_care: 'PERSONAL_CARE',
      pet: 'PET',
      photography_and_filming_services: 'PHOTOGRAPHY_AND_FILMING_SERVICES',
      pizza: 'PIZZA',
      planning_agency: 'PLANNING_AGENCY',
      political_party_or_committee: 'POLITICAL_PARTY_OR_COMMITTEE',
      prescription: 'PRESCRIPTION',
      professional_associations: 'PROFESSIONAL_ASSOCIATIONS',
      property_and_casualty: 'PROPERTY_AND_CASUALTY',
      quick_service: 'QUICK_SERVICE',
      radio: 'RADIO',
      railroads: 'RAILROADS',
      real_estate: 'REAL_ESTATE',
      real_money_gaming: 'REAL_MONEY_GAMING',
      recreational: 'RECREATIONAL',
      religious: 'RELIGIOUS',
      reseller: 'RESELLER',
      residential_and_long_term_care_facilities_and_outpatient_care_centers: 'RESIDENTIAL_AND_LONG_TERM_CARE_FACILITIES_AND_OUTPATIENT_CARE_CENTERS',
      retail_and_credit_union_and_commercial_bank: 'RETAIL_AND_CREDIT_UNION_AND_COMMERCIAL_BANK',
      ride_sharing_or_taxi_services: 'RIDE_SHARING_OR_TAXI_SERVICES',
      safety_services: 'SAFETY_SERVICES',
      scholarly: 'SCHOLARLY',
      school_and_early_children_edcation: 'SCHOOL_AND_EARLY_CHILDREN_EDCATION',
      social_media: 'SOCIAL_MEDIA',
      software_as_a_service: 'SOFTWARE_AS_A_SERVICE',
      sporting: 'SPORTING',
      sporting_and_outdoor: 'SPORTING_AND_OUTDOOR',
      sports: 'SPORTS',
      superstores: 'SUPERSTORES',
      t1_automotive_manufacturer: 'T1_AUTOMOTIVE_MANUFACTURER',
      t1_motorcycle: 'T1_MOTORCYCLE',
      t2_dealer_associations: 'T2_DEALER_ASSOCIATIONS',
      t3_auto_agency: 'T3_AUTO_AGENCY',
      t3_auto_resellers: 'T3_AUTO_RESELLERS',
      t3_dealer_groups: 'T3_DEALER_GROUPS',
      t3_franchise_dealer: 'T3_FRANCHISE_DEALER',
      t3_independent_dealer: 'T3_INDEPENDENT_DEALER',
      t3_parts_and_services: 'T3_PARTS_AND_SERVICES',
      t3_portals: 'T3_PORTALS',
      telecommunications_equipment_and_accessories: 'TELECOMMUNICATIONS_EQUIPMENT_AND_ACCESSORIES',
      telephone_service_providers_and_carriers: 'TELEPHONE_SERVICE_PROVIDERS_AND_CARRIERS',
      ticketing: 'TICKETING',
      tobacco: 'TOBACCO',
      tourism_and_travel_services: 'TOURISM_AND_TRAVEL_SERVICES',
      tourism_board: 'TOURISM_BOARD',
      toy_and_hobby: 'TOY_AND_HOBBY',
      trade_school: 'TRADE_SCHOOL',
      travel_agencies_and_guides_and_otas: 'TRAVEL_AGENCIES_AND_GUIDES_AND_OTAS',
      utilities_and_energy_equipment_and_services: 'UTILITIES_AND_ENERGY_EQUIPMENT_AND_SERVICES',
      veterinary_clinics_and_services: 'VETERINARY_CLINICS_AND_SERVICES',
      video_streaming: 'VIDEO_STREAMING',
      virtual_services: 'VIRTUAL_SERVICES',
      vitamins_or_wellness: 'VITAMINS_OR_WELLNESS',
      warehousing_and_storage: 'WAREHOUSING_AND_STORAGE',
      water_and_soft_drink_and_baverage: 'WATER_AND_SOFT_DRINK_AND_BAVERAGE',
      website_designers_or_graphic_designers: 'WEBSITE_DESIGNERS_OR_GRAPHIC_DESIGNERS',
      wholesale: 'WHOLESALE',
      wireless_services: 'WIRELESS_SERVICES',
    });
  }
  static get VerticalV2 (): Object {
    return Object.freeze({
      advertising_and_marketing: 'ADVERTISING_AND_MARKETING',
      agriculture: 'AGRICULTURE',
      automotive: 'AUTOMOTIVE',
      banking_and_credit_cards: 'BANKING_AND_CREDIT_CARDS',
      business_to_business: 'BUSINESS_TO_BUSINESS',
      consumer_packaged_goods: 'CONSUMER_PACKAGED_GOODS',
      ecommerce: 'ECOMMERCE',
      education: 'EDUCATION',
      energy_and_natural_resources_and_utilities: 'ENERGY_AND_NATURAL_RESOURCES_AND_UTILITIES',
      entertainment_and_media: 'ENTERTAINMENT_AND_MEDIA',
      gaming: 'GAMING',
      government: 'GOVERNMENT',
      healthcare_and_pharmaceuticals_and_biotech: 'HEALTHCARE_AND_PHARMACEUTICALS_AND_BIOTECH',
      insurance: 'INSURANCE',
      non_profit: 'NON_PROFIT',
      organizations_and_associations: 'ORGANIZATIONS_AND_ASSOCIATIONS',
      politics: 'POLITICS',
      professional_services: 'PROFESSIONAL_SERVICES',
      publishing: 'PUBLISHING',
      restaurants: 'RESTAURANTS',
      retail: 'RETAIL',
      technology: 'TECHNOLOGY',
      telecom: 'TELECOM',
      travel: 'TRAVEL',
    });
  }
  static get ActionSource (): Object {
    return Object.freeze({
      physical_store: 'PHYSICAL_STORE',
      website: 'WEBSITE',
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

  createAddPhoneNumber (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/add_phone_numbers',
      fields,
      params,
      Business,
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

  getAdsReportingMmmSchedulers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ads_reporting_mmm_schedulers'
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

  getBusinessProjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/businessprojects'
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

  createCreativeFolder (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessCreativeFolder> {
    return this.createEdge(
      '/creative_folders',
      fields,
      params,
      BusinessCreativeFolder,
      pathOverride,
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

  createImage (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessImage> {
    return this.createEdge(
      '/images',
      fields,
      params,
      BusinessImage,
      pathOverride,
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

  getOpenBridgeConfigurations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OpenBridgeConfiguration,
      fields,
      params,
      fetchFirstPage,
      '/openbridge_configurations'
    );
  }

  createOpenBridgeConfiguration (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<OpenBridgeConfiguration> {
    return this.createEdge(
      '/openbridge_configurations',
      fields,
      params,
      OpenBridgeConfiguration,
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

  getPartnerAccountLinking (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/partner_account_linking'
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

  getPreVerifiedNumbers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      WhatsAppBusinessPreVerifiedPhoneNumber,
      fields,
      params,
      fetchFirstPage,
      '/preverified_numbers'
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

  createSetupManagedPartnerAdAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/setup_managed_partner_adaccounts',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  deleteSharePreVerifiedNumbers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/share_preverified_numbers',
      params
    );
  }

  createSharePreVerifiedNumber (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/share_preverified_numbers',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  createSystemUserAccessToken (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/system_user_access_tokens',
      fields,
      params,
      Business,
      pathOverride,
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

  getThirdPartyMeasurementReportDataset (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/third_party_measurement_report_dataset'
    );
  }

  createVideo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdVideo> {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo,
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
