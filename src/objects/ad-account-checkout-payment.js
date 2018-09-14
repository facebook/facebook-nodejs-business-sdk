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
 * AdAccountCheckoutPayment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountCheckoutPayment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account: 'ad_account',
      amount: 'amount',
      campaign: 'campaign',
      id: 'id',
      payment_id: 'payment_id',
      payment_type: 'payment_type',
      state: 'state',
      time_created: 'time_created',
      time_updated: 'time_updated'
    });
  }

  get (fields, params): AdAccountCheckoutPayment {
    return this.read(
      fields,
      params
    );
  }
}
