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
      active_fundraisers: 'ACTIVE_FUNDRAISERS',
      ads_canvas: 'ADS_CANVAS',
      ads_posts: 'ADS_POSTS',
      allowed: 'ALLOWED',
      all_reference_files: 'ALL_REFERENCE_FILES',
      archived_events: 'ARCHIVED_EVENTS',
      attributions: 'ATTRIBUTIONS',
      audio_releases: 'AUDIO_RELEASES',
      blocked: 'BLOCKED',
      branded_content: 'BRANDED_CONTENT',
      branded_content_creator: 'BRANDED_CONTENT_CREATOR',
      broadcasted_messages: 'BROADCASTED_MESSAGES',
      candidate_videos: 'CANDIDATE_VIDEOS',
      chex_completed_orders: 'CHEX_COMPLETED_ORDERS',
      chex_pending_orders: 'CHEX_PENDING_ORDERS',
      claimed: 'CLAIMED',
      commerce_collections: 'COMMERCE_COLLECTIONS',
      commerce_merchant_settings: 'COMMERCE_MERCHANT_SETTINGS',
      commerce_past_orders: 'COMMERCE_PAST_ORDERS',
      commerce_pending_orders: 'COMMERCE_PENDING_ORDERS',
      commerce_platform_settings: 'COMMERCE_PLATFORM_SETTINGS',
      commerce_products: 'COMMERCE_PRODUCTS',
      commerce_shop_link: 'COMMERCE_SHOP_LINK',
      content_tests: 'CONTENT_TESTS',
      creator_studio: 'CREATOR_STUDIO',
      creator_studio_all_reference_files: 'CREATOR_STUDIO_ALL_REFERENCE_FILES',
      creator_studio_blocked: 'CREATOR_STUDIO_BLOCKED',
      creator_studio_disputes: 'CREATOR_STUDIO_DISPUTES',
      creator_studio_published_all_reference_files: 'CREATOR_STUDIO_PUBLISHED_ALL_REFERENCE_FILES',
      creator_studio_published_blocked: 'CREATOR_STUDIO_PUBLISHED_BLOCKED',
      creator_studio_published_disputes: 'CREATOR_STUDIO_PUBLISHED_DISPUTES',
      creator_studio_published_manual_review: 'CREATOR_STUDIO_PUBLISHED_MANUAL_REVIEW',
      creator_studio_published_tracked: 'CREATOR_STUDIO_PUBLISHED_TRACKED',
      creator_studio_reference_conflicts: 'CREATOR_STUDIO_REFERENCE_CONFLICTS',
      creator_studio_reference_possible_conflicts: 'CREATOR_STUDIO_REFERENCE_POSSIBLE_CONFLICTS',
      creator_studio_reference_resolutions: 'CREATOR_STUDIO_REFERENCE_RESOLUTIONS',
      creator_studio_takedowns: 'CREATOR_STUDIO_TAKEDOWNS',
      creator_studio_tracked: 'CREATOR_STUDIO_TRACKED',
      crossposted_videos: 'CROSSPOSTED_VIDEOS',
      disputes: 'DISPUTES',
      donations_settings: 'DONATIONS_SETTINGS',
      drafts: 'DRAFTS',
      draft_events: 'DRAFT_EVENTS',
      draft_fundraisers: 'DRAFT_FUNDRAISERS',
      ended_fundraisers: 'ENDED_FUNDRAISERS',
      expired_posts: 'EXPIRED_POSTS',
      expiring_posts: 'EXPIRING_POSTS',
      gem_producer_dashboard: 'GEM_PRODUCER_DASHBOARD',
      ia_regiwall_settings: 'IA_REGIWALL_SETTINGS',
      instant_articles: 'INSTANT_ARTICLES',
      instant_articles_cta_management: 'INSTANT_ARTICLES_CTA_MANAGEMENT',
      instant_articles_development: 'INSTANT_ARTICLES_DEVELOPMENT',
      instant_articles_monetization: 'INSTANT_ARTICLES_MONETIZATION',
      instant_articles_sample: 'INSTANT_ARTICLES_SAMPLE',
      instant_articles_settings: 'INSTANT_ARTICLES_SETTINGS',
      instant_articles_sign_up: 'INSTANT_ARTICLES_SIGN_UP',
      instant_articles_traffic_lift: 'INSTANT_ARTICLES_TRAFFIC_LIFT',
      invoices_active: 'INVOICES_ACTIVE',
      invoices_history: 'INVOICES_HISTORY',
      job_applications: 'JOB_APPLICATIONS',
      job_posts: 'JOB_POSTS',
      lead_ads_crm_setup: 'LEAD_ADS_CRM_SETUP',
      lead_ads_custom_crm_setup: 'LEAD_ADS_CUSTOM_CRM_SETUP',
      lead_ads_draft_forms: 'LEAD_ADS_DRAFT_FORMS',
      lead_ads_forms: 'LEAD_ADS_FORMS',
      live_broadcasts: 'LIVE_BROADCASTS',
      manual_claims: 'MANUAL_CLAIMS',
      manual_claim_facebook_videos: 'MANUAL_CLAIM_FACEBOOK_VIDEOS',
      manual_claim_instagram_videos: 'MANUAL_CLAIM_INSTAGRAM_VIDEOS',
      manual_review: 'MANUAL_REVIEW',
      match_rules: 'MATCH_RULES',
      monetized_videos: 'MONETIZED_VIDEOS',
      news_subscriptions_publisher_asset_management: 'NEWS_SUBSCRIPTIONS_PUBLISHER_ASSET_MANAGEMENT',
      news_subscriptions_publisher_config: 'NEWS_SUBSCRIPTIONS_PUBLISHER_CONFIG',
      news_subscriptions_publisher_insights: 'NEWS_SUBSCRIPTIONS_PUBLISHER_INSIGHTS',
      news_subscriptions_publisher_offer_management: 'NEWS_SUBSCRIPTIONS_PUBLISHER_OFFER_MANAGEMENT',
      news_subscriptions_publisher_test_users: 'NEWS_SUBSCRIPTIONS_PUBLISHER_TEST_USERS',
      news_subscriptions_publisher_tools: 'NEWS_SUBSCRIPTIONS_PUBLISHER_TOOLS',
      new_matches: 'NEW_MATCHES',
      pending_profile_picture_frames: 'PENDING_PROFILE_PICTURE_FRAMES',
      playlists: 'PLAYLISTS',
      playlist_details: 'PLAYLIST_DETAILS',
      polls_composer: 'POLLS_COMPOSER',
      posts_config: 'POSTS_CONFIG',
      post_ideas: 'POST_IDEAS',
      premium_music_videos: 'PREMIUM_MUSIC_VIDEOS',
      published_events: 'PUBLISHED_EVENTS',
      published_posts: 'PUBLISHED_POSTS',
      published_profile_picture_frames: 'PUBLISHED_PROFILE_PICTURE_FRAMES',
      qr_code: 'QR_CODE',
      ready_fundraisers: 'READY_FUNDRAISERS',
      reference_conflicts: 'REFERENCE_CONFLICTS',
      reference_files: 'REFERENCE_FILES',
      reference_possible_conflicts: 'REFERENCE_POSSIBLE_CONFLICTS',
      reference_resolutions: 'REFERENCE_RESOLUTIONS',
      registrations: 'REGISTRATIONS',
      reported: 'REPORTED',
      reward_program: 'REWARD_PROGRAM',
      scheduled_events: 'SCHEDULED_EVENTS',
      scheduled_posts: 'SCHEDULED_POSTS',
      seasons: 'SEASONS',
      season_details: 'SEASON_DETAILS',
      sounds_collection: 'SOUNDS_COLLECTION',
      sound_recordings: 'SOUND_RECORDINGS',
      story_archive: 'STORY_ARCHIVE',
      subscriptions: 'SUBSCRIPTIONS',
      takedowns: 'TAKEDOWNS',
      tours: 'TOURS',
      tracked: 'TRACKED',
      unsent_reports: 'UNSENT_REPORTS',
      videos: 'VIDEOS',
      videos_copyright: 'VIDEOS_COPYRIGHT'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): PageSavedFilter {
    return this.read(
      fields,
      params
    );
  }
}
