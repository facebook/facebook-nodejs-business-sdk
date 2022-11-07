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
 * PagePostExperiment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePostExperiment extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      auto_resolve_settings: 'auto_resolve_settings',
      creation_time: 'creation_time',
      creator: 'creator',
      declared_winning_time: 'declared_winning_time',
      description: 'description',
      id: 'id',
      insight_snapshots: 'insight_snapshots',
      name: 'name',
      optimization_goal: 'optimization_goal',
      publish_status: 'publish_status',
      publish_time: 'publish_time',
      scheduled_experiment_timestamp: 'scheduled_experiment_timestamp',
      updated_time: 'updated_time',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): PagePostExperiment {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
