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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';

/**
 * CommerceOrderTransactionDetail
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceOrderTransactionDetail extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      merchant_order_id: 'merchant_order_id',
      net_payment_amount: 'net_payment_amount',
      order_created: 'order_created',
      order_details: 'order_details',
      order_id: 'order_id',
      payout_reference_id: 'payout_reference_id',
      postal_code: 'postal_code',
      processing_fee: 'processing_fee',
      state: 'state',
      tax_rate: 'tax_rate',
      transaction_date: 'transaction_date',
      transaction_type: 'transaction_type',
      transfer_id: 'transfer_id',
      id: 'id',
    });
  }


  getItems (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/items'
    );
  }

  getTaxDetails (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/tax_details'
    );
  }
}
