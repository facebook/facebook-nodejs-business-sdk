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
 * AdAccountTargetingUnified
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountTargetingUnified extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audience_size: 'audience_size',
      conversion_lift: 'conversion_lift',
      description: 'description',
      id: 'id',
      img: 'img',
      info: 'info',
      info_title: 'info_title',
      is_recommendation: 'is_recommendation',
      key: 'key',
      link: 'link',
      name: 'name',
      parent: 'parent',
      partner: 'partner',
      path: 'path',
      performance_rating: 'performance_rating',
      raw_name: 'raw_name',
      recommendation_model: 'recommendation_model',
      search_interest_id: 'search_interest_id',
      source: 'source',
      spend: 'spend',
      type: 'type',
      valid: 'valid',
    });
  }

  static get LimitType (): Object {
    return Object.freeze({
      behaviors: 'behaviors',
      college_years: 'college_years',
      education_majors: 'education_majors',
      education_schools: 'education_schools',
      education_statuses: 'education_statuses',
      ethnic_affinity: 'ethnic_affinity',
      family_statuses: 'family_statuses',
      generation: 'generation',
      home_ownership: 'home_ownership',
      home_type: 'home_type',
      home_value: 'home_value',
      household_composition: 'household_composition',
      income: 'income',
      industries: 'industries',
      interested_in: 'interested_in',
      interests: 'interests',
      life_events: 'life_events',
      location_categories: 'location_categories',
      moms: 'moms',
      net_worth: 'net_worth',
      office_type: 'office_type',
      politics: 'politics',
      relationship_statuses: 'relationship_statuses',
      user_adclusters: 'user_adclusters',
      work_employers: 'work_employers',
      work_positions: 'work_positions',
    });
  }
  static get RegulatedCategories (): Object {
    return Object.freeze({
      credit: 'CREDIT',
      employment: 'EMPLOYMENT',
      housing: 'HOUSING',
      none: 'NONE',
    });
  }
  static get WhitelistedTypes (): Object {
    return Object.freeze({
      adgroup_id: 'adgroup_id',
      age_max: 'age_max',
      age_min: 'age_min',
      alternate_auto_targeting_option: 'alternate_auto_targeting_option',
      app_install_state: 'app_install_state',
      audience_network_positions: 'audience_network_positions',
      behaviors: 'behaviors',
      brand_safety_content_filter_levels: 'brand_safety_content_filter_levels',
      brand_safety_content_severity_levels: 'brand_safety_content_severity_levels',
      catalog_based_targeting: 'catalog_based_targeting',
      cities: 'cities',
      city_keys: 'city_keys',
      college_years: 'college_years',
      conjunctive_user_adclusters: 'conjunctive_user_adclusters',
      connections: 'connections',
      contextual_targeting_categories: 'contextual_targeting_categories',
      countries: 'countries',
      country: 'country',
      country_groups: 'country_groups',
      custom_audiences: 'custom_audiences',
      device_platforms: 'device_platforms',
      direct_install_devices: 'direct_install_devices',
      dynamic_audience_ids: 'dynamic_audience_ids',
      education_majors: 'education_majors',
      education_schools: 'education_schools',
      education_statuses: 'education_statuses',
      effective_audience_network_positions: 'effective_audience_network_positions',
      effective_device_platforms: 'effective_device_platforms',
      effective_facebook_positions: 'effective_facebook_positions',
      effective_instagram_positions: 'effective_instagram_positions',
      effective_messenger_positions: 'effective_messenger_positions',
      effective_publisher_platforms: 'effective_publisher_platforms',
      effective_whatsapp_positions: 'effective_whatsapp_positions',
      engagement_specs: 'engagement_specs',
      ethnic_affinity: 'ethnic_affinity',
      exclude_previous_days: 'exclude_previous_days',
      exclude_reached_since: 'exclude_reached_since',
      excluded_brand_safety_content_types: 'excluded_brand_safety_content_types',
      excluded_connections: 'excluded_connections',
      excluded_custom_audiences: 'excluded_custom_audiences',
      excluded_dynamic_audience_ids: 'excluded_dynamic_audience_ids',
      excluded_engagement_specs: 'excluded_engagement_specs',
      excluded_geo_locations: 'excluded_geo_locations',
      excluded_mobile_device_model: 'excluded_mobile_device_model',
      excluded_product_audience_specs: 'excluded_product_audience_specs',
      excluded_publisher_categories: 'excluded_publisher_categories',
      excluded_publisher_list_ids: 'excluded_publisher_list_ids',
      excluded_user_adclusters: 'excluded_user_adclusters',
      excluded_user_device: 'excluded_user_device',
      exclusions: 'exclusions',
      facebook_positions: 'facebook_positions',
      family_statuses: 'family_statuses',
      fb_deal_id: 'fb_deal_id',
      flexible_spec: 'flexible_spec',
      follow_profiles: 'follow_profiles',
      follow_profiles_negative: 'follow_profiles_negative',
      format: 'format',
      friends_of_connections: 'friends_of_connections',
      gatekeepers: 'gatekeepers',
      genders: 'genders',
      generation: 'generation',
      geo_locations: 'geo_locations',
      home_ownership: 'home_ownership',
      home_type: 'home_type',
      home_value: 'home_value',
      household_composition: 'household_composition',
      id: 'id',
      income: 'income',
      industries: 'industries',
      instagram_positions: 'instagram_positions',
      instream_video_sponsorship_placements: 'instream_video_sponsorship_placements',
      interest_defaults_source: 'interest_defaults_source',
      interested_in: 'interested_in',
      interests: 'interests',
      is_instagram_destination_ad: 'is_instagram_destination_ad',
      is_whatsapp_destination_ad: 'is_whatsapp_destination_ad',
      keywords: 'keywords',
      life_events: 'life_events',
      locales: 'locales',
      location_categories: 'location_categories',
      location_cluster_ids: 'location_cluster_ids',
      location_expansion: 'location_expansion',
      marketplace_product_categories: 'marketplace_product_categories',
      messenger_positions: 'messenger_positions',
      mobile_device_model: 'mobile_device_model',
      moms: 'moms',
      net_worth: 'net_worth',
      office_type: 'office_type',
      page_types: 'page_types',
      place_page_set_ids: 'place_page_set_ids',
      political_views: 'political_views',
      politics: 'politics',
      product_audience_specs: 'product_audience_specs',
      prospecting_audience: 'prospecting_audience',
      publisher_platforms: 'publisher_platforms',
      radius: 'radius',
      region_keys: 'region_keys',
      regions: 'regions',
      relationship_statuses: 'relationship_statuses',
      rtb_flag: 'rtb_flag',
      site_category: 'site_category',
      targeting_optimization: 'targeting_optimization',
      timezones: 'timezones',
      topic: 'topic',
      trending: 'trending',
      user_adclusters: 'user_adclusters',
      user_device: 'user_device',
      user_event: 'user_event',
      user_os: 'user_os',
      user_page_threads: 'user_page_threads',
      user_page_threads_excluded: 'user_page_threads_excluded',
      whatsapp_positions: 'whatsapp_positions',
      wireless_carrier: 'wireless_carrier',
      work_employers: 'work_employers',
      work_positions: 'work_positions',
      zips: 'zips',
    });
  }
  static get Mode (): Object {
    return Object.freeze({
      best_performing: 'best_performing',
      recently_used: 'recently_used',
      related: 'related',
      suggestions: 'suggestions',
    });
  }
  static get Objective (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      brand_awareness: 'BRAND_AWARENESS',
      conversions: 'CONVERSIONS',
      event_responses: 'EVENT_RESPONSES',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      local_awareness: 'LOCAL_AWARENESS',
      messages: 'MESSAGES',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      product_catalog_sales: 'PRODUCT_CATALOG_SALES',
      reach: 'REACH',
      video_views: 'VIDEO_VIEWS',
    });
  }
}
