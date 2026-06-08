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
 * HighDemandPeriodGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HighDemandPeriodGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_object_id: 'ad_object_id',
      budget_value: 'budget_value',
      budget_value_type: 'budget_value_type',
      id: 'id',
      recurrence_type: 'recurrence_type',
      time_end: 'time_end',
      time_start: 'time_start',
      weekly_schedule: 'weekly_schedule',
    });
  }

}
