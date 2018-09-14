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
 * CommerceMerchantSettingsSetupStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceMerchantSettingsSetupStatus extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      marketplace_approval_status: 'marketplace_approval_status',
      payment_setup: 'payment_setup',
      shop_setup: 'shop_setup',
      id: 'id'
    });
  }

  get (fields, params): CommerceMerchantSettingsSetupStatus {
    return this.read(
      fields,
      params
    );
  }
}
