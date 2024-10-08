 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdCreativeMarketingMessageStructuredSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeMarketingMessageStructuredSpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      buttons: 'buttons',
      footer: 'footer',
      greeting: 'greeting',
      is_optimized_text: 'is_optimized_text',
      language: 'language',
      referenced_adgroup_id: 'referenced_adgroup_id',
      whats_app_business_phone_number_id: 'whats_app_business_phone_number_id',
    });
  }

}
