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
 * ProductCatalogCheckBatchRequestStatusGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogCheckBatchRequestStatusGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      data: 'data',
      paging: 'paging',
    });
  }

  static get ErrorPriority (): Object {
    return Object.freeze({
      high: 'HIGH',
      low: 'LOW',
      medium: 'MEDIUM',
    });
  }
}
