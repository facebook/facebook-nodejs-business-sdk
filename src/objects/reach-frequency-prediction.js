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
 * ReachFrequencyPrediction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyPrediction extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      campaign_group_id: 'campaign_group_id',
      campaign_id: 'campaign_id',
      campaign_time_start: 'campaign_time_start',
      campaign_time_stop: 'campaign_time_stop',
      curve_budget_reach: 'curve_budget_reach',
      daily_impression_curve: 'daily_impression_curve',
      destination_id: 'destination_id',
      expiration_time: 'expiration_time',
      external_budget: 'external_budget',
      external_impression: 'external_impression',
      external_maximum_budget: 'external_maximum_budget',
      external_maximum_impression: 'external_maximum_impression',
      external_maximum_reach: 'external_maximum_reach',
      external_minimum_budget: 'external_minimum_budget',
      external_minimum_impression: 'external_minimum_impression',
      external_minimum_reach: 'external_minimum_reach',
      external_reach: 'external_reach',
      frequency_cap: 'frequency_cap',
      frequency_distribution: 'frequency_distribution',
      frequency_distribution_map: 'frequency_distribution_map',
      frequency_distribution_map_agg: 'frequency_distribution_map_agg',
      grp_dmas_audience_size: 'grp_dmas_audience_size',
      holdout_percentage: 'holdout_percentage',
      id: 'id',
      instagram_destination_id: 'instagram_destination_id',
      interval_frequency_cap: 'interval_frequency_cap',
      interval_frequency_cap_reset_period: 'interval_frequency_cap_reset_period',
      name: 'name',
      pause_periods: 'pause_periods',
      placement_breakdown: 'placement_breakdown',
      prediction_mode: 'prediction_mode',
      prediction_progress: 'prediction_progress',
      reservation_status: 'reservation_status',
      status: 'status',
      story_event_type: 'story_event_type',
      target_audience_size: 'target_audience_size',
      target_spec: 'target_spec',
      time_created: 'time_created',
      time_updated: 'time_updated'
    });
  }

  static get InstreamPackages (): Object {
    return Object.freeze({
      normal: 'NORMAL',
      premium: 'PREMIUM',
      sports: 'SPORTS',
      entertainment: 'ENTERTAINMENT',
      beauty: 'BEAUTY'
    });
  }
  static get Status (): Object {
    return Object.freeze({
      expired: 'EXPIRED',
      draft: 'DRAFT',
      pending: 'PENDING',
      active: 'ACTIVE',
      completed: 'COMPLETED'
    });
  }

  get (fields, params): ReachFrequencyPrediction {
    return this.read(
      fields,
      params
    );
  }
}
