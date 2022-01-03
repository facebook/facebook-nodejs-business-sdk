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
 * ProductItemARData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemARData extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      container_effect: 'container_effect',
      effect_icon: 'effect_icon',
      effect_parameters: 'effect_parameters',
      picker_icon: 'picker_icon',
      product_ar_link: 'product_ar_link',
      state: 'state',
      surfaces: 'surfaces',
    });
  }

  static get Surfaces (): Object {
    return Object.freeze({
      b2c_marketplace: 'B2C_MARKETPLACE',
      c2c_marketplace: 'C2C_MARKETPLACE',
      da: 'DA',
      daily_deals: 'DAILY_DEALS',
      daily_deals_legacy: 'DAILY_DEALS_LEGACY',
      ig_product_tagging: 'IG_PRODUCT_TAGGING',
      marketplace: 'MARKETPLACE',
      marketplace_ads_deprecated: 'MARKETPLACE_ADS_DEPRECATED',
      marketplace_shops: 'MARKETPLACE_SHOPS',
      offline_conversions: 'OFFLINE_CONVERSIONS',
      shops: 'SHOPS',
      universal_checkout: 'UNIVERSAL_CHECKOUT',
      whatsapp: 'WHATSAPP',
    });
  }
}
