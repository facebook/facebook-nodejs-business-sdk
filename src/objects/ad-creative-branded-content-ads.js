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
 * AdCreativeBrandedContentAds
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeBrandedContentAds extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_format: 'ad_format',
      creator_ad_permission_type: 'creator_ad_permission_type',
      instagram_boost_post_access_token: 'instagram_boost_post_access_token',
      partners: 'partners',
      ui_version: 'ui_version',
    });
  }

}
