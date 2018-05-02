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
 * DirectDeal
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DirectDeal extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adbreaks_enabled: 'adbreaks_enabled',
      adset: 'adset',
      advertiser: 'advertiser',
      advertiser_lead_email: 'advertiser_lead_email',
      advertiser_page: 'advertiser_page',
      cpe_amount: 'cpe_amount',
      cpe_currency: 'cpe_currency',
      end_time: 'end_time',
      id: 'id',
      lifetime_budget_amount: 'lifetime_budget_amount',
      lifetime_budget_currency: 'lifetime_budget_currency',
      lifetime_impressions: 'lifetime_impressions',
      name: 'name',
      pages: 'pages',
      placements: 'placements',
      priced_by: 'priced_by',
      publisher_name: 'publisher_name',
      review_requirement: 'review_requirement',
      sales_lead_email: 'sales_lead_email',
      start_time: 'start_time',
      status: 'status',
      targeting: 'targeting'
    });
  }

  static get Status (): Object {
    return Object.freeze({
      value_0: '0',
      value_1: '1',
      value_2: '2',
      value_3: '3',
      value_4: '4',
      value_5: '5',
      value_6: '6'
    });
  }

  get (fields, params): DirectDeal {
    return this.read(
      fields,
      params
    );
  }
}
