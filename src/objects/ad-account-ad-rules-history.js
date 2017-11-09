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
 * AdAccountAdRulesHistory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAdRulesHistory extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      evaluation_spec: 'evaluation_spec',
      exception_code: 'exception_code',
      exception_message: 'exception_message',
      execution_spec: 'execution_spec',
      is_manual: 'is_manual',
      results: 'results',
      rule_id: 'rule_id',
      schedule_spec: 'schedule_spec',
      timestamp: 'timestamp'
    });
  }
}
