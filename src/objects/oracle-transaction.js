/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import InvoiceCampaign from './invoice-campaign';

/**
 * OracleTransaction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OracleTransaction extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_account_ids: 'ad_account_ids',
      amount: 'amount',
      amount_due: 'amount_due',
      billed_amount_details: 'billed_amount_details',
      billing_period: 'billing_period',
      cdn_download_uri: 'cdn_download_uri',
      currency: 'currency',
      download_uri: 'download_uri',
      due_date: 'due_date',
      entity: 'entity',
      id: 'id',
      invoice_date: 'invoice_date',
      invoice_id: 'invoice_id',
      invoice_type: 'invoice_type',
      liability_type: 'liability_type',
      payment_status: 'payment_status',
      payment_term: 'payment_term',
      type: 'type',
    });
  }


  getCampaigns (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InvoiceCampaign,
      fields,
      params,
      fetchFirstPage,
      '/campaigns'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): OracleTransaction {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
