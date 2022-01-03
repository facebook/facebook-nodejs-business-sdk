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
 * SavedAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SavedAudience extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account: 'account',
      approximate_count: 'approximate_count',
      approximate_count_64bit: 'approximate_count_64bit',
      approximate_count_lower_bound: 'approximate_count_lower_bound',
      approximate_count_upper_bound: 'approximate_count_upper_bound',
      delete_time: 'delete_time',
      description: 'description',
      extra_info: 'extra_info',
      id: 'id',
      name: 'name',
      operation_status: 'operation_status',
      page_deletion_marked_delete_time: 'page_deletion_marked_delete_time',
      permission_for_actions: 'permission_for_actions',
      run_status: 'run_status',
      sentence_lines: 'sentence_lines',
      targeting: 'targeting',
      time_created: 'time_created',
      time_updated: 'time_updated',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): SavedAudience {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
