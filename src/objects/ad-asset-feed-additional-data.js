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
 * AdAssetFeedAdditionalData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedAdditionalData extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      automated_product_tags: 'automated_product_tags',
      brand_page_id: 'brand_page_id',
      is_click_to_message: 'is_click_to_message',
      multi_share_end_card: 'multi_share_end_card',
      page_welcome_message: 'page_welcome_message',
      partner_app_welcome_message_flow_id: 'partner_app_welcome_message_flow_id',
    });
  }

}
