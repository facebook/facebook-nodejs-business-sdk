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
 * AdAssetFeed
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeed extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account: 'account',
      ad_formats: 'ad_formats',
      additional_data: 'additional_data',
      autotranslate: 'autotranslate',
      id: 'id',
      optimization_type: 'optimization_type'
    });
  }

  static get AdFormats (): Object {
    return Object.freeze({
      automatic_format: 'AUTOMATIC_FORMAT',
      carousel_image: 'CAROUSEL_IMAGE',
      carousel_video: 'CAROUSEL_VIDEO',
      single_image: 'SINGLE_IMAGE',
      single_video: 'SINGLE_VIDEO'
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
      woodhenge_support: 'WOODHENGE_SUPPORT',
      event_rsvp: 'EVENT_RSVP',
      whatsapp_message: 'WHATSAPP_MESSAGE',
      follow_news_storyline: 'FOLLOW_NEWS_STORYLINE'
    });
  }
  static get OptimizationType (): Object {
    return Object.freeze({
      regular: 'REGULAR',
      language: 'LANGUAGE',
      placement: 'PLACEMENT',
      video_bandwidth: 'VIDEO_BANDWIDTH',
      brand: 'BRAND',
      asset_customization: 'ASSET_CUSTOMIZATION',
      dco_parity: 'DCO_PARITY'
    });
  }
  static get CallToActionType (): Object {
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
      woodhenge_support: 'WOODHENGE_SUPPORT',
      event_rsvp: 'EVENT_RSVP',
      whatsapp_message: 'WHATSAPP_MESSAGE',
      follow_news_storyline: 'FOLLOW_NEWS_STORYLINE'
    });
  }

  getAssetCustomizationRules (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/asset_customization_rules'
    );
  }

  getBodies (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/bodies'
    );
  }

  getCallToActionTypes (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/call_to_action_types'
    );
  }

  getCallToActions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/call_to_actions'
    );
  }

  getCaptions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/captions'
    );
  }

  getDescriptions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/descriptions'
    );
  }

  getGroups (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/groups'
    );
  }

  getImages (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/images'
    );
  }

  getLinkUrls (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/link_urls'
    );
  }

  getTargetRules (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/target_rules'
    );
  }

  getTitles (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/titles'
    );
  }

  getVideos (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  get (fields, params): AdAssetFeed {
    return this.read(
      fields,
      params
    );
  }
}
