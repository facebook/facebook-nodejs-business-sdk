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
 * PageCallToAction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCallToAction extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      android_app: 'android_app',
      android_deeplink: 'android_deeplink',
      android_destination_type: 'android_destination_type',
      android_package_name: 'android_package_name',
      android_url: 'android_url',
      created_time: 'created_time',
      email_address: 'email_address',
      from: 'from',
      id: 'id',
      intl_number_with_plus: 'intl_number_with_plus',
      iphone_app: 'iphone_app',
      iphone_deeplink: 'iphone_deeplink',
      iphone_destination_type: 'iphone_destination_type',
      iphone_url: 'iphone_url',
      status: 'status',
      type: 'type',
      updated_time: 'updated_time',
      web_destination_type: 'web_destination_type',
      web_url: 'web_url'
    });
  }

  static get AndroidDestinationType (): Object {
    return Object.freeze({
      website: 'WEBSITE',
      app_deeplink: 'APP_DEEPLINK',
      facebook_app: 'FACEBOOK_APP',
      phone_call: 'PHONE_CALL',
      messenger: 'MESSENGER',
      email: 'EMAIL',
      none: 'NONE'
    });
  }
  static get IphoneDestinationType (): Object {
    return Object.freeze({
      website: 'WEBSITE',
      app_deeplink: 'APP_DEEPLINK',
      facebook_app: 'FACEBOOK_APP',
      phone_call: 'PHONE_CALL',
      messenger: 'MESSENGER',
      email: 'EMAIL',
      none: 'NONE'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      book_now: 'BOOK_NOW',
      call_now: 'CALL_NOW',
      charity_donate: 'CHARITY_DONATE',
      contact_us: 'CONTACT_US',
      donate_now: 'DONATE_NOW',
      message: 'MESSAGE',
      open_app: 'OPEN_APP',
      play_now: 'PLAY_NOW',
      shop_now: 'SHOP_NOW',
      sign_up: 'SIGN_UP',
      watch_now: 'WATCH_NOW',
      get_offer: 'GET_OFFER',
      get_offer_view: 'GET_OFFER_VIEW',
      request_quote: 'REQUEST_QUOTE',
      book_appointment: 'BOOK_APPOINTMENT',
      listen: 'LISTEN',
      email: 'EMAIL',
      learn_more: 'LEARN_MORE',
      request_appointment: 'REQUEST_APPOINTMENT',
      get_directions: 'GET_DIRECTIONS',
      buy_tickets: 'BUY_TICKETS',
      play_music: 'PLAY_MUSIC',
      visit_group: 'VISIT_GROUP'
    });
  }
  static get WebDestinationType (): Object {
    return Object.freeze({
      email: 'EMAIL',
      messenger: 'MESSENGER',
      none: 'NONE',
      website: 'WEBSITE'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): PageCallToAction {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): PageCallToAction {
    return super.update(
      params
    );
  }
}
