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

/**
 * PagePostExperiment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePostExperiment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
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
      updated_time: 'updated_time'
    });
  }

  getInsights (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getPosts (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/posts'
    );
  }

  get (fields, params): PagePostExperiment {
    return this.read(
      fields,
      params
    );
  }
}
