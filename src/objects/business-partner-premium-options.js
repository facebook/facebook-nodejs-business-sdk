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
 * BusinessPartnerPremiumOptions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessPartnerPremiumOptions extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      enable_basket_insight: 'enable_basket_insight',
      enable_extended_audience_retargeting: 'enable_extended_audience_retargeting',
      retailer_custom_audience_config: 'retailer_custom_audience_config',
    });
  }

}
