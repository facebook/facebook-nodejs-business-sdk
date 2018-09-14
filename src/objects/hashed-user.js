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
 * HashedUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HashedUser extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      hash: 'hash',
      id: 'id'
    });
  }

  get (fields, params): HashedUser {
    return this.read(
      fields,
      params
    );
  }
}
