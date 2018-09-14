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
 * AdAccountAllPaymentMethods
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAllPaymentMethods extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id'
    });
  }

  getNonAdsCreditCard (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/non_ads_credit_card'
    );
  }

  getPaymentMethodAltpays (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/payment_method_altpays'
    );
  }

  getPaymentMethodDirectDebits (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/payment_method_direct_debits'
    );
  }

  getPaymentMethodExtendedCredits (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/payment_method_extended_credits'
    );
  }

  getPaymentMethodPaypal (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/payment_method_paypal'
    );
  }

  getPaymentMethodStoredBalances (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/payment_method_stored_balances'
    );
  }

  getPaymentMethodTokens (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/payment_method_tokens'
    );
  }

  getPmCreditCard (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/pm_credit_card'
    );
  }

  get (fields, params): AdAccountAllPaymentMethods {
    return this.read(
      fields,
      params
    );
  }
}
