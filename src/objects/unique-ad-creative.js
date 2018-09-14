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
 * UniqueAdCreative
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UniqueAdCreative extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      sample_creative: 'sample_creative',
      visual_hash: 'visual_hash',
      id: 'id'
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

  get (fields, params): UniqueAdCreative {
    return this.read(
      fields,
      params
    );
  }
}
