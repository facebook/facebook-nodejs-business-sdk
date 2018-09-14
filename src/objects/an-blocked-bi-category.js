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
 * ANBlockedBICategory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ANBlockedBICategory extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      key: 'key',
      id: 'id'
    });
  }

  get (fields, params): ANBlockedBICategory {
    return this.read(
      fields,
      params
    );
  }
}
