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
 * AsyncRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AsyncRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      result: 'result',
      status: 'status',
      type: 'type'
    });
  }

  static get Status (): Object {
    return Object.freeze({
      initialized: 'INITIALIZED',
      executing: 'EXECUTING',
      finished: 'FINISHED',
      error: 'ERROR'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      drafts: 'DRAFTS',
      batch_api: 'BATCH_API',
      async_adgroup_creation: 'ASYNC_ADGROUP_CREATION'
    });
  }

  get (fields, params): AsyncRequest {
    return this.read(
      fields,
      params
    );
  }
}
