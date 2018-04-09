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
 * AdAsyncRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAsyncRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      async_request_set: 'async_request_set',
      created_time: 'created_time',
      id: 'id',
      input: 'input',
      result: 'result',
      scope_object_id: 'scope_object_id',
      status: 'status',
      type: 'type',
      updated_time: 'updated_time'
    });
  }

  static get Status (): Object {
    return Object.freeze({
      initial: 'INITIAL',
      in_progress: 'IN_PROGRESS',
      success: 'SUCCESS',
      error: 'ERROR',
      canceled: 'CANCELED',
      pending_dependency: 'PENDING_DEPENDENCY',
      canceled_dependency: 'CANCELED_DEPENDENCY',
      error_dependency: 'ERROR_DEPENDENCY',
      error_conflicts: 'ERROR_CONFLICTS'
    });
  }
  static get Statuses (): Object {
    return Object.freeze({
      initial: 'INITIAL',
      in_progress: 'IN_PROGRESS',
      success: 'SUCCESS',
      error: 'ERROR',
      canceled: 'CANCELED',
      pending_dependency: 'PENDING_DEPENDENCY',
      canceled_dependency: 'CANCELED_DEPENDENCY',
      error_dependency: 'ERROR_DEPENDENCY',
      error_conflicts: 'ERROR_CONFLICTS'
    });
  }

  get (fields, params): AdAsyncRequest {
    return this.read(
      fields,
      params
    );
  }
}
