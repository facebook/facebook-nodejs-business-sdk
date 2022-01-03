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
 * AdAccountActivity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountActivity extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      created_by: 'created_by',
      created_time: 'created_time',
      credit_new: 'credit_new',
      credit_old: 'credit_old',
      currency_new: 'currency_new',
      currency_old: 'currency_old',
      daily_spend_limit_new: 'daily_spend_limit_new',
      daily_spend_limit_old: 'daily_spend_limit_old',
      event_time: 'event_time',
      event_type: 'event_type',
      funding_id_new: 'funding_id_new',
      funding_id_old: 'funding_id_old',
      grace_period_time_new: 'grace_period_time_new',
      grace_period_time_old: 'grace_period_time_old',
      id: 'id',
      manager_id_new: 'manager_id_new',
      manager_id_old: 'manager_id_old',
      name_new: 'name_new',
      name_old: 'name_old',
      spend_cap_new: 'spend_cap_new',
      spend_cap_old: 'spend_cap_old',
      status_new: 'status_new',
      status_old: 'status_old',
      terms_new: 'terms_new',
      terms_old: 'terms_old',
      tier_new: 'tier_new',
      tier_old: 'tier_old',
      time_updated_new: 'time_updated_new',
      time_updated_old: 'time_updated_old',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AdAccountActivity {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
