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
 * InstagramBoostableMediaForAccessToken
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramBoostableMediaForAccessToken extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      has_product_tags: 'has_product_tags',
      media: 'media',
    });
  }

}
