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
 * FundingSourceDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundingSourceDetails extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      coupon: 'coupon',
      display_string: 'display_string',
      id: 'id',
      type: 'type',
    });
  }

}
