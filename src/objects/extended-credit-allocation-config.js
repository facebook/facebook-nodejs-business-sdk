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
 * ExtendedCreditAllocationConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditAllocationConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      currency_amount: 'currency_amount',
      id: 'id',
      liability_type: 'liability_type',
      owning_business: 'owning_business',
      owning_credential: 'owning_credential',
      partition_type: 'partition_type',
      receiving_business: 'receiving_business',
      receiving_credential: 'receiving_credential',
      request_status: 'request_status',
      send_bill_to: 'send_bill_to'
    });
  }

  static get LiabilityType (): Object {
    return Object.freeze({
      normal: 'Normal',
      sequential: 'Sequential',
      msa: 'MSA'
    });
  }
  static get PartitionType (): Object {
    return Object.freeze({
      fixed: 'FIXED',
      auth: 'AUTH'
    });
  }
  static get SendBillTo (): Object {
    return Object.freeze({
      agency: 'Agency',
      advertiser: 'Advertiser'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): ExtendedCreditAllocationConfig {
    return this.read(
      fields,
      params
    );
  }
}
