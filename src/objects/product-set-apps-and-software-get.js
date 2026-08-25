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
 * ProductSetAppsAndSoftwareGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSetAppsAndSoftwareGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      data: 'data',
      paging: 'paging',
      summary: 'summary',
    });
  }

  static get DisplayFormat (): Object {
    return Object.freeze({
      carousel_ad: 'CAROUSEL_AD',
      shops_pdp: 'SHOPS_PDP',
      single_ad: 'SINGLE_AD',
    });
  }
}
