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
 * PageBudgetRecs
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageBudgetRecs extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount_offset: 'amount_offset',
      budget_delta: 'budget_delta',
      campaign_length: 'campaign_length',
      currency: 'currency',
      display_amount: 'display_amount',
      reach: 'reach',
      reach_interval: 'reach_interval',
      value: 'value',
      id: 'id'
    });
  }

  get (fields, params): PageBudgetRecs {
    return this.read(
      fields,
      params
    );
  }
}
