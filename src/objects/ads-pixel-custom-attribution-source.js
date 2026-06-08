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
 * AdsPixelCustomAttributionSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelCustomAttributionSource extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      is_eligible: 'is_eligible',
      name: 'name',
    });
  }

}
