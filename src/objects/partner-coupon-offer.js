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
 * PartnerCouponOffer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerCouponOffer extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      claim_by: 'claim_by',
      currency: 'currency',
      expiration_days: 'expiration_days',
      id: 'id',
      minimum_spend: 'minimum_spend',
      offer_amount: 'offer_amount',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): PartnerCouponOffer {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
