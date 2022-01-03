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
 * AdCreativePostClickConfiguration
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativePostClickConfiguration extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      post_click_item_description: 'post_click_item_description',
      post_click_item_headline: 'post_click_item_headline',
    });
  }

}
