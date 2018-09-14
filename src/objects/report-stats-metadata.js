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
 * ReportStatsMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReportStatsMetadata extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      cutoff_date_account_data: 'cutoff_date_account_data',
      cutoff_date_actions: 'cutoff_date_actions',
      cutoff_date_carousel_action_breakdown: 'cutoff_date_carousel_action_breakdown',
      cutoff_date_carousel_card_name: 'cutoff_date_carousel_card_name',
      cutoff_date_demographics: 'cutoff_date_demographics',
      cutoff_date_general: 'cutoff_date_general',
      cutoff_date_placement: 'cutoff_date_placement',
      cutoff_date_relevance_score: 'cutoff_date_relevance_score',
      cutoff_date_video_type_breakdown: 'cutoff_date_video_type_breakdown',
      cutoff_date_website_ctr: 'cutoff_date_website_ctr',
      id: 'id'
    });
  }

  static get ActionsGroupBy (): Object {
    return Object.freeze({
      action_canvas_component_id: 'action_canvas_component_id',
      action_canvas_component_name: 'action_canvas_component_name',
      action_carousel_card_id: 'action_carousel_card_id',
      action_carousel_card_name: 'action_carousel_card_name',
      action_destination: 'action_destination',
      action_device: 'action_device',
      action_event_channel: 'action_event_channel',
      action_target_id: 'action_target_id',
      action_type: 'action_type',
      action_video_sound: 'action_video_sound',
      action_video_type: 'action_video_type'
    });
  }
  static get DatePreset (): Object {
    return Object.freeze({
      today: 'today',
      yesterday: 'yesterday',
      this_month: 'this_month',
      last_month: 'last_month',
      this_quarter: 'this_quarter',
      lifetime: 'lifetime',
      last_3d: 'last_3d',
      last_7d: 'last_7d',
      last_14d: 'last_14d',
      last_28d: 'last_28d',
      last_30d: 'last_30d',
      last_90d: 'last_90d',
      last_week_mon_sun: 'last_week_mon_sun',
      last_week_sun_sat: 'last_week_sun_sat',
      last_quarter: 'last_quarter',
      last_year: 'last_year',
      this_week_mon_today: 'this_week_mon_today',
      this_week_sun_today: 'this_week_sun_today',
      this_year: 'this_year'
    });
  }

  get (fields, params): ReportStatsMetadata {
    return this.read(
      fields,
      params
    );
  }
}
