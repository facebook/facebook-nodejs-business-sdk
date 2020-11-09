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
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      invite_limit: 'invite_limit',
      messenger_cta: 'messenger_cta',
      messenger_promotion_text: 'messenger_promotion_text',
      namespace: 'namespace',
      need_promo_code: 'need_promo_code',
      offer_origin: 'offer_origin',
      privacy_policy_link: 'privacy_policy_link',
      promotion_text: 'promotion_text',
      receiver_benefits_text: 'receiver_benefits_text',
      referral_link_uri: 'referral_link_uri',
      sender_benefits_text: 'sender_benefits_text',
      terms_and_condition_link: 'terms_and_condition_link',
    });
  }


  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Referral {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Referral {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
