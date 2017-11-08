/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import AdRuleHistory from './ad-rule-history';

/**
 * AdRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      created_by: 'created_by',
      created_time: 'created_time',
      evaluation_spec: 'evaluation_spec',
      execution_spec: 'execution_spec',
      id: 'id',
      name: 'name',
      schedule_spec: 'schedule_spec',
      status: 'status',
      updated_time: 'updated_time'
    });
  }

  static get Status (): Object {
    return Object.freeze({
      enabled: 'ENABLED',
      disabled: 'DISABLED',
      deleted: 'DELETED'
    });
  }

  getHistory (fields, params, fetchFirstPage = true): AdRuleHistory {
    return this.getEdge(
      AdRuleHistory,
      fields,
      params,
      fetchFirstPage,
      '/history'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): AdRule {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdRule {
    return super.update(
      params
    );
  }
}
