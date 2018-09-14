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
 * ExtendedCreditInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      credit_left: 'credit_left',
      credit_used: 'credit_used',
      id: 'id'
    });
  }

  get (fields, params): ExtendedCreditInfo {
    return this.read(
      fields,
      params
    );
  }
}
