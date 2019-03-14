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
 * MessengerProfile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerProfile extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_linking_url: 'account_linking_url',
      get_started: 'get_started',
      greeting: 'greeting',
      home_url: 'home_url',
      payment_settings: 'payment_settings',
      persistent_menu: 'persistent_menu',
      target_audience: 'target_audience',
      whitelisted_domains: 'whitelisted_domains'
    });
  }
}
