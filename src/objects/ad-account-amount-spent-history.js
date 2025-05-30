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
 * AdAccountAmountSpentHistory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAmountSpentHistory extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      amount_spent: 'amount_spent',
      spend_cap: 'spend_cap',
      time_start: 'time_start',
      time_stop: 'time_stop',
    });
  }

}
