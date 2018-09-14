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
 * NotaFiscal
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class NotaFiscal extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount: 'amount',
      ccm: 'ccm',
      issue_date: 'issue_date',
      nfe_number: 'nfe_number',
      verification_code: 'verification_code',
      id: 'id'
    });
  }

  get (fields, params): NotaFiscal {
    return this.read(
      fields,
      params
    );
  }
}
