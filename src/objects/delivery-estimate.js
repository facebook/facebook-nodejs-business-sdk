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
 * DeliveryEstimate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DeliveryEstimate extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      bid_estimate: 'bid_estimate',
      daily_outcomes_curve: 'daily_outcomes_curve',
      estimate_dau: 'estimate_dau',
      estimate_mau: 'estimate_mau',
      estimate_ready: 'estimate_ready'
    });
  }
}
