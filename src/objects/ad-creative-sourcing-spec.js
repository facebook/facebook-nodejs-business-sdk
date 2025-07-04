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
 * AdCreativeSourcingSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeSourcingSpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      associated_product_set_id: 'associated_product_set_id',
      brand: 'brand',
      dynamic_site_links_spec: 'dynamic_site_links_spec',
      enable_social_feedback_preservation: 'enable_social_feedback_preservation',
      promotion_metadata_spec: 'promotion_metadata_spec',
      site_links_spec: 'site_links_spec',
      source_url: 'source_url',
    });
  }

}
