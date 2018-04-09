/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import ProfilePictureSource from './profile-picture-source';

/**
 * Page
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Page extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      about: 'about',
      access_token: 'access_token',
      ad_campaign: 'ad_campaign',
      affiliation: 'affiliation',
      app_id: 'app_id',
      app_links: 'app_links',
      artists_we_like: 'artists_we_like',
      attire: 'attire',
      awards: 'awards',
      band_interests: 'band_interests',
      band_members: 'band_members',
      best_page: 'best_page',
      bio: 'bio',
      birthday: 'birthday',
      booking_agent: 'booking_agent',
      built: 'built',
      business: 'business',
      can_checkin: 'can_checkin',
      can_post: 'can_post',
      category: 'category',
      category_list: 'category_list',
      checkins: 'checkins',
      company_overview: 'company_overview',
      connected_instagram_account: 'connected_instagram_account',
      contact_address: 'contact_address',
      context: 'context',
      country_page_likes: 'country_page_likes',
      cover: 'cover',
      culinary_team: 'culinary_team',
      current_location: 'current_location',
      description: 'description',
      description_html: 'description_html',
      directed_by: 'directed_by',
      display_subtext: 'display_subtext',
      displayed_message_response_time: 'displayed_message_response_time',
      emails: 'emails',
      engagement: 'engagement',
      fan_count: 'fan_count',
      featured_video: 'featured_video',
      features: 'features',
      food_styles: 'food_styles',
      founded: 'founded',
      general_info: 'general_info',
      general_manager: 'general_manager',
      genre: 'genre',
      global_brand_page_name: 'global_brand_page_name',
      global_brand_root_id: 'global_brand_root_id',
      has_added_app: 'has_added_app',
      has_whatsapp_number: 'has_whatsapp_number',
      hometown: 'hometown',
      hours: 'hours',
      id: 'id',
      impressum: 'impressum',
      influences: 'influences',
      instagram_business_account: 'instagram_business_account',
      instant_articles_review_status: 'instant_articles_review_status',
      is_always_open: 'is_always_open',
      is_chain: 'is_chain',
      is_community_page: 'is_community_page',
      is_eligible_for_branded_content: 'is_eligible_for_branded_content',
      is_owned: 'is_owned',
      is_permanently_closed: 'is_permanently_closed',
      is_published: 'is_published',
      is_unclaimed: 'is_unclaimed',
      is_verified: 'is_verified',
      is_webhooks_subscribed: 'is_webhooks_subscribed',
      keywords: 'keywords',
      leadgen_form_preview_details: 'leadgen_form_preview_details',
      leadgen_has_crm_integration: 'leadgen_has_crm_integration',
      leadgen_has_fat_ping_crm_integration: 'leadgen_has_fat_ping_crm_integration',
      leadgen_tos_acceptance_time: 'leadgen_tos_acceptance_time',
      leadgen_tos_accepted: 'leadgen_tos_accepted',
      leadgen_tos_accepting_user: 'leadgen_tos_accepting_user',
      link: 'link',
      location: 'location',
      members: 'members',
      merchant_id: 'merchant_id',
      merchant_review_status: 'merchant_review_status',
      messenger_ads_default_page_welcome_message: 'messenger_ads_default_page_welcome_message',
      messenger_ads_quick_replies_type: 'messenger_ads_quick_replies_type',
      mission: 'mission',
      mpg: 'mpg',
      name: 'name',
      name_with_location_descriptor: 'name_with_location_descriptor',
      network: 'network',
      new_like_count: 'new_like_count',
      offer_eligible: 'offer_eligible',
      overall_star_rating: 'overall_star_rating',
      page_token: 'page_token',
      parent_page: 'parent_page',
      parking: 'parking',
      payment_options: 'payment_options',
      personal_info: 'personal_info',
      personal_interests: 'personal_interests',
      pharma_safety_info: 'pharma_safety_info',
      phone: 'phone',
      place_type: 'place_type',
      plot_outline: 'plot_outline',
      preferred_audience: 'preferred_audience',
      press_contact: 'press_contact',
      price_range: 'price_range',
      produced_by: 'produced_by',
      products: 'products',
      promotion_eligible: 'promotion_eligible',
      promotion_ineligible_reason: 'promotion_ineligible_reason',
      public_transit: 'public_transit',
      publisher_space: 'publisher_space',
      rating_count: 'rating_count',
      recipient: 'recipient',
      record_label: 'record_label',
      release_date: 'release_date',
      restaurant_services: 'restaurant_services',
      restaurant_specialties: 'restaurant_specialties',
      schedule: 'schedule',
      screenplay_by: 'screenplay_by',
      season: 'season',
      single_line_address: 'single_line_address',
      starring: 'starring',
      start_info: 'start_info',
      store_location_descriptor: 'store_location_descriptor',
      store_number: 'store_number',
      studio: 'studio',
      supports_instant_articles: 'supports_instant_articles',
      talking_about_count: 'talking_about_count',
      unread_message_count: 'unread_message_count',
      unread_notif_count: 'unread_notif_count',
      unseen_message_count: 'unseen_message_count',
      username: 'username',
      verification_status: 'verification_status',
      voip_info: 'voip_info',
      website: 'website',
      were_here_count: 'were_here_count',
      whatsapp_number: 'whatsapp_number',
      written_by: 'written_by',
    });
  }


  getPicture (fields, params, fetchFirstPage = true): ProfilePictureSource {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  get (fields, params): Page {
    return this.read(
      fields,
      params
    );
  }
}
