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
import AudienceInsightsRule from './audience-insights-rule';

/**
 * AudienceStudy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudienceStudy extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audience_definition: 'audience_definition',
      category: 'category',
      created_by: 'created_by',
      creation_time: 'creation_time',
      custom_audience: 'custom_audience',
      description: 'description',
      end_date: 'end_date',
      id: 'id',
      name: 'name',
      purpose: 'purpose',
      start_date: 'start_date',
      status: 'status'
    });
  }

  static get StudyStatus (): Object {
    return Object.freeze({
      expired: 'EXPIRED',
      completed: 'COMPLETED',
      running: 'RUNNING',
      scheduled: 'SCHEDULED'
    });
  }

  getRules (fields, params, fetchFirstPage = true): AudienceInsightsRule {
    return this.getEdge(
      AudienceInsightsRule,
      fields,
      params,
      fetchFirstPage,
      '/rules'
    );
  }

  getSamplePosts (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/sample_posts'
    );
  }

  get (fields, params): AudienceStudy {
    return this.read(
      fields,
      params
    );
  }
}
