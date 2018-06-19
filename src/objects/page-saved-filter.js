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
 * PageSavedFilter
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageSavedFilter extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      display_name: 'display_name',
      filters: 'filters',
      id: 'id',
      page_id: 'page_id',
      section: 'section',
      time_created: 'time_created',
      time_updated: 'time_updated'
    });
  }

  static get Section (): Object {
    return Object.freeze({
      audience_alerts: 'AUDIENCE_ALERTS',
      chex_pending_orders: 'CHEX_PENDING_ORDERS',
      chex_completed_orders: 'CHEX_COMPLETED_ORDERS',
      commerce_platform_settings: 'COMMERCE_PLATFORM_SETTINGS',
      commerce_products: 'COMMERCE_PRODUCTS',
      commerce_collections: 'COMMERCE_COLLECTIONS',
      commerce_pending_orders: 'COMMERCE_PENDING_ORDERS',
      commerce_past_orders: 'COMMERCE_PAST_ORDERS',
      commerce_discount_codes: 'COMMERCE_DISCOUNT_CODES',
      commerce_merchant_settings: 'COMMERCE_MERCHANT_SETTINGS',
      commerce_shop_link: 'COMMERCE_SHOP_LINK',
      donations_settings: 'DONATIONS_SETTINGS',
      drafts: 'DRAFTS',
      reward_program: 'REWARD_PROGRAM',
      expired_posts: 'EXPIRED_POSTS',
      expiring_posts: 'EXPIRING_POSTS',
      instant_articles: 'INSTANT_ARTICLES',
      instant_articles_development: 'INSTANT_ARTICLES_DEVELOPMENT',
      instant_articles_monetization: 'INSTANT_ARTICLES_MONETIZATION',
      instant_articles_sample: 'INSTANT_ARTICLES_SAMPLE',
      instant_articles_settings: 'INSTANT_ARTICLES_SETTINGS',
      instant_articles_sign_up: 'INSTANT_ARTICLES_SIGN_UP',
      instant_articles_cta_management: 'INSTANT_ARTICLES_CTA_MANAGEMENT',
      instant_articles_traffic_lift: 'INSTANT_ARTICLES_TRAFFIC_LIFT',
      invoices_active: 'INVOICES_ACTIVE',
      invoices_history: 'INVOICES_HISTORY',
      lead_ads_draft_forms: 'LEAD_ADS_DRAFT_FORMS',
      lead_ads_forms: 'LEAD_ADS_FORMS',
      lead_ads_crm_setup: 'LEAD_ADS_CRM_SETUP',
      lead_ads_custom_crm_setup: 'LEAD_ADS_CUSTOM_CRM_SETUP',
      published_posts: 'PUBLISHED_POSTS',
      scheduled_posts: 'SCHEDULED_POSTS',
      ads_posts: 'ADS_POSTS',
      videos: 'VIDEOS',
      job_posts: 'JOB_POSTS',
      new_matches: 'NEW_MATCHES',
      videos_copyright: 'VIDEOS_COPYRIGHT',
      reported: 'REPORTED',
      playlists: 'PLAYLISTS',
      playlist_details: 'PLAYLIST_DETAILS',
      posts_config: 'POSTS_CONFIG',
      seasons: 'SEASONS',
      season_details: 'SEASON_DETAILS',
      takedowns: 'TAKEDOWNS',
      unsent_reports: 'UNSENT_REPORTS',
      allowed: 'ALLOWED',
      tracked: 'TRACKED',
      blocked: 'BLOCKED',
      claimed: 'CLAIMED',
      manual_review: 'MANUAL_REVIEW',
      match_rules: 'MATCH_RULES',
      disputes: 'DISPUTES',
      active_fundraisers: 'ACTIVE_FUNDRAISERS',
      draft_fundraisers: 'DRAFT_FUNDRAISERS',
      ready_fundraisers: 'READY_FUNDRAISERS',
      ended_fundraisers: 'ENDED_FUNDRAISERS',
      ads_canvas: 'ADS_CANVAS',
      reference_files: 'REFERENCE_FILES',
      all_reference_files: 'ALL_REFERENCE_FILES',
      reference_conflicts: 'REFERENCE_CONFLICTS',
      reference_possible_conflicts: 'REFERENCE_POSSIBLE_CONFLICTS',
      reference_resolutions: 'REFERENCE_RESOLUTIONS',
      sound_recordings: 'SOUND_RECORDINGS',
      premium_music_videos: 'PREMIUM_MUSIC_VIDEOS',
      live_broadcasts: 'LIVE_BROADCASTS',
      crossposted_videos: 'CROSSPOSTED_VIDEOS',
      published_profile_picture_frames: 'PUBLISHED_PROFILE_PICTURE_FRAMES',
      pending_profile_picture_frames: 'PENDING_PROFILE_PICTURE_FRAMES',
      tarot_composer: 'TAROT_COMPOSER',
      draft_editions: 'DRAFT_EDITIONS',
      published_editions: 'PUBLISHED_EDITIONS',
      published_events: 'PUBLISHED_EVENTS',
      draft_events: 'DRAFT_EVENTS',
      scheduled_events: 'SCHEDULED_EVENTS',
      archived_events: 'ARCHIVED_EVENTS',
      tours: 'TOURS',
      polls_composer: 'POLLS_COMPOSER',
      brand_asset_library: 'BRAND_ASSET_LIBRARY',
      job_applications: 'JOB_APPLICATIONS',
      subscriptions: 'SUBSCRIPTIONS',
      news_subscriptions_publisher_tools: 'NEWS_SUBSCRIPTIONS_PUBLISHER_TOOLS',
      news_subscriptions_publisher_asset_management: 'NEWS_SUBSCRIPTIONS_PUBLISHER_ASSET_MANAGEMENT',
      qr_code: 'QR_CODE',
      credibility_indicators: 'CREDIBILITY_INDICATORS',
      attributions: 'ATTRIBUTIONS',
      broadcasted_messages: 'BROADCASTED_MESSAGES',
      branded_content: 'BRANDED_CONTENT',
      branded_content_creator: 'BRANDED_CONTENT_CREATOR',
      sounds_collection: 'SOUNDS_COLLECTION',
      content_tests: 'CONTENT_TESTS',
      gem_producer_dashboard: 'GEM_PRODUCER_DASHBOARD',
      monetized_videos: 'MONETIZED_VIDEOS',
      audio_releases: 'AUDIO_RELEASES',
      news_storylines: 'NEWS_STORYLINES'
    });
  }

  get (fields, params): PageSavedFilter {
    return this.read(
      fields,
      params
    );
  }
}
