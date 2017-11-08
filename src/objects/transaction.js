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
 * Transaction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Transaction extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      app_amount: 'app_amount',
      billing_end_time: 'billing_end_time',
      billing_reason: 'billing_reason',
      billing_start_time: 'billing_start_time',
      charge_type: 'charge_type',
      checkout_campaign_group_id: 'checkout_campaign_group_id',
      credential_id: 'credential_id',
      fatura_id: 'fatura_id',
      id: 'id',
      is_business_ec_charge: 'is_business_ec_charge',
      payment_option: 'payment_option',
      product_type: 'product_type',
      provider_amount: 'provider_amount',
      status: 'status',
      time: 'time',
      tracking_id: 'tracking_id'
    });
  }

  static get ProductType (): Object {
    return Object.freeze({
      facebook_ad: 'FACEBOOK_AD',
      ig_ad: 'IG_AD'
    });
  }
}
