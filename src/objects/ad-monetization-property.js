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
      id: 'id'
    });
  }

  static get AggregationPeriod (): Object {
    return Object.freeze({
      hour: 'HOUR',
      day: 'DAY',
      total: 'TOTAL'
    });
  }
  static get Breakdowns (): Object {
    return Object.freeze({
      age: 'AGE',
      app: 'APP',
      country: 'COUNTRY',
      delivery_method: 'DELIVERY_METHOD',
      display_format: 'DISPLAY_FORMAT',
      deal: 'DEAL',
      deal_ad: 'DEAL_AD',
      deal_page: 'DEAL_PAGE',
      gender: 'GENDER',
      placement: 'PLACEMENT',
      platform: 'PLATFORM',
      property: 'PROPERTY',
      clicked_view_tag: 'CLICKED_VIEW_TAG',
      fail_reason: 'FAIL_REASON'
    });
  }
  static get Metrics (): Object {
    return Object.freeze({
      fb_ad_network_bidding_request: 'FB_AD_NETWORK_BIDDING_REQUEST',
      fb_ad_network_bidding_response: 'FB_AD_NETWORK_BIDDING_RESPONSE',
      fb_ad_network_bidding_bid_rate: 'FB_AD_NETWORK_BIDDING_BID_RATE',
      fb_ad_network_bidding_win_rate: 'FB_AD_NETWORK_BIDDING_WIN_RATE',
      fb_ad_network_request: 'FB_AD_NETWORK_REQUEST',
      fb_ad_network_filled_request: 'FB_AD_NETWORK_FILLED_REQUEST',
      fb_ad_network_fill_rate: 'FB_AD_NETWORK_FILL_RATE',
      fb_ad_network_imp: 'FB_AD_NETWORK_IMP',
      fb_ad_network_show_rate: 'FB_AD_NETWORK_SHOW_RATE',
      fb_ad_network_click: 'FB_AD_NETWORK_CLICK',
      fb_ad_network_ctr: 'FB_AD_NETWORK_CTR',
      fb_ad_network_bidding_revenue: 'FB_AD_NETWORK_BIDDING_REVENUE',
      fb_ad_network_revenue: 'FB_AD_NETWORK_REVENUE',
      fb_ad_network_cpm: 'FB_AD_NETWORK_CPM',
      fb_ad_network_video_guarantee_revenue: 'FB_AD_NETWORK_VIDEO_GUARANTEE_REVENUE',
      fb_ad_network_video_view: 'FB_AD_NETWORK_VIDEO_VIEW',
      fb_ad_network_video_view_rate: 'FB_AD_NETWORK_VIDEO_VIEW_RATE',
      fb_ad_network_video_mrc: 'FB_AD_NETWORK_VIDEO_MRC',
      fb_ad_network_video_mrc_rate: 'FB_AD_NETWORK_VIDEO_MRC_RATE',
      fb_ad_network_win_rate: 'FB_AD_NETWORK_WIN_RATE',
      fb_ad_network_direct_total_revenue: 'FB_AD_NETWORK_DIRECT_TOTAL_REVENUE',
      fb_ad_network_direct_publisher_bill: 'FB_AD_NETWORK_DIRECT_PUBLISHER_BILL',
      fb_ad_network_fast_click_rate: 'FB_AD_NETWORK_FAST_CLICK_RATE',
      fb_ad_network_fast_return_rate: 'FB_AD_NETWORK_FAST_RETURN_RATE',
      fb_ad_network_click_value_score: 'FB_AD_NETWORK_CLICK_VALUE_SCORE',
      fb_ad_network_fast_click_numerator: 'FB_AD_NETWORK_FAST_CLICK_NUMERATOR',
      fb_ad_network_fast_click_denominator: 'FB_AD_NETWORK_FAST_CLICK_DENOMINATOR',
      fb_ad_network_fast_return_numerator: 'FB_AD_NETWORK_FAST_RETURN_NUMERATOR',
      fb_ad_network_fast_return_denominator: 'FB_AD_NETWORK_FAST_RETURN_DENOMINATOR',
      fb_ad_network_click_value_score_numerator: 'FB_AD_NETWORK_CLICK_VALUE_SCORE_NUMERATOR',
      fb_ad_network_click_value_score_denominator: 'FB_AD_NETWORK_CLICK_VALUE_SCORE_DENOMINATOR',
      fb_ad_network_no_fill: 'FB_AD_NETWORK_NO_FILL',
      fb_ad_network_no_bid: 'FB_AD_NETWORK_NO_BID'
    });
  }
  static get OrderingColumn (): Object {
    return Object.freeze({
      time: 'TIME',
      value: 'VALUE',
      metric: 'METRIC'
    });
  }
  static get OrderingType (): Object {
    return Object.freeze({
      ascending: 'ASCENDING',
      descending: 'DESCENDING'
    });
  }

  getAdNetworkAnalytics (fields, params, fetchFirstPage = true): AdNetworkAnalyticsSyncQueryResult {
    return this.getEdge(
      AdNetworkAnalyticsSyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics'
    );
  }

  createAdNetworkAnalytic (fields, params): AdMonetizationProperty {
    return this.createEdge(
      '/adnetworkanalytics',
      fields,
      params,
      AdMonetizationProperty
    );
  }

  getAdNetworkAnalyticsResults (fields, params, fetchFirstPage = true): AdNetworkAnalyticsAsyncQueryResult {
    return this.getEdge(
      AdNetworkAnalyticsAsyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics_results'
    );
  }

  get (fields, params): AdMonetizationProperty {
    return this.read(
      fields,
      params
    );
  }
}
