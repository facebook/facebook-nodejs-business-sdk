/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * BusinessObject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessObject extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      asset: 'asset',
      asset_type: 'asset_type',
      id: 'id',
      name: 'name',
      picture: 'picture'
    });
  }

  static get Type (): Object {
    return Object.freeze({
      page: 'page',
      ad_account: 'ad-account',
      product_catalog: 'product-catalog',
      app: 'app',
      pixel: 'pixel',
      system_user: 'system-user',
      brand: 'brand',
      user: 'user',
      project: 'project',
      instagram_account: 'instagram-account',
      atlas_advertiser: 'atlas-advertiser',
      funding_source: 'funding-source',
      legacy_login: 'legacy-login',
      business_request: 'business_request',
      example_cat: 'example-cat',
      monetization_property: 'monetization-property',
      grp_plan: 'grp-plan',
      persona: 'persona',
      credit_partition: 'credit-partition',
      payout_method: 'payout-method',
      ad_study: 'ad-study',
      saved_audience: 'saved-audience',
      shared_audience: 'shared-audience',
      shared_platform_audience: 'shared-platform-audience',
      event_source_group: 'event-source-group',
      offline_event_set: 'offline-event-set',
      ad_image: 'ad-image',
      photo: 'photo',
      block_list: 'block-list',
      finance: 'finance',
      ip: 'ip',
      credit_partition_config: 'credit-partition-config',
      video_asset: 'video-asset',
      business_unit: 'business-unit',
      page_locations: 'page-locations',
      ad_account_creation_request: 'ad-account-creation-request',
      reseller_vetting_oe_request: 'reseller_vetting_oe_request',
      registered_trademark: 'registered-trademark',
      custom_conversion: 'custom-conversion',
      leads_access: 'leads-access',
      spaco_ds_data_collection: 'spaco-ds-data-collection',
      owned_domain: 'owned-domain',
      whatsapp_business_account: 'whatsapp-business-account',
      business_resource_group: 'business-resource-group',
      hotel_price_fetcher_pull_config: 'hotel-price-fetcher-pull-config',
      news_page: 'news-page',
      place_page_set: 'place_page_set',
      business_locations_wrapper: 'business-locations-wrapper'
    });
  }
  static get AssetType (): Object {
    return Object.freeze({
      page: 'PAGE',
      ad_account: 'AD_ACCOUNT',
      product_catalog: 'PRODUCT_CATALOG',
      app: 'APP',
      pixel: 'PIXEL',
      system_user: 'SYSTEM_USER',
      brand: 'BRAND',
      user: 'USER',
      project: 'PROJECT',
      instagram_account: 'INSTAGRAM_ACCOUNT',
      atlas_advertiser: 'ATLAS_ADVERTISER',
      funding_source: 'FUNDING_SOURCE',
      legacy_login: 'LEGACY_LOGIN',
      business_request: 'BUSINESS_REQUEST',
      example_cat: 'EXAMPLE_CAT',
      monetization_property: 'MONETIZATION_PROPERTY',
      grp_plan: 'GRP_PLAN',
      persona: 'PERSONA',
      credit_partition: 'CREDIT_PARTITION',
      payout_account: 'PAYOUT_ACCOUNT',
      ad_study: 'AD_STUDY',
      saved_audience: 'SAVED_AUDIENCE',
      custom_audience: 'CUSTOM_AUDIENCE',
      platform_custom_audience: 'PLATFORM_CUSTOM_AUDIENCE',
      event_source_group: 'EVENT_SOURCE_GROUP',
      offline_conversion_data_set: 'OFFLINE_CONVERSION_DATA_SET',
      ad_image: 'AD_IMAGE',
      photo: 'PHOTO',
      block_list: 'BLOCK_LIST',
      finance: 'FINANCE',
      ip: 'IP',
      credit_partition_config: 'CREDIT_PARTITION_CONFIG',
      video_asset: 'VIDEO_ASSET',
      business_unit: 'BUSINESS_UNIT',
      page_for_locations: 'PAGE_FOR_LOCATIONS',
      ad_account_creation_request: 'AD_ACCOUNT_CREATION_REQUEST',
      reseller_vetting_oe_request: 'RESELLER_VETTING_OE_REQUEST',
      registered_trademark: 'REGISTERED_TRADEMARK',
      custom_conversion: 'CUSTOM_CONVERSION',
      leads_access: 'LEADS_ACCESS',
      spaco_ds_data_collection: 'SPACO_DS_DATA_COLLECTION',
      owned_domain: 'OWNED_DOMAIN',
      whatsapp_business_account: 'WHATSAPP_BUSINESS_ACCOUNT',
      business_resource_group: 'BUSINESS_RESOURCE_GROUP',
      hotel_price_fetcher_pull_config: 'HOTEL_PRICE_FETCHER_PULL_CONFIG',
      news_page: 'NEWS_PAGE',
      place_page_set: 'PLACE_PAGE_SET',
      business_locations_wrapper: 'BUSINESS_LOCATIONS_WRAPPER'
    });
  }
  static get Types (): Object {
    return Object.freeze({
      custom_audience: 'custom_audience',
      saved_audience: 'saved_audience'
    });
  }

  get (fields, params): BusinessObject {
    return this.read(
      fields,
      params
    );
  }
}
