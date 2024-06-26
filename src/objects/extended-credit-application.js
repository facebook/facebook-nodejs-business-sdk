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
 * ExtendedCreditApplication
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditApplication extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      billing_country: 'billing_country',
      city: 'city',
      cnpj: 'cnpj',
      country: 'country',
      display_currency: 'display_currency',
      duns_number: 'duns_number',
      id: 'id',
      invoice_email_address: 'invoice_email_address',
      is_umi: 'is_umi',
      legal_entity_name: 'legal_entity_name',
      original_online_limit: 'original_online_limit',
      phone_number: 'phone_number',
      postal_code: 'postal_code',
      product_types: 'product_types',
      proposed_credit_limit: 'proposed_credit_limit',
      registration_number: 'registration_number',
      run_id: 'run_id',
      state: 'state',
      status: 'status',
      street1: 'street1',
      street2: 'street2',
      submitter: 'submitter',
      tax_exempt_status: 'tax_exempt_status',
      tax_id: 'tax_id',
      terms: 'terms',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): ExtendedCreditApplication {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
