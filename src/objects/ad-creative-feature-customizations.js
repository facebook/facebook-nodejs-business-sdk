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
 * AdCreativeFeatureCustomizations
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeFeatureCustomizations extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      background_color: 'background_color',
      catalog_feed_tag_name: 'catalog_feed_tag_name',
      font_name: 'font_name',
      image_crop_style: 'image_crop_style',
      pe_carousel: 'pe_carousel',
      showcase_card_display: 'showcase_card_display',
      text_extraction: 'text_extraction',
      text_style: 'text_style',
    });
  }

}
