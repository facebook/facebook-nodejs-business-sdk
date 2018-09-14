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
 * BusinessRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      accessor: 'accessor',
      creation_time: 'creation_time',
      id: 'id',
      object_id: 'object_id',
      object_type: 'object_type',
      permitted_tasks: 'permitted_tasks',
      request_status: 'request_status',
      request_type: 'request_type',
      requestor: 'requestor'
    });
  }

  static get ObjectType (): Object {
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

  get (fields, params): BusinessRequest {
    return this.read(
      fields,
      params
    );
  }
}
