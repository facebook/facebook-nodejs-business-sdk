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
 * CustomAudienceDataSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceDataSource extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_params: 'creation_params',
      sub_type: 'sub_type',
      type: 'type'
    });
  }

  static get SubType (): Object {
    return Object.freeze({
      anything: 'ANYTHING',
      nothing: 'NOTHING',
      hashes: 'HASHES',
      user_ids: 'USER_IDS',
      hashes_or_user_ids: 'HASHES_OR_USER_IDS',
      mobile_advertiser_ids: 'MOBILE_ADVERTISER_IDS',
      external_ids: 'EXTERNAL_IDS',
      multi_hashes: 'MULTI_HASHES',
      tokens: 'TOKENS',
      external_ids_mix: 'EXTERNAL_IDS_MIX',
      household_expansion: 'HOUSEHOLD_EXPANSION',
      web_pixel_hits: 'WEB_PIXEL_HITS',
      mobile_app_events: 'MOBILE_APP_EVENTS',
      mobile_app_combination_events: 'MOBILE_APP_COMBINATION_EVENTS',
      video_events: 'VIDEO_EVENTS',
      web_pixel_combination_events: 'WEB_PIXEL_COMBINATION_EVENTS',
      platform: 'PLATFORM',
      multi_data_events: 'MULTI_DATA_EVENTS',
      ig_business_events: 'IG_BUSINESS_EVENTS',
      store_visit_events: 'STORE_VISIT_EVENTS',
      instant_article_events: 'INSTANT_ARTICLE_EVENTS',
      fb_event_signals: 'FB_EVENT_SIGNALS',
      engagement_event_users: 'ENGAGEMENT_EVENT_USERS',
      custom_audience_users: 'CUSTOM_AUDIENCE_USERS',
      page_fans: 'PAGE_FANS',
      conversion_pixel_hits: 'CONVERSION_PIXEL_HITS',
      app_users: 'APP_USERS',
      s_expr: 'S_EXPR',
      dynamic_rule: 'DYNAMIC_RULE',
      campaign_conversions: 'CAMPAIGN_CONVERSIONS',
      web_pixel_hits_custom_audience_users: 'WEB_PIXEL_HITS_CUSTOM_AUDIENCE_USERS',
      mobile_app_custom_audience_users: 'MOBILE_APP_CUSTOM_AUDIENCE_USERS',
      combination_custom_audience_users: 'COMBINATION_CUSTOM_AUDIENCE_USERS',
      video_event_users: 'VIDEO_EVENT_USERS',
      fb_pixel_hits: 'FB_PIXEL_HITS',
      ig_promoted_post: 'IG_PROMOTED_POST',
      place_visits: 'PLACE_VISITS',
      offline_event_users: 'OFFLINE_EVENT_USERS',
      expanded_audience: 'EXPANDED_AUDIENCE',
      seed_list: 'SEED_LIST',
      partner_category_users: 'PARTNER_CATEGORY_USERS',
      page_smart_audience: 'PAGE_SMART_AUDIENCE',
      multicountry_combination: 'MULTICOUNTRY_COMBINATION',
      platform_users: 'PLATFORM_USERS',
      multi_event_source: 'MULTI_EVENT_SOURCE',
      smart_audience: 'SMART_AUDIENCE',
      mail_chimp_email_hashes: 'MAIL_CHIMP_EMAIL_HASHES',
      constant_contacts_email_hashes: 'CONSTANT_CONTACTS_EMAIL_HASHES',
      copy_paste_email_hashes: 'COPY_PASTE_EMAIL_HASHES',
      contact_importer: 'CONTACT_IMPORTER',
      data_file: 'DATA_FILE'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      unknown: 'UNKNOWN',
      file_imported: 'FILE_IMPORTED',
      event_based: 'EVENT_BASED',
      seed_based: 'SEED_BASED',
      third_party_imported: 'THIRD_PARTY_IMPORTED',
      copy_paste: 'COPY_PASTE',
      contact_importer: 'CONTACT_IMPORTER',
      household_audience: 'HOUSEHOLD_AUDIENCE'
    });
  }
}
