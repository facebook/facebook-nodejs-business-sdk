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
 * InsightsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InsightsResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      description_from_api_doc: 'description_from_api_doc',
      id: 'id',
      name: 'name',
      period: 'period',
      title: 'title',
      values: 'values'
    });
  }

  static get Metric (): Object {
    return Object.freeze({
      daily_total: 'daily_total',
      is_traveling_breakdowns: 'is_traveling_breakdowns',
      hourly_breakdowns: 'hourly_breakdowns',
      demographic_breakdowns: 'demographic_breakdowns',
      seen_ads_daily_total: 'seen_ads_daily_total',
      seen_ads_hourly_breakdowns: 'seen_ads_hourly_breakdowns'
    });
  }
  static get Period (): Object {
    return Object.freeze({
      day: 'day',
      week: 'week',
      days_28: 'days_28',
      month: 'month',
      lifetime: 'lifetime'
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
  static get SortDir (): Object {
    return Object.freeze({
      asc: 'asc',
      desc: 'desc'
    });
  }

  get (fields, params): InsightsResult {
    return this.read(
      fields,
      params
    );
  }
}
