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
 * AdCampaignGroupGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account_id: 'account_id',
      advantage_state_info: 'advantage_state_info',
      bid_strategy: 'bid_strategy',
      budget_remaining: 'budget_remaining',
      buying_type: 'buying_type',
      configured_status: 'configured_status',
      created_time: 'created_time',
      daily_budget: 'daily_budget',
      effective_status: 'effective_status',
      id: 'id',
      lifetime_budget: 'lifetime_budget',
      name: 'name',
      objective: 'objective',
      promoted_object: 'promoted_object',
      special_ad_categories: 'special_ad_categories',
      spend_cap: 'spend_cap',
      start_time: 'start_time',
      status: 'status',
      stop_time: 'stop_time',
      updated_time: 'updated_time',
    });
  }

  static get SpecialAdCategories (): Object {
    return Object.freeze({
      credit: 'CREDIT',
      education: 'EDUCATION',
      elections_politics: 'ELECTIONS_POLITICS',
      employment: 'EMPLOYMENT',
      financial_products_services: 'FINANCIAL_PRODUCTS_SERVICES',
      housing: 'HOUSING',
      issues_elections_politics: 'ISSUES_ELECTIONS_POLITICS',
      none: 'NONE',
      online_gambling_and_gaming: 'ONLINE_GAMBLING_AND_GAMING',
      social_issues: 'SOCIAL_ISSUES',
    });
  }
}
