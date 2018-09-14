/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AdScriptExecutionHistory from './ad-script-execution-history';

/**
 * AdScript
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdScript extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      api_version: 'api_version',
      created_time: 'created_time',
      creator_id: 'creator_id',
      id: 'id',
      name: 'name',
      schedule_spec: 'schedule_spec',
      script: 'script',
      status: 'status',
      updated_time: 'updated_time',
      user_id: 'user_id'
    });
  }

  getExecutionHistories (fields, params, fetchFirstPage = true): AdScriptExecutionHistory {
    return this.getEdge(
      AdScriptExecutionHistory,
      fields,
      params,
      fetchFirstPage,
      '/execution_histories'
    );
  }

  get (fields, params): AdScript {
    return this.read(
      fields,
      params
    );
  }
}
