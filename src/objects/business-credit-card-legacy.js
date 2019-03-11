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
 * BusinessCreditCardLegacy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessCreditCardLegacy extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      address: 'address',
      business_id: 'business_id',
      credit_card_suffix: 'credit_card_suffix',
      credit_card_type: 'credit_card_type',
      expiration_month: 'expiration_month',
      expiration_year: 'expiration_year',
      first_name: 'first_name',
      fraud_status: 'fraud_status',
      id: 'id',
      last_name: 'last_name',
      middle_name: 'middle_name'
    });
  }
}
