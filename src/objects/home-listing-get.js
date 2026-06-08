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

/**
 * HomeListingGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HomeListingGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ac_type: 'ac_type',
      additional_fees_description: 'additional_fees_description',
      address: 'address',
      agent_company: 'agent_company',
      agent_email: 'agent_email',
      agent_fb_page_id: 'agent_fb_page_id',
      agent_name: 'agent_name',
      agent_phone: 'agent_phone',
      applinks: 'applinks',
      area_size: 'area_size',
      area_unit: 'area_unit',
      availability: 'availability',
      capabilities: 'capabilities',
      capabilities_disabled_by_user: 'capabilities_disabled_by_user',
      capabilities_rendering_catalog_manager: 'capabilities_rendering_catalog_manager',
      capability_to_rejection_reason: 'capability_to_rejection_reason',
      catalog_item_overrides: 'catalog_item_overrides',
      channels_to_integrity_status: 'channels_to_integrity_status',
      co_2_emission_rating_eu: 'co_2_emission_rating_eu',
      currency: 'currency',
      custom_label_0: 'custom_label_0',
      custom_label_1: 'custom_label_1',
      custom_label_2: 'custom_label_2',
      custom_label_3: 'custom_label_3',
      custom_label_4: 'custom_label_4',
      custom_number_0: 'custom_number_0',
      custom_number_1: 'custom_number_1',
      custom_number_2: 'custom_number_2',
      custom_number_3: 'custom_number_3',
      custom_number_4: 'custom_number_4',
      days_on_market: 'days_on_market',
      description: 'description',
      enabled_capability_to_review_status: 'enabled_capability_to_review_status',
      energy_rating_eu: 'energy_rating_eu',
      furnish_type: 'furnish_type',
      group_id: 'group_id',
      heating_type: 'heating_type',
      home_listing_id: 'home_listing_id',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      is_blackholed: 'is_blackholed',
      laundry_type: 'laundry_type',
      listing_type: 'listing_type',
      max_currency: 'max_currency',
      max_price: 'max_price',
      min_currency: 'min_currency',
      min_price: 'min_price',
      name: 'name',
      num_baths: 'num_baths',
      num_beds: 'num_beds',
      num_rooms: 'num_rooms',
      num_units: 'num_units',
      override_details: 'override_details',
      parking_type: 'parking_type',
      partner_verification: 'partner_verification',
      pet_policy: 'pet_policy',
      price: 'price',
      product_feed: 'product_feed',
      property_type: 'property_type',
      sanitized_images: 'sanitized_images',
      sanitized_previews: 'sanitized_previews',
      securitydeposit_currency: 'securitydeposit_currency',
      securitydeposit_price: 'securitydeposit_price',
      tags: 'tags',
      unit_price: 'unit_price',
      url: 'url',
      url_shimmed: 'url_shimmed',
      validation_errors: 'validation_errors',
      videos_metadata: 'videos_metadata',
      visibility: 'visibility',
      year_built: 'year_built',
    });
  }

  static get AcType (): Object {
    return Object.freeze({
      central: 'CENTRAL',
      empty_value: 'EMPTY_VALUE',
      none: 'NONE',
      other: 'OTHER',
    });
  }
  static get AreaUnit (): Object {
    return Object.freeze({
      empty_value: 'EMPTY_VALUE',
      sqft: 'SQFT',
      sqm: 'SQM',
    });
  }
  static get Availability (): Object {
    return Object.freeze({
      available_soon: 'AVAILABLE_SOON',
      for_rent: 'FOR_RENT',
      for_sale: 'FOR_SALE',
      off_market: 'OFF_MARKET',
      recently_sold: 'RECENTLY_SOLD',
      sale_pending: 'SALE_PENDING',
    });
  }
  static get Capabilities (): Object {
    return Object.freeze({
      b2c_marketplace: 'B2C_MARKETPLACE',
      biz_msg_ai_agent: 'BIZ_MSG_AI_AGENT',
      business_inbox_in_messenger: 'BUSINESS_INBOX_IN_MESSENGER',
      buy_on_facebook: 'BUY_ON_FACEBOOK',
      c2c_marketplace: 'C2C_MARKETPLACE',
      cpas_parent_catalog: 'CPAS_PARENT_CATALOG',
      da: 'DA',
      daily_deals: 'DAILY_DEALS',
      daily_deals_legacy: 'DAILY_DEALS_LEGACY',
      event: 'EVENT',
      event_deprecated: 'EVENT_DEPRECATED',
      groups: 'GROUPS',
      ig_onsite_shopping: 'IG_ONSITE_SHOPPING',
      ig_product_tagging: 'IG_PRODUCT_TAGGING',
      ldp: 'LDP',
      marketplace: 'MARKETPLACE',
      marketplace_ads_deprecated: 'MARKETPLACE_ADS_DEPRECATED',
      marketplace_home_rentals: 'MARKETPLACE_HOME_RENTALS',
      marketplace_home_sales: 'MARKETPLACE_HOME_SALES',
      marketplace_motors: 'MARKETPLACE_MOTORS',
      marketplace_shops: 'MARKETPLACE_SHOPS',
      mini_shops: 'MINI_SHOPS',
      neighborhoods: 'NEIGHBORHOODS',
      offline_conversions: 'OFFLINE_CONVERSIONS',
      profile: 'PROFILE',
      service: 'SERVICE',
      shops: 'SHOPS',
      test_capability: 'TEST_CAPABILITY',
      universal_checkout: 'UNIVERSAL_CHECKOUT',
      us_marketplace: 'US_MARKETPLACE',
      whatsapp: 'WHATSAPP',
      whatsapp_marketing_message: 'WHATSAPP_MARKETING_MESSAGE',
    });
  }
  static get CapabilitiesRenderingCatalogManager (): Object {
    return Object.freeze({
      b2c_marketplace: 'B2C_MARKETPLACE',
      biz_msg_ai_agent: 'BIZ_MSG_AI_AGENT',
      business_inbox_in_messenger: 'BUSINESS_INBOX_IN_MESSENGER',
      buy_on_facebook: 'BUY_ON_FACEBOOK',
      c2c_marketplace: 'C2C_MARKETPLACE',
      cpas_parent_catalog: 'CPAS_PARENT_CATALOG',
      da: 'DA',
      daily_deals: 'DAILY_DEALS',
      daily_deals_legacy: 'DAILY_DEALS_LEGACY',
      event: 'EVENT',
      event_deprecated: 'EVENT_DEPRECATED',
      groups: 'GROUPS',
      ig_onsite_shopping: 'IG_ONSITE_SHOPPING',
      ig_product_tagging: 'IG_PRODUCT_TAGGING',
      ldp: 'LDP',
      marketplace: 'MARKETPLACE',
      marketplace_ads_deprecated: 'MARKETPLACE_ADS_DEPRECATED',
      marketplace_home_rentals: 'MARKETPLACE_HOME_RENTALS',
      marketplace_home_sales: 'MARKETPLACE_HOME_SALES',
      marketplace_motors: 'MARKETPLACE_MOTORS',
      marketplace_shops: 'MARKETPLACE_SHOPS',
      mini_shops: 'MINI_SHOPS',
      neighborhoods: 'NEIGHBORHOODS',
      offline_conversions: 'OFFLINE_CONVERSIONS',
      profile: 'PROFILE',
      service: 'SERVICE',
      shops: 'SHOPS',
      test_capability: 'TEST_CAPABILITY',
      universal_checkout: 'UNIVERSAL_CHECKOUT',
      us_marketplace: 'US_MARKETPLACE',
      whatsapp: 'WHATSAPP',
      whatsapp_marketing_message: 'WHATSAPP_MARKETING_MESSAGE',
    });
  }
  static get FurnishType (): Object {
    return Object.freeze({
      empty_value: 'EMPTY_VALUE',
      furnished: 'FURNISHED',
      semifurnished: 'SEMIFURNISHED',
      unfurnished: 'UNFURNISHED',
    });
  }
  static get HeatingType (): Object {
    return Object.freeze({
      central: 'CENTRAL',
      electric: 'ELECTRIC',
      empty_value: 'EMPTY_VALUE',
      gas: 'GAS',
      none: 'NONE',
      other: 'OTHER',
      radiator: 'RADIATOR',
    });
  }
  static get ImageFetchStatus (): Object {
    return Object.freeze({
      direct_upload: 'DIRECT_UPLOAD',
      fetched: 'FETCHED',
      fetch_failed: 'FETCH_FAILED',
      no_status: 'NO_STATUS',
      outdated: 'OUTDATED',
      partial_fetch: 'PARTIAL_FETCH',
    });
  }
  static get LaundryType (): Object {
    return Object.freeze({
      empty_value: 'EMPTY_VALUE',
      in_building: 'IN_BUILDING',
      in_unit: 'IN_UNIT',
      none: 'NONE',
      other: 'OTHER',
    });
  }
  static get ListingType (): Object {
    return Object.freeze({
      empty_value: 'EMPTY_VALUE',
      foreclosed: 'FORECLOSED',
      for_rent_by_agent: 'FOR_RENT_BY_AGENT',
      for_rent_by_owner: 'FOR_RENT_BY_OWNER',
      for_sale_by_agent: 'FOR_SALE_BY_AGENT',
      for_sale_by_owner: 'FOR_SALE_BY_OWNER',
      new_construction: 'NEW_CONSTRUCTION',
      new_listing: 'NEW_LISTING',
      other: 'OTHER',
    });
  }
  static get ParkingType (): Object {
    return Object.freeze({
      empty_value: 'EMPTY_VALUE',
      garage: 'GARAGE',
      none: 'NONE',
      off_street: 'OFF_STREET',
      other: 'OTHER',
      street: 'STREET',
    });
  }
  static get PartnerVerification (): Object {
    return Object.freeze({
      empty_value: 'EMPTY_VALUE',
      none: 'NONE',
      verified: 'VERIFIED',
    });
  }
  static get PropertyType (): Object {
    return Object.freeze({
      apartment: 'APARTMENT',
      apartment_room: 'APARTMENT_ROOM',
      builder_floor: 'BUILDER_FLOOR',
      bungalow: 'BUNGALOW',
      condo: 'CONDO',
      condo_room: 'CONDO_ROOM',
      empty_value: 'EMPTY_VALUE',
      house: 'HOUSE',
      house_in_condominium: 'HOUSE_IN_CONDOMINIUM',
      house_in_villa: 'HOUSE_IN_VILLA',
      house_room: 'HOUSE_ROOM',
      land: 'LAND',
      loft: 'LOFT',
      manufactured: 'MANUFACTURED',
      other: 'OTHER',
      other_room: 'OTHER_ROOM',
      penthouse: 'PENTHOUSE',
      single_family_home: 'SINGLE_FAMILY_HOME',
      studio: 'STUDIO',
      townhouse: 'TOWNHOUSE',
      townhouse_room: 'TOWNHOUSE_ROOM',
    });
  }
  static get Visibility (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      hidden: 'HIDDEN',
      legacy_public: 'LEGACY_PUBLIC',
      published: 'PUBLISHED',
      staging: 'STAGING',
      visible_only_with_overrides: 'VISIBLE_ONLY_WITH_OVERRIDES',
      whitelist_only: 'WHITELIST_ONLY',
    });
  }
}
