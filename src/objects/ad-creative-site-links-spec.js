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
 * AdCreativeSiteLinksSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeSiteLinksSpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      is_site_link_sticky: 'is_site_link_sticky',
      site_link_hash: 'site_link_hash',
      site_link_id: 'site_link_id',
      site_link_image_hash: 'site_link_image_hash',
      site_link_image_url: 'site_link_image_url',
      site_link_recommendation_type: 'site_link_recommendation_type',
      site_link_title: 'site_link_title',
      site_link_url: 'site_link_url',
    });
  }

}
