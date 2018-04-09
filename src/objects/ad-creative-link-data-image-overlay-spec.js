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
 * AdCreativeLinkDataImageOverlaySpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataImageOverlaySpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      float_with_margin: 'float_with_margin',
      overlay_template: 'overlay_template',
      position: 'position',
      text_font: 'text_font',
      text_template_tags: 'text_template_tags',
      text_type: 'text_type',
      theme_color: 'theme_color'
    });
  }

  static get OverlayTemplate (): Object {
    return Object.freeze({
      pill_with_text: 'PILL_WITH_TEXT',
      circle_with_text: 'CIRCLE_WITH_TEXT',
      triangle_with_text: 'TRIANGLE_WITH_TEXT'
    });
  }
  static get Position (): Object {
    return Object.freeze({
      top_left: 'TOP_LEFT',
      top_right: 'TOP_RIGHT',
      bottom_left: 'BOTTOM_LEFT',
      bottom_right: 'BOTTOM_RIGHT'
    });
  }
  static get TextFont (): Object {
    return Object.freeze({
      droid_serif_regular: 'DROID_SERIF_REGULAR',
      lato_regular: 'LATO_REGULAR',
      nunito_sans_bold: 'NUNITO_SANS_BOLD',
      open_sans_bold: 'OPEN_SANS_BOLD',
      open_sans_condensed_bold: 'OPEN_SANS_CONDENSED_BOLD',
      pt_serif_bold: 'PT_SERIF_BOLD',
      roboto_medium: 'ROBOTO_MEDIUM',
      roboto_condensed_regular: 'ROBOTO_CONDENSED_REGULAR',
      noto_sans_regular: 'NOTO_SANS_REGULAR',
      dynads_hybrid_bold: 'DYNADS_HYBRID_BOLD'
    });
  }
  static get TextType (): Object {
    return Object.freeze({
      price: 'PRICE',
      strikethrough_price: 'STRIKETHROUGH_PRICE',
      percentage_off: 'PERCENTAGE_OFF'
    });
  }
  static get ThemeColor (): Object {
    return Object.freeze({
      background_e50900_text_ffffff: 'BACKGROUND_E50900_TEXT_FFFFFF',
      background_f78400_text_ffffff: 'BACKGROUND_F78400_TEXT_FFFFFF',
      background_00af4c_text_ffffff: 'BACKGROUND_00AF4C_TEXT_FFFFFF',
      background_0090ff_text_ffffff: 'BACKGROUND_0090FF_TEXT_FFFFFF',
      background_755dde_text_ffffff: 'BACKGROUND_755DDE_TEXT_FFFFFF',
      background_f23474_text_ffffff: 'BACKGROUND_F23474_TEXT_FFFFFF',
      background_595959_text_ffffff: 'BACKGROUND_595959_TEXT_FFFFFF',
      background_000000_text_ffffff: 'BACKGROUND_000000_TEXT_FFFFFF',
      background_ffffff_text_c91b00: 'BACKGROUND_FFFFFF_TEXT_C91B00',
      background_ffffff_text_f78400: 'BACKGROUND_FFFFFF_TEXT_F78400',
      background_ffffff_text_009c2a: 'BACKGROUND_FFFFFF_TEXT_009C2A',
      background_ffffff_text_007ad0: 'BACKGROUND_FFFFFF_TEXT_007AD0',
      background_ffffff_text_755dde: 'BACKGROUND_FFFFFF_TEXT_755DDE',
      background_ffffff_text_f23474: 'BACKGROUND_FFFFFF_TEXT_F23474',
      background_ffffff_text_646464: 'BACKGROUND_FFFFFF_TEXT_646464',
      background_ffffff_text_000000: 'BACKGROUND_FFFFFF_TEXT_000000'
    });
  }
}
