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
 * AppEventConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppEventConfig extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      breakdowns_config: 'breakdowns_config',
      builtin_fields_config: 'builtin_fields_config',
      deprecated_events_config: 'deprecated_events_config',
      events_config: 'events_config',
      id: 'id',
      ios_purchase_validation_secret: 'ios_purchase_validation_secret',
      is_any_role_able_to_see_restricted_insights: 'is_any_role_able_to_see_restricted_insights',
      is_implicit_purchase_logging_on_android_supported: 'is_implicit_purchase_logging_on_android_supported',
      is_implicit_purchase_logging_on_ios_supported: 'is_implicit_purchase_logging_on_ios_supported',
      is_track_android_app_uninstall_supported: 'is_track_android_app_uninstall_supported',
      is_track_ios_app_uninstall_supported: 'is_track_ios_app_uninstall_supported',
      journey_backfill_status: 'journey_backfill_status',
      journey_conversion_events: 'journey_conversion_events',
      journey_enabled: 'journey_enabled',
      journey_timeout: 'journey_timeout',
      latest_sdk_versions: 'latest_sdk_versions',
      log_android_implicit_purchase_events: 'log_android_implicit_purchase_events',
      log_automatic_analytics_events: 'log_automatic_analytics_events',
      log_implicit_purchase_events: 'log_implicit_purchase_events',
      prev_journey_conversion_events: 'prev_journey_conversion_events',
      query_approximation_accuracy_level: 'query_approximation_accuracy_level',
      query_currency: 'query_currency',
      query_timezone: 'query_timezone',
      recent_events_update_time: 'recent_events_update_time',
      session_timeout_interval: 'session_timeout_interval',
      track_android_app_uninstall: 'track_android_app_uninstall',
      track_ios_app_uninstall: 'track_ios_app_uninstall',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AppEventConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
