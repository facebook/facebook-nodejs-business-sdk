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
 * Targeting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Targeting extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      adgroup_id: 'adgroup_id',
      age_max: 'age_max',
      age_min: 'age_min',
      age_range: 'age_range',
      alternate_auto_targeting_option: 'alternate_auto_targeting_option',
      app_install_state: 'app_install_state',
      audience_network_positions: 'audience_network_positions',
      behaviors: 'behaviors',
      brand_safety_content_filter_levels: 'brand_safety_content_filter_levels',
      catalog_based_targeting: 'catalog_based_targeting',
      cities: 'cities',
      college_years: 'college_years',
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
      effective_threads_positions: 'effective_threads_positions',
      engagement_specs: 'engagement_specs',
      ethnic_affinity: 'ethnic_affinity',
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
      excluded_user_device: 'excluded_user_device',
      exclusions: 'exclusions',
      facebook_positions: 'facebook_positions',
      family_statuses: 'family_statuses',
      fb_deal_id: 'fb_deal_id',
      flexible_spec: 'flexible_spec',
      friends_of_connections: 'friends_of_connections',
      genders: 'genders',
      generation: 'generation',
      geo_locations: 'geo_locations',
      home_ownership: 'home_ownership',
      home_type: 'home_type',
      home_value: 'home_value',
      household_composition: 'household_composition',
      income: 'income',
      industries: 'industries',
      instagram_positions: 'instagram_positions',
      instream_video_skippable_excluded: 'instream_video_skippable_excluded',
      interested_in: 'interested_in',
      interests: 'interests',
      is_whatsapp_destination_ad: 'is_whatsapp_destination_ad',
      keywords: 'keywords',
      life_events: 'life_events',
      locales: 'locales',
      messenger_positions: 'messenger_positions',
      moms: 'moms',
      net_worth: 'net_worth',
      office_type: 'office_type',
      place_page_set_ids: 'place_page_set_ids',
      political_views: 'political_views',
      politics: 'politics',
      product_audience_specs: 'product_audience_specs',
      prospecting_audience: 'prospecting_audience',
      publisher_platforms: 'publisher_platforms',
      radius: 'radius',
      regions: 'regions',
      relationship_statuses: 'relationship_statuses',
      site_category: 'site_category',
      targeting_automation: 'targeting_automation',
      targeting_optimization: 'targeting_optimization',
      targeting_relaxation_types: 'targeting_relaxation_types',
      threads_positions: 'threads_positions',
      user_adclusters: 'user_adclusters',
      user_device: 'user_device',
      user_event: 'user_event',
      user_os: 'user_os',
      wireless_carrier: 'wireless_carrier',
      work_employers: 'work_employers',
      work_positions: 'work_positions',
      zips: 'zips',
    });
  }

  static get DevicePlatforms (): Object {
    return Object.freeze({
      desktop: 'desktop',
      mobile: 'mobile',
    });
  }
  static get EffectiveDevicePlatforms (): Object {
    return Object.freeze({
      desktop: 'desktop',
      mobile: 'mobile',
    });
  }
}
