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
 * BrandedContentFBPromodeUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandedContentFBPromodeUser extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      delegate_page_for_ads_only_id: 'delegate_page_for_ads_only_id',
      is_iabp: 'is_iabp',
      is_managed: 'is_managed',
      name: 'name',
      profile_picture_url: 'profile_picture_url',
    });
  }

}
