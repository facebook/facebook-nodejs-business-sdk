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
 * Auto
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Auto extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      auto_id: 'auto_id',
      body_style: 'body_style',
      currency: 'currency',
      id: 'id',
      price: 'price',
      trim: 'trim',
      year: 'year'
    });
  }

  get (fields, params): Auto {
    return this.read(
      fields,
      params
    );
  }
}
