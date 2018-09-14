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
 * Null
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Null extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id'
    });
  }

  get (fields, params): Null {
    return this.read(
      fields,
      params
    );
  }
}
