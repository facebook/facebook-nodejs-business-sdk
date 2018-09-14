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
 * AdsTALHealthCheckError
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsTALHealthCheckError extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      error_code: 'error_code',
      target_id: 'target_id',
      id: 'id'
    });
  }

  get (fields, params): AdsTALHealthCheckError {
    return this.read(
      fields,
      params
    );
  }
}
