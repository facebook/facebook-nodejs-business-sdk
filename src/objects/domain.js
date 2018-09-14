/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import InsightsQueryResult from './insights-query-result';

/**
 * Domain
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Domain extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name: 'name',
      url: 'url'
    });
  }

  getUrlInsights (fields, params, fetchFirstPage = true): InsightsQueryResult {
    return this.getEdge(
      InsightsQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/url_insights'
    );
  }

  get (fields, params): Domain {
    return this.read(
      fields,
      params
    );
  }
}
