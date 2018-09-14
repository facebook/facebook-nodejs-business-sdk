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
 * AdAccountCheckout
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountCheckout extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account_id: 'ad_account_id',
      graduation_nag: 'graduation_nag',
      graduation_reason: 'graduation_reason',
      state: 'state',
      time_created: 'time_created',
      time_updated: 'time_updated',
      id: 'id'
    });
  }

  get (fields, params): AdAccountCheckout {
    return this.read(
      fields,
      params
    );
  }
}
