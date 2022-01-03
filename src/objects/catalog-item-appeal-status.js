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
 * CatalogItemAppealStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemAppealStatus extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      handle: 'handle',
      item_id: 'item_id',
      status: 'status',
      use_cases: 'use_cases',
    });
  }

}
