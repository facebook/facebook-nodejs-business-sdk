/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * CreditCard
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreditCard extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      billing_address: 'billing_address',
      card_cobadging: 'card_cobadging',
      card_holder_name: 'card_holder_name',
      card_type: 'card_type',
      default_receiving_method_products: 'default_receiving_method_products',
      expiry_month: 'expiry_month',
      expiry_year: 'expiry_year',
      id: 'id',
      is_cvv_tricky_bin: 'is_cvv_tricky_bin',
      is_enabled: 'is_enabled',
      is_last_used: 'is_last_used',
      is_zip_verified: 'is_zip_verified',
      last4: 'last4',
      readable_card_type: 'readable_card_type',
      time_created: 'time_created',
      type: 'type'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): CreditCard {
    return this.read(
      fields,
      params
    );
  }
}
