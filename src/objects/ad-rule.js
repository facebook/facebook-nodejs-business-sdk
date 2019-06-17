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
import Cursor from './../cursor';
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
      updated_time: 'updated_time',
    });
  }

  static get Status (): Object {
    return Object.freeze({
      deleted: 'DELETED',
      disabled: 'DISABLED',
      enabled: 'ENABLED',
    });
  }

  createExecute (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/execute',
      fields,
      params,
      
    );
  }

  getHistory (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdRuleHistory,
      fields,
      params,
      fetchFirstPage,
      '/history'
    );
  }

  createPreview (fields: Array<string>, params: Object = {}): AdRule {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/preview',
      fields,
      params,
      AdRule
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdRule {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdRule {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
