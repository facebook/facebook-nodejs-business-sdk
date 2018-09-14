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
 * AnalyticsSegment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsSegment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      custom_audience_ineligiblity_reasons: 'custom_audience_ineligiblity_reasons',
      description: 'description',
      estimated_custom_audience_size: 'estimated_custom_audience_size',
      event_info_rules: 'event_info_rules',
      event_rules: 'event_rules',
      event_source: 'event_source',
      filter_set: 'filter_set',
      id: 'id',
      is_all_user: 'is_all_user',
      is_eligible_for_push_campaign: 'is_eligible_for_push_campaign',
      is_internal: 'is_internal',
      name: 'name',
      percentile_rules: 'percentile_rules',
      push_backfill_status: 'push_backfill_status',
      time_last_seen: 'time_last_seen',
      time_last_updated: 'time_last_updated',
      user_property_rules: 'user_property_rules',
      web_param_rules: 'web_param_rules'
    });
  }

  get (fields, params): AnalyticsSegment {
    return this.read(
      fields,
      params
    );
  }
}
