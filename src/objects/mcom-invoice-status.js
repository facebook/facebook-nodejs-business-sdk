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
 * McomInvoiceStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomInvoiceStatus extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      bank_account_number: 'bank_account_number',
      bank_code: 'bank_code',
      invoice_id: 'invoice_id',
      invoice_status: 'invoice_status',
      page_id: 'page_id',
      payment_method: 'payment_method',
      payment_type: 'payment_type',
      payout_amount: 'payout_amount',
      slip_verification_error: 'slip_verification_error',
      slip_verification_status: 'slip_verification_status',
      sof_transfer_id: 'sof_transfer_id',
      sof_transfer_timestamp: 'sof_transfer_timestamp',
      transaction_fee: 'transaction_fee',
      transfer_slip: 'transfer_slip',
      transfer_slip_qr_code: 'transfer_slip_qr_code',
    });
  }

}
