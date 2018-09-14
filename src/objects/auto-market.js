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
 * AutoMarket
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AutoMarket extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      auto_market_id: 'auto_market_id',
      id: 'id',
      name: 'name',
      postal_codes: 'postal_codes'
    });
  }

  get (fields, params): AutoMarket {
    return this.read(
      fields,
      params
    );
  }
}
