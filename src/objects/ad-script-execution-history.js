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
 * AdScriptExecutionHistory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdScriptExecutionHistory extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      changes: 'changes',
      complete_time: 'complete_time',
      execution_status: 'execution_status',
      script_id: 'script_id',
      script_schedule_spec_id: 'script_schedule_spec_id',
      start_time: 'start_time',
      id: 'id'
    });
  }

  get (fields, params): AdScriptExecutionHistory {
    return this.read(
      fields,
      params
    );
  }
}
