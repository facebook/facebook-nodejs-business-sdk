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
 * AdCreativeVideoDataCustomOverlaySpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeVideoDataCustomOverlaySpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      background_color: 'background_color',
      background_opacity: 'background_opacity',
      duration: 'duration',
      float_with_margin: 'float_with_margin',
      full_width: 'full_width',
      option: 'option',
      position: 'position',
      start: 'start',
      template: 'template',
      text_color: 'text_color',
      id: 'id'
    });
  }

  static get BackgroundOpacity (): Object {
    return Object.freeze({
      solid: 'solid',
      half: 'half'
    });
  }
  static get Option (): Object {
    return Object.freeze({
      bank_transfer: 'bank_transfer',
      boleto: 'boleto',
      discount_with_boleto: 'discount_with_boleto',
      cash_on_delivery: 'cash_on_delivery',
      home_delivery: 'home_delivery',
      free_shipping: 'free_shipping',
      inventory: 'inventory',
      pay_on_arrival: 'pay_on_arrival',
      pay_at_hotel: 'pay_at_hotel',
      fast_delivery: 'fast_delivery'
    });
  }
  static get Position (): Object {
    return Object.freeze({
      top_left: 'top_left',
      top_center: 'top_center',
      top_right: 'top_right',
      middle_left: 'middle_left',
      middle_center: 'middle_center',
      middle_right: 'middle_right'
    });
  }
  static get Template (): Object {
    return Object.freeze({
      rectangle_with_text: 'rectangle_with_text'
    });
  }

  get (fields, params): AdCreativeVideoDataCustomOverlaySpec {
    return this.read(
      fields,
      params
    );
  }
}
