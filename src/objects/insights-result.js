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
  static get Fields (): Object {
    return Object.freeze({
      description: 'description',
      description_from_api_doc: 'description_from_api_doc',
      id: 'id',
      name: 'name',
      period: 'period',
      title: 'title',
      values: 'values',
    });
  }

  static get DatePreset (): Object {
    return Object.freeze({
      last_14d: 'last_14d',
      last_28d: 'last_28d',
      last_30d: 'last_30d',
      last_3d: 'last_3d',
      last_7d: 'last_7d',
      last_90d: 'last_90d',
      last_month: 'last_month',
      last_quarter: 'last_quarter',
      last_week_mon_sun: 'last_week_mon_sun',
      last_week_sun_sat: 'last_week_sun_sat',
      last_year: 'last_year',
      maximum: 'maximum',
      this_month: 'this_month',
      this_quarter: 'this_quarter',
      this_week_mon_today: 'this_week_mon_today',
      this_week_sun_today: 'this_week_sun_today',
      this_year: 'this_year',
      today: 'today',
      yesterday: 'yesterday',
    });
  }
  static get Period (): Object {
    return Object.freeze({
      day: 'day',
      days_28: 'days_28',
      lifetime: 'lifetime',
      month: 'month',
      week: 'week',
    });
  }
}
