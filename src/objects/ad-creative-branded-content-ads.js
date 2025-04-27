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
      content_search_input: 'content_search_input',
      creator_ad_permission_type: 'creator_ad_permission_type',
      facebook_boost_post_access_token: 'facebook_boost_post_access_token',
      instagram_boost_post_access_token: 'instagram_boost_post_access_token',
      is_mca_internal: 'is_mca_internal',
      parent_source_facebook_post_id: 'parent_source_facebook_post_id',
      parent_source_instagram_media_id: 'parent_source_instagram_media_id',
      partners: 'partners',
      product_set_partner_selection_status: 'product_set_partner_selection_status',
      promoted_page_id: 'promoted_page_id',
      testimonial: 'testimonial',
      testimonial_locale: 'testimonial_locale',
      ui_version: 'ui_version',
    });
  }

}
