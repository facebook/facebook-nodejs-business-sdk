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
 * AdAssetFeedSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_formats: 'ad_formats',
      additional_data: 'additional_data',
      asset_customization_rules: 'asset_customization_rules',
      autotranslate: 'autotranslate',
      bodies: 'bodies',
      call_to_action_types: 'call_to_action_types',
      captions: 'captions',
      descriptions: 'descriptions',
      groups: 'groups',
      images: 'images',
      link_urls: 'link_urls',
      optimization_type: 'optimization_type',
      titles: 'titles',
      videos: 'videos'
    });
  }

  static get CallToActionTypes (): Object {
    return Object.freeze({
      open_link: 'OPEN_LINK',
      like_page: 'LIKE_PAGE',
      shop_now: 'SHOP_NOW',
      play_game: 'PLAY_GAME',
      install_app: 'INSTALL_APP',
      use_app: 'USE_APP',
      call: 'CALL',
      call_me: 'CALL_ME',
      install_mobile_app: 'INSTALL_MOBILE_APP',
      use_mobile_app: 'USE_MOBILE_APP',
      mobile_download: 'MOBILE_DOWNLOAD',
      book_travel: 'BOOK_TRAVEL',
      listen_music: 'LISTEN_MUSIC',
      watch_video: 'WATCH_VIDEO',
      learn_more: 'LEARN_MORE',
      sign_up: 'SIGN_UP',
      download: 'DOWNLOAD',
      watch_more: 'WATCH_MORE',
      no_button: 'NO_BUTTON',
      visit_pages_feed: 'VISIT_PAGES_FEED',
      apply_now: 'APPLY_NOW',
      buy_now: 'BUY_NOW',
      get_offer: 'GET_OFFER',
      get_offer_view: 'GET_OFFER_VIEW',
      buy_tickets: 'BUY_TICKETS',
      update_app: 'UPDATE_APP',
      get_directions: 'GET_DIRECTIONS',
      buy: 'BUY',
      message_page: 'MESSAGE_PAGE',
      donate: 'DONATE',
      subscribe: 'SUBSCRIBE',
      say_thanks: 'SAY_THANKS',
      sell_now: 'SELL_NOW',
      share: 'SHARE',
      donate_now: 'DONATE_NOW',
      get_quote: 'GET_QUOTE',
      contact_us: 'CONTACT_US',
      order_now: 'ORDER_NOW',
      add_to_cart: 'ADD_TO_CART',
      video_annotation: 'VIDEO_ANNOTATION',
      moments: 'MOMENTS',
      record_now: 'RECORD_NOW',
      get_showtimes: 'GET_SHOWTIMES',
      listen_now: 'LISTEN_NOW',
      event_rsvp: 'EVENT_RSVP',
      whatsapp_message: 'WHATSAPP_MESSAGE',
      follow_news_storyline: 'FOLLOW_NEWS_STORYLINE'
    });
  }
}
