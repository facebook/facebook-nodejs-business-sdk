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
 * ProductItemSubscriptionInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemSubscriptionInfo extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      is_subscribable: 'is_subscribable',
      subscription_billing_period: 'subscription_billing_period',
      subscription_billing_type: 'subscription_billing_type',
    });
  }

}
