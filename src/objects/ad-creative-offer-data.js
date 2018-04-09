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
 * AdCreativeOfferData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeOfferData extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      claim_limit: 'claim_limit',
      coupon_type: 'coupon_type',
      expiration_time: 'expiration_time',
      image_url: 'image_url',
      message: 'message',
      redemption_link: 'redemption_link',
      reminder_time: 'reminder_time',
      title: 'title'
    });
  }
}
