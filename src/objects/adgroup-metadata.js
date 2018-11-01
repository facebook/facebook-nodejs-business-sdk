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
 * AdgroupMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdgroupMetadata extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      carousel_style: 'carousel_style',
      carousel_with_static_card_style: 'carousel_with_static_card_style',
      id: 'id'
    });
  }

  get (fields, params): AdgroupMetadata {
    return this.read(
      fields,
      params
    );
  }
}
