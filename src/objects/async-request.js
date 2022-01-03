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
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      result: 'result',
      status: 'status',
      type: 'type',
    });
  }

  static get Status (): Object {
    return Object.freeze({
      error: 'ERROR',
      executing: 'EXECUTING',
      finished: 'FINISHED',
      initialized: 'INITIALIZED',
    });
  }
  static get Type (): Object {
    return Object.freeze({
      async_adgroup_creation: 'ASYNC_ADGROUP_CREATION',
      batch_api: 'BATCH_API',
      drafts: 'DRAFTS',
    });
  }
}
