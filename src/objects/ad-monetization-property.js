/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AdNetworkAnalyticsSyncQueryResult from './ad-network-analytics-sync-query-result';
import AdNetworkAnalyticsAsyncQueryResult from './ad-network-analytics-async-query-result';

/**
 * AdMonetizationProperty
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdMonetizationProperty extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
    });
  }


  getAdNetworkAnalytics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AdNetworkAnalyticsSyncQueryResult {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AdNetworkAnalyticsSyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics'
    );
  }

  createAdNetworkAnalytic (fields: Array<string>, params: Object = {}): AdMonetizationProperty {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/adnetworkanalytics',
      fields,
      params,
      AdMonetizationProperty
    );
  }

  getAdNetworkAnalyticsResults (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AdNetworkAnalyticsAsyncQueryResult {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AdNetworkAnalyticsAsyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics_results'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdMonetizationProperty {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
