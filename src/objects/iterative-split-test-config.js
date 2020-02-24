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
 * IterativeSplitTestConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IterativeSplitTestConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      budget: 'budget',
      end_time: 'end_time',
      guidance: 'guidance',
      id: 'id',
      iterative_split_test_original_variant_id: 'iterative_split_test_original_variant_id',
      iterative_split_test_variant_to_split_mapping: 'iterative_split_test_variant_to_split_mapping',
      results_window: 'results_window',
      splits: 'splits',
      start_time: 'start_time',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): IterativeSplitTestConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
