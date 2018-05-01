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
 * AdCreativeLinkDataCustomOverlaySpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataCustomOverlaySpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      background_color: 'background_color',
      float_with_margin: 'float_with_margin',
      font: 'font',
      option: 'option',
      position: 'position',
      render_with_icon: 'render_with_icon',
      template: 'template',
      text_color: 'text_color'
    });
  }

  static get BackgroundColor (): Object {
    return Object.freeze({
      background_ffffff: 'background_ffffff',
      background_e50900: 'background_e50900',
      background_f78400: 'background_f78400',
      background_00af4c: 'background_00af4c',
      background_0090ff: 'background_0090ff',
      background_755dde: 'background_755dde',
      background_f23474: 'background_f23474',
      background_595959: 'background_595959',
      background_000000: 'background_000000'
    });
  }
  static get Font (): Object {
    return Object.freeze({
      droid_serif_regular: 'droid_serif_regular',
      lato_regular: 'lato_regular',
      nunito_sans_bold: 'nunito_sans_bold',
      open_sans_bold: 'open_sans_bold',
      pt_serif_bold: 'pt_serif_bold',
      roboto_medium: 'roboto_medium',
      roboto_condensed_regular: 'roboto_condensed_regular',
      noto_sans_regular: 'noto_sans_regular'
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
      inventory: 'inventory'
    });
  }
  static get Position (): Object {
    return Object.freeze({
      top_left: 'top_left',
      top_right: 'top_right',
      bottom_left: 'bottom_left',
      bottom_right: 'bottom_right'
    });
  }
  static get Template (): Object {
    return Object.freeze({
      pill_with_text: 'pill_with_text'
    });
  }
  static get TextColor (): Object {
    return Object.freeze({
      text_ffffff: 'text_ffffff',
      text_c91b00: 'text_c91b00',
      text_f78400: 'text_f78400',
      text_009c2a: 'text_009c2a',
      text_007ad0: 'text_007ad0',
      text_755dde: 'text_755dde',
      text_f23474: 'text_f23474',
      text_646464: 'text_646464',
      text_000000: 'text_000000'
    });
  }
}
