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
import AdSet from './ad-set';

/**
 * SavedAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SavedAudience extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account: 'account',
      approximate_count: 'approximate_count',
      description: 'description',
      id: 'id',
      name: 'name',
      permission_for_actions: 'permission_for_actions',
      run_status: 'run_status',
      sentence_lines: 'sentence_lines',
      targeting: 'targeting',
      time_created: 'time_created',
      time_updated: 'time_updated',
    });
  }


  getAdSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/adsets'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): SavedAudience {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
