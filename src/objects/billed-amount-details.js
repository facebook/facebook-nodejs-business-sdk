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
 * BilledAmountDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BilledAmountDetails extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      currency: 'currency',
      net_amount: 'net_amount',
      tax_amount: 'tax_amount',
      total_amount: 'total_amount',
    });
  }

}
