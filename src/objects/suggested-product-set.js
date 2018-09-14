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
 * SuggestedProductSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SuggestedProductSet extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      filter: 'filter',
      name: 'name',
      products_count: 'products_count',
      id: 'id'
    });
  }

  get (fields, params): SuggestedProductSet {
    return this.read(
      fields,
      params
    );
  }
}
