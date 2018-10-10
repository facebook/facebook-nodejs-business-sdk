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
 * AdPromotedObject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPromotedObject extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      application_id: 'application_id',
      custom_conversion_id: 'custom_conversion_id',
      custom_event_type: 'custom_event_type',
      event_id: 'event_id',
      fundraiser_campaign_id: 'fundraiser_campaign_id',
      object_store_url: 'object_store_url',
      offer_id: 'offer_id',
      offline_conversion_data_set_id: 'offline_conversion_data_set_id',
      page_id: 'page_id',
      pixel_aggregation_rule: 'pixel_aggregation_rule',
      pixel_id: 'pixel_id',
      pixel_rule: 'pixel_rule',
      place_page_set_id: 'place_page_set_id',
      product_catalog_id: 'product_catalog_id',
      product_item_id: 'product_item_id',
      product_set_id: 'product_set_id',
      retention_days: 'retention_days',
      id: 'id'
    });
  }

  static get CustomEventType (): Object {
    return Object.freeze({
      rate: 'RATE',
      tutorial_completion: 'TUTORIAL_COMPLETION',
      contact: 'CONTACT',
      customize_product: 'CUSTOMIZE_PRODUCT',
      donate: 'DONATE',
      find_location: 'FIND_LOCATION',
      schedule: 'SCHEDULE',
      start_trial: 'START_TRIAL',
      submit_application: 'SUBMIT_APPLICATION',
      subscribe: 'SUBSCRIBE',
      add_to_cart: 'ADD_TO_CART',
      add_to_wishlist: 'ADD_TO_WISHLIST',
      initiated_checkout: 'INITIATED_CHECKOUT',
      add_payment_info: 'ADD_PAYMENT_INFO',
      purchase: 'PURCHASE',
      lead: 'LEAD',
      complete_registration: 'COMPLETE_REGISTRATION',
      content_view: 'CONTENT_VIEW',
      search: 'SEARCH',
      service_booking_request: 'SERVICE_BOOKING_REQUEST',
      messaging_conversation_started_7d: 'MESSAGING_CONVERSATION_STARTED_7D',
      level_achieved: 'LEVEL_ACHIEVED',
      achievement_unlocked: 'ACHIEVEMENT_UNLOCKED',
      spent_credits: 'SPENT_CREDITS',
      other: 'OTHER'
    });
  }

  get (fields, params): AdPromotedObject {
    return this.read(
      fields,
      params
    );
  }
}
