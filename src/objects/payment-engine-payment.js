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
 * PaymentEnginePayment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PaymentEnginePayment extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      actions: 'actions',
      application: 'application',
      country: 'country',
      created_time: 'created_time',
      disputes: 'disputes',
      fraud_status: 'fraud_status',
      fulfillment_status: 'fulfillment_status',
      id: 'id',
      is_from_ad: 'is_from_ad',
      is_from_page_post: 'is_from_page_post',
      items: 'items',
      payout_foreign_exchange_rate: 'payout_foreign_exchange_rate',
      phone_support_eligible: 'phone_support_eligible',
      refundable_amount: 'refundable_amount',
      request_id: 'request_id',
      tax: 'tax',
      tax_country: 'tax_country',
      test: 'test',
      user: 'user',
    });
  }

  static get Reason (): Object {
    return Object.freeze({
      banned_user: 'BANNED_USER',
      denied_refund: 'DENIED_REFUND',
      granted_replacement_item: 'GRANTED_REPLACEMENT_ITEM',
    });
  }

  createDispute (fields: Array<string>, params: Object = {}): Promise<PaymentEnginePayment> {
    return this.createEdge(
      '/dispute',
      fields,
      params,
      PaymentEnginePayment
    );
  }

  createRefund (fields: Array<string>, params: Object = {}): Promise<PaymentEnginePayment> {
    return this.createEdge(
      '/refunds',
      fields,
      params,
      PaymentEnginePayment
    );
  }

  
  get (fields: Array<string>, params: Object = {}): PaymentEnginePayment {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
