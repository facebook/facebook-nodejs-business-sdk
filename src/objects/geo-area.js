/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import InsightsResult from './insights-result';

/**
 * GeoArea
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GeoArea extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      country: 'country',
      id: 'id',
      name: 'name',
      timezone: 'timezone'
    });
  }

  getInsights (fields, params, fetchFirstPage = true): InsightsResult {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  get (fields, params): GeoArea {
    return this.read(
      fields,
      params
    );
  }
}
