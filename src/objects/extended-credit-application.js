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
 * ExtendedCreditApplication
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditApplication extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      billing_country: 'billing_country',
      city: 'city',
      cnpj: 'cnpj',
      country: 'country',
      duns_number: 'duns_number',
      id: 'id',
      invoice_email_address: 'invoice_email_address',
      legal_entity_name: 'legal_entity_name',
      phone_number: 'phone_number',
      postal_code: 'postal_code',
      product_type: 'product_type',
      registration_number: 'registration_number',
      run_id: 'run_id',
      state: 'state',
      status: 'status',
      street1: 'street1',
      street2: 'street2',
      submitter: 'submitter',
      tax_id: 'tax_id',
      terms: 'terms'
    });
  }

  get (fields, params): ExtendedCreditApplication {
    return this.read(
      fields,
      params
    );
  }
}
