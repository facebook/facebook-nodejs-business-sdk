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
 * Referral
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Referral extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      invite_limit: 'invite_limit',
      messenger_cta: 'messenger_cta',
      messenger_promotion_text: 'messenger_promotion_text',
      namespace: 'namespace',
      need_promo_code: 'need_promo_code',
      offer_origin: 'offer_origin',
      promotion_text: 'promotion_text',
      receiver_benefits_text: 'receiver_benefits_text',
      referral_link_uri: 'referral_link_uri',
      sender_benefits_text: 'sender_benefits_text',
    });
  }


  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): Referral {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Referral {
    return super.update(
      params
    );
  }
}
