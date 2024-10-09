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
 * AdCreativeBrandedContentAdsPartners
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeBrandedContentAdsPartners extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      fb_page_id: 'fb_page_id',
      has_create_ads_access: 'has_create_ads_access',
      identity_type: 'identity_type',
      ig_asset_id: 'ig_asset_id',
      ig_user_id: 'ig_user_id',
    });
  }

}
