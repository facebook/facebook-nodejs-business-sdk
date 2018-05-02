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

/**
 * AdAccountCreationRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountCreationRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_accounts_info: 'ad_accounts_info',
      additional_comment: 'additional_comment',
      address_in_chinese: 'address_in_chinese',
      address_in_english: 'address_in_english',
      advertiser_business: 'advertiser_business',
      appeal_reason: 'appeal_reason',
      business: 'business',
      business_registration_id: 'business_registration_id',
      chinese_legal_entity_name: 'chinese_legal_entity_name',
      contact: 'contact',
      creator: 'creator',
      disapproval_reasons: 'disapproval_reasons',
      english_legal_entity_name: 'english_legal_entity_name',
      extended_credit_id: 'extended_credit_id',
      id: 'id',
      is_smb: 'is_smb',
      is_test: 'is_test',
      is_under_authorization: 'is_under_authorization',
      official_website_url: 'official_website_url',
      planning_agency_business: 'planning_agency_business',
      promotable_app_ids: 'promotable_app_ids',
      promotable_page_ids: 'promotable_page_ids',
      promotable_urls: 'promotable_urls',
      request_change_reasons: 'request_change_reasons',
      status: 'status',
      subvertical: 'subvertical',
      time_created: 'time_created',
      vertical: 'vertical'
    });
  }

  static get Subvertical (): Object {
    return Object.freeze({
      accounting_and_taxes_and_legal: 'ACCOUNTING_AND_TAXES_AND_LEGAL',
      agriculture_and_farming: 'AGRICULTURE_AND_FARMING',
      ecommerce_agriculture_and_farming: 'ECOMMERCE_AGRICULTURE_AND_FARMING',
      air: 'AIR',
      air_freight_or_package: 'AIR_FREIGHT_OR_PACKAGE',
      apparel_and_accessories: 'APPAREL_AND_ACCESSORIES',
      arts: 'ARTS',
      auctions: 'AUCTIONS',
      auto_rental: 'AUTO_RENTAL',
      b2b: 'B2B',
      b2b_manufacturing: 'B2B_MANUFACTURING',
      beauty_and_personal_care: 'BEAUTY_AND_PERSONAL_CARE',
      beer_and_wine_and_liquor: 'BEER_AND_WINE_AND_LIQUOR',
      bookstores: 'BOOKSTORES',
      bus_and_taxi_and_auto_retal: 'BUS_AND_TAXI_AND_AUTO_RETAL',
      business_support_services: 'BUSINESS_SUPPORT_SERVICES',
      cable_and_satellite: 'CABLE_AND_SATELLITE',
      career: 'CAREER',
      computing_and_peripherals: 'COMPUTING_AND_PERIPHERALS',
      console_developer: 'CONSOLE_DEVELOPER',
      console_device: 'CONSOLE_DEVICE',
      construction_and_mining: 'CONSTRUCTION_AND_MINING',
      consulting: 'CONSULTING',
      consumer_electronics: 'CONSUMER_ELECTRONICS',
      consumer_tech: 'CONSUMER_TECH',
      credit_and_financing_and_mortages: 'CREDIT_AND_FINANCING_AND_MORTAGES',
      cruises_and_marine: 'CRUISES_AND_MARINE',
      cvb_convention_and_visitors_bureau: 'CVB_CONVENTION_AND_VISITORS_BUREAU',
      dailydeals: 'DAILYDEALS',
      dating: 'DATING',
      department_store: 'DEPARTMENT_STORE',
      desktop_software: 'DESKTOP_SOFTWARE',
      digital_advertising_and_marketing_or_untagged_agencies: 'DIGITAL_ADVERTISING_AND_MARKETING_OR_UNTAGGED_AGENCIES',
      ecatalog: 'ECATALOG',
      ed_tech: 'ED_TECH',
      education_resources: 'EDUCATION_RESOURCES',
      elearning_and_massive_online_open_courses: 'ELEARNING_AND_MASSIVE_ONLINE_OPEN_COURSES',
      engineering_and_design: 'ENGINEERING_AND_DESIGN',
      events: 'EVENTS',
      family_and_health: 'FAMILY_AND_HEALTH',
      fitness: 'FITNESS',
      food: 'FOOD',
      footwear: 'FOOTWEAR',
      for_profit_colleges_and_universities: 'FOR_PROFIT_COLLEGES_AND_UNIVERSITIES',
      gambling: 'GAMBLING',
      government: 'GOVERNMENT',
      grocery_and_drug_and_convenience: 'GROCERY_AND_DRUG_AND_CONVENIENCE',
      highways: 'HIGHWAYS',
      home_and_office: 'HOME_AND_OFFICE',
      home_improvement: 'HOME_IMPROVEMENT',
      home_service: 'HOME_SERVICE',
      hotel_and_accomodation: 'HOTEL_AND_ACCOMODATION',
      household_goods: 'HOUSEHOLD_GOODS',
      insurance: 'INSURANCE',
      investment_bank_and_brokerage: 'INVESTMENT_BANK_AND_BROKERAGE',
      media: 'MEDIA',
      mobile_and_social: 'MOBILE_AND_SOCIAL',
      mobile_apps: 'MOBILE_APPS',
      movies: 'MOVIES',
      museums_and_parks_and_libraries: 'MUSEUMS_AND_PARKS_AND_LIBRARIES',
      music_and_radio: 'MUSIC_AND_RADIO',
      non_profit: 'NON_PROFIT',
      not_for_profit_colleges_and_universities: 'NOT_FOR_PROFIT_COLLEGES_AND_UNIVERSITIES',
      office: 'OFFICE',
      oil_and_gas_and_consumable_fuel: 'OIL_AND_GAS_AND_CONSUMABLE_FUEL',
      online_or_software: 'ONLINE_OR_SOFTWARE',
      pet: 'PET',
      pet_retail: 'PET_RETAIL',
      pharmaceutical_or_health: 'PHARMACEUTICAL_OR_HEALTH',
      photography_and_filming_services: 'PHOTOGRAPHY_AND_FILMING_SERVICES',
      political: 'POLITICAL',
      pr: 'PR',
      publishing_internet: 'PUBLISHING_INTERNET',
      railroads: 'RAILROADS',
      real_estate: 'REAL_ESTATE',
      real_money_or_skilled_gaming: 'REAL_MONEY_OR_SKILLED_GAMING',
      religious: 'RELIGIOUS',
      restaurant: 'RESTAURANT',
      retail_and_credit_union_and_commercial_bank: 'RETAIL_AND_CREDIT_UNION_AND_COMMERCIAL_BANK',
      school_and_early_children_edcation: 'SCHOOL_AND_EARLY_CHILDREN_EDCATION',
      seasonal_political_spenders: 'SEASONAL_POLITICAL_SPENDERS',
      smb_agents_and_promoters: 'SMB_AGENTS_AND_PROMOTERS',
      smb_artists_and_performers: 'SMB_ARTISTS_AND_PERFORMERS',
      smb_canvas: 'SMB_CANVAS',
      smb_catalog: 'SMB_CATALOG',
      smb_consumer_mobile_device: 'SMB_CONSUMER_MOBILE_DEVICE',
      smb_cross_platform: 'SMB_CROSS_PLATFORM',
      smb_electronics_and_appliances: 'SMB_ELECTRONICS_AND_APPLIANCES',
      smb_energy: 'SMB_ENERGY',
      smb_game_and_toy: 'SMB_GAME_AND_TOY',
      smb_information: 'SMB_INFORMATION',
      smb_navigation_and_measurement: 'SMB_NAVIGATION_AND_MEASUREMENT',
      smb_operations_and_other: 'SMB_OPERATIONS_AND_OTHER',
      smb_other: 'SMB_OTHER',
      smb_personal_care: 'SMB_PERSONAL_CARE',
      smb_religious: 'SMB_RELIGIOUS',
      smb_rentals: 'SMB_RENTALS',
      smb_repair_and_maintenance: 'SMB_REPAIR_AND_MAINTENANCE',
      smb_wireline_services: 'SMB_WIRELINE_SERVICES',
      software: 'SOFTWARE',
      sporting: 'SPORTING',
      sports: 'SPORTS',
      streaming: 'STREAMING',
      television: 'TELEVISION',
      tobacco: 'TOBACCO',
      toy_and_hobby: 'TOY_AND_HOBBY',
      trade_school: 'TRADE_SCHOOL',
      transportation_equipment: 'TRANSPORTATION_EQUIPMENT',
      traval_agency: 'TRAVAL_AGENCY',
      truck_and_moving: 'TRUCK_AND_MOVING',
      utilities_and_energy_equipment_and_services: 'UTILITIES_AND_ENERGY_EQUIPMENT_AND_SERVICES',
      water_and_soft_drink_and_baverage: 'WATER_AND_SOFT_DRINK_AND_BAVERAGE',
      wireless_services: 'WIRELESS_SERVICES'
    });
  }
  static get Vertical (): Object {
    return Object.freeze({
      advertising_and_marketing: 'ADVERTISING_AND_MARKETING',
      auto_agency: 'AUTO_AGENCY',
      consumer_packaged_goods: 'CONSUMER_PACKAGED_GOODS',
      cpg_and_beverage: 'CPG_AND_BEVERAGE',
      ecommerce: 'ECOMMERCE',
      education: 'EDUCATION',
      energy_and_utilities: 'ENERGY_AND_UTILITIES',
      entertainment_and_media: 'ENTERTAINMENT_AND_MEDIA',
      financial_services: 'FINANCIAL_SERVICES',
      gaming: 'GAMING',
      goverment_and_politics: 'GOVERMENT_AND_POLITICS',
      motorcycles: 'MOTORCYCLES',
      organizations_and_associations: 'ORGANIZATIONS_AND_ASSOCIATIONS',
      other: 'OTHER',
      professional_services: 'PROFESSIONAL_SERVICES',
      retail: 'RETAIL',
      technology: 'TECHNOLOGY',
      telecom: 'TELECOM',
      travel: 'TRAVEL'
    });
  }
  static get Status (): Object {
    return Object.freeze({
      pending: 'PENDING',
      under_review: 'UNDER_REVIEW',
      approved: 'APPROVED',
      disapproved: 'DISAPPROVED',
      requested_change: 'REQUESTED_CHANGE',
      cancelled: 'CANCELLED',
      auto_approved: 'AUTO_APPROVED',
      auto_disapproved: 'AUTO_DISAPPROVED',
      appeal_pending: 'APPEAL_PENDING',
      appeal_under_review: 'APPEAL_UNDER_REVIEW',
      appeal_approved: 'APPEAL_APPROVED',
      appeal_disapproved: 'APPEAL_DISAPPROVED'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): AdAccountCreationRequest {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdAccountCreationRequest {
    return super.update(
      params
    );
  }
}
