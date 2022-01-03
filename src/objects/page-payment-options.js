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
 * PagePaymentOptions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePaymentOptions extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      amex: 'amex',
      cash_only: 'cash_only',
      discover: 'discover',
      mastercard: 'mastercard',
      visa: 'visa',
    });
  }

}
