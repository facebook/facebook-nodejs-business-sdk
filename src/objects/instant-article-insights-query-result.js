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
 * InstantArticleInsightsQueryResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstantArticleInsightsQueryResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      breakdowns: 'breakdowns',
      name: 'name',
      time: 'time',
      value: 'value'
    });
  }

  static get Breakdown (): Object {
    return Object.freeze({
      no_breakdown: 'no_breakdown',
      platform: 'platform',
      age: 'age',
      region: 'region',
      country: 'country',
      is_shared_by_ia_owner: 'is_shared_by_ia_owner',
      gender: 'gender',
      gender_and_age: 'gender_and_age',
      is_organic: 'is_organic'
    });
  }
  static get Period (): Object {
    return Object.freeze({
      day: 'day',
      week: 'week',
      days_28: 'days_28',
      month: 'month',
      lifetime: 'lifetime',
      total_over_range: 'total_over_range'
    });
  }
}
