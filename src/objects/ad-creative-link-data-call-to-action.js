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
 * AdCreativeLinkDataCallToAction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataCallToAction extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      type: 'type',
      value: 'value'
    });
  }

  static get Type (): Object {
    return Object.freeze({
      open_link: 'OPEN_LINK',
      like_page: 'LIKE_PAGE',
      shop_now: 'SHOP_NOW',
      play_game: 'PLAY_GAME',
      install_app: 'INSTALL_APP',
      use_app: 'USE_APP',
      install_mobile_app: 'INSTALL_MOBILE_APP',
      use_mobile_app: 'USE_MOBILE_APP',
      book_travel: 'BOOK_TRAVEL',
      listen_music: 'LISTEN_MUSIC',
      learn_more: 'LEARN_MORE',
      sign_up: 'SIGN_UP',
      download: 'DOWNLOAD',
      watch_more: 'WATCH_MORE',
      no_button: 'NO_BUTTON',
      call_now: 'CALL_NOW',
      apply_now: 'APPLY_NOW',
      buy_now: 'BUY_NOW',
      get_offer: 'GET_OFFER',
      get_offer_view: 'GET_OFFER_VIEW',
      get_directions: 'GET_DIRECTIONS',
      message_page: 'MESSAGE_PAGE',
      message_user: 'MESSAGE_USER',
      subscribe: 'SUBSCRIBE',
      sell_now: 'SELL_NOW',
      donate_now: 'DONATE_NOW',
      get_quote: 'GET_QUOTE',
      contact_us: 'CONTACT_US',
      start_order: 'START_ORDER',
      record_now: 'RECORD_NOW',
      vote_now: 'VOTE_NOW',
      register_now: 'REGISTER_NOW',
      request_time: 'REQUEST_TIME',
      see_menu: 'SEE_MENU',
      email_now: 'EMAIL_NOW',
      get_showtimes: 'GET_SHOWTIMES',
      try_it: 'TRY_IT',
      listen_now: 'LISTEN_NOW',
      open_movies: 'OPEN_MOVIES'
    });
  }
}
