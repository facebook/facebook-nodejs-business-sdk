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
 * AdRuleTrigger
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleTrigger extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      field: 'field',
      operator: 'operator',
      type: 'type',
      value: 'value'
    });
  }

  static get Operator (): Object {
    return Object.freeze({
      greater_than: 'GREATER_THAN',
      less_than: 'LESS_THAN',
      equal: 'EQUAL',
      not_equal: 'NOT_EQUAL',
      in_range: 'IN_RANGE',
      not_in_range: 'NOT_IN_RANGE',
      in: 'IN',
      not_in: 'NOT_IN',
      contain: 'CONTAIN',
      not_contain: 'NOT_CONTAIN',
      any: 'ANY',
      all: 'ALL',
      none: 'NONE'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      metadata_creation: 'METADATA_CREATION',
      metadata_update: 'METADATA_UPDATE',
      stats_milestone: 'STATS_MILESTONE',
      stats_change: 'STATS_CHANGE',
      delivery_insights_change: 'DELIVERY_INSIGHTS_CHANGE'
    });
  }
}
