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
      description: 'description',
      id: 'id',
      name: 'name',
      path: 'path',
      type: 'type',
      valid: 'valid'
    });
  }

  static get LimitType (): Object {
    return Object.freeze({
      adgroup_id: 'ADGROUP_ID',
      genders: 'GENDERS',
      age_min: 'AGE_MIN',
      age_max: 'AGE_MAX',
      country_groups: 'COUNTRY_GROUPS',
      countries: 'COUNTRIES',
      country: 'COUNTRY',
      cities: 'CITIES',
      radius: 'RADIUS',
      regions: 'REGIONS',
      zips: 'ZIPS',
      interests: 'INTERESTS',
      keywords: 'KEYWORDS',
      education_schools: 'EDUCATION_SCHOOLS',
      education_majors: 'EDUCATION_MAJORS',
      work_positions: 'WORK_POSITIONS',
      work_employers: 'WORK_EMPLOYERS',
      relationship_statuses: 'RELATIONSHIP_STATUSES',
      interested_in: 'INTERESTED_IN',
      locales: 'LOCALES',
      user_adclusters: 'USER_ADCLUSTERS',
      excluded_user_adclusters: 'EXCLUDED_USER_ADCLUSTERS',
      conjunctive_user_adclusters: 'CONJUNCTIVE_USER_ADCLUSTERS',
      custom_audiences: 'CUSTOM_AUDIENCES',
      excluded_custom_audiences: 'EXCLUDED_CUSTOM_AUDIENCES',
      college_years: 'COLLEGE_YEARS',
      education_statuses: 'EDUCATION_STATUSES',
      connections: 'CONNECTIONS',
      excluded_connections: 'EXCLUDED_CONNECTIONS',
      friends_of_connections: 'FRIENDS_OF_CONNECTIONS',
      user_event: 'USER_EVENT',
      dynamic_audience_ids: 'DYNAMIC_AUDIENCE_IDS',
      excluded_dynamic_audience_ids: 'EXCLUDED_DYNAMIC_AUDIENCE_IDS',
      rtb_flag: 'RTB_FLAG',
      site_category: 'SITE_CATEGORY',
      geo_locations: 'GEO_LOCATIONS',
      excluded_geo_locations: 'EXCLUDED_GEO_LOCATIONS',
      timezones: 'TIMEZONES',
      place_page_set_ids: 'PLACE_PAGE_SET_IDS',
      page_types: 'PAGE_TYPES',
      publisher_platforms: 'PUBLISHER_PLATFORMS',
      effective_publisher_platforms: 'EFFECTIVE_PUBLISHER_PLATFORMS',
      facebook_positions: 'FACEBOOK_POSITIONS',
      effective_facebook_positions: 'EFFECTIVE_FACEBOOK_POSITIONS',
      instagram_positions: 'INSTAGRAM_POSITIONS',
      effective_instagram_positions: 'EFFECTIVE_INSTAGRAM_POSITIONS',
      messenger_positions: 'MESSENGER_POSITIONS',
      effective_messenger_positions: 'EFFECTIVE_MESSENGER_POSITIONS',
      device_platforms: 'DEVICE_PLATFORMS',
      effective_device_platforms: 'EFFECTIVE_DEVICE_PLATFORMS',
      audience_network_positions: 'AUDIENCE_NETWORK_POSITIONS',
      effective_audience_network_positions: 'EFFECTIVE_AUDIENCE_NETWORK_POSITIONS',
      excluded_publisher_categories: 'EXCLUDED_PUBLISHER_CATEGORIES',
      excluded_publisher_list_ids: 'EXCLUDED_PUBLISHER_LIST_IDS',
      publisher_visibility_categories: 'PUBLISHER_VISIBILITY_CATEGORIES',
      user_device: 'USER_DEVICE',
      mobile_device_model: 'MOBILE_DEVICE_MODEL',
      excluded_user_device: 'EXCLUDED_USER_DEVICE',
      excluded_mobile_device_model: 'EXCLUDED_MOBILE_DEVICE_MODEL',
      user_os: 'USER_OS',
      wireless_carrier: 'WIRELESS_CARRIER',
      family_statuses: 'FAMILY_STATUSES',
      industries: 'INDUSTRIES',
      life_events: 'LIFE_EVENTS',
      political_views: 'POLITICAL_VIEWS',
      politics: 'POLITICS',
      behaviors: 'BEHAVIORS',
      income: 'INCOME',
      net_worth: 'NET_WORTH',
      home_type: 'HOME_TYPE',
      home_ownership: 'HOME_OWNERSHIP',
      home_value: 'HOME_VALUE',
      ethnic_affinity: 'ETHNIC_AFFINITY',
      generation: 'GENERATION',
      household_composition: 'HOUSEHOLD_COMPOSITION',
      moms: 'MOMS',
      office_type: 'OFFICE_TYPE',
      targeting_optimization: 'TARGETING_OPTIMIZATION',
      direct_install_devices: 'DIRECT_INSTALL_DEVICES',
      engagement_specs: 'ENGAGEMENT_SPECS',
      excluded_engagement_specs: 'EXCLUDED_ENGAGEMENT_SPECS',
      product_audience_specs: 'PRODUCT_AUDIENCE_SPECS',
      excluded_product_audience_specs: 'EXCLUDED_PRODUCT_AUDIENCE_SPECS',
      exclusions: 'EXCLUSIONS',
      flexible_spec: 'FLEXIBLE_SPEC',
      exclude_reached_since: 'EXCLUDE_REACHED_SINCE',
      exclude_previous_days: 'EXCLUDE_PREVIOUS_DAYS',
      app_install_state: 'APP_INSTALL_STATE',
      fb_deal_id: 'FB_DEAL_ID',
      interest_defaults_source: 'INTEREST_DEFAULTS_SOURCE',
      alternate_auto_targeting_option: 'ALTERNATE_AUTO_TARGETING_OPTION',
      contextual_targeting_categories: 'CONTEXTUAL_TARGETING_CATEGORIES',
      topic: 'TOPIC',
      format: 'FORMAT',
      trending: 'TRENDING',
      gatekeepers: 'GATEKEEPERS',
      follow_profiles: 'FOLLOW_PROFILES',
      follow_profiles_negative: 'FOLLOW_PROFILES_NEGATIVE',
      location_categories: 'LOCATION_CATEGORIES',
      user_page_threads: 'USER_PAGE_THREADS',
      user_page_threads_excluded: 'USER_PAGE_THREADS_EXCLUDED'
    });
  }
}
