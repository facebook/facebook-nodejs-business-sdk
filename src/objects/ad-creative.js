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
import AdLabel from './ad-label';
import AdPreview from './ad-preview';

/**
 * AdCreative
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreative extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      actor_id: 'actor_id',
      adlabels: 'adlabels',
      applink_treatment: 'applink_treatment',
      asset_feed_spec: 'asset_feed_spec',
      body: 'body',
      branded_content_sponsor_page_id: 'branded_content_sponsor_page_id',
      call_to_action_type: 'call_to_action_type',
      effective_instagram_story_id: 'effective_instagram_story_id',
      effective_object_story_id: 'effective_object_story_id',
      id: 'id',
      image_crops: 'image_crops',
      image_hash: 'image_hash',
      image_url: 'image_url',
      instagram_actor_id: 'instagram_actor_id',
      instagram_permalink_url: 'instagram_permalink_url',
      instagram_story_id: 'instagram_story_id',
      link_og_id: 'link_og_id',
      link_url: 'link_url',
      messenger_sponsored_message: 'messenger_sponsored_message',
      name: 'name',
      object_id: 'object_id',
      object_story_id: 'object_story_id',
      object_story_spec: 'object_story_spec',
      object_type: 'object_type',
      object_url: 'object_url',
      platform_customizations: 'platform_customizations',
      product_set_id: 'product_set_id',
      recommender_settings: 'recommender_settings',
      status: 'status',
      template_url: 'template_url',
      template_url_spec: 'template_url_spec',
      thumbnail_url: 'thumbnail_url',
      title: 'title',
      url_tags: 'url_tags',
      use_page_actor_override: 'use_page_actor_override',
      video_id: 'video_id'
    });
  }

  static get ApplinkTreatment (): Object {
    return Object.freeze({
      deeplink_with_web_fallback: 'deeplink_with_web_fallback',
      deeplink_with_appstore_fallback: 'deeplink_with_appstore_fallback',
      web_only: 'web_only'
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
      event_rsvp: 'EVENT_RSVP',
      whatsapp_message: 'WHATSAPP_MESSAGE',
      follow_news_storyline: 'FOLLOW_NEWS_STORYLINE'
    });
  }
  static get ObjectType (): Object {
    return Object.freeze({
      application: 'APPLICATION',
      domain: 'DOMAIN',
      event: 'EVENT',
      offer: 'OFFER',
      page: 'PAGE',
      photo: 'PHOTO',
      share: 'SHARE',
      status: 'STATUS',
      store_item: 'STORE_ITEM',
      video: 'VIDEO',
      invalid: 'INVALID'
    });
  }
  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      deleted: 'DELETED'
    });
  }
  static get AuthorizationCategory (): Object {
    return Object.freeze({
      none: 'NONE',
      political: 'POLITICAL'
    });
  }
  static get DynamicAdVoice (): Object {
    return Object.freeze({
      dynamic: 'DYNAMIC',
      story_owner: 'STORY_OWNER'
    });
  }
  static get Operator (): Object {
    return Object.freeze({
      all: 'ALL',
      any: 'ANY'
    });
  }

  deleteAdLabels (params): AbstractObject {
    return super.deleteEdge(
      '/adlabels',
      params
    );
  }

  createAdLabel (fields, params): AdLabel {
    return this.createEdge(
      '/adlabels',
      fields,
      params,
      AdLabel
    );
  }

  getPreviews (fields, params, fetchFirstPage = true): AdPreview {
    return this.getEdge(
      AdPreview,
      fields,
      params,
      fetchFirstPage,
      '/previews'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): AdCreative {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdCreative {
    return super.update(
      params
    );
  }
}
