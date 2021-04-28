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
import BusinessUnit from './business-unit';

/**
 * AtlasCampaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AtlasCampaign extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_platform: 'ad_platform',
      alias: 'alias',
      cost_per_1k_impressions: 'cost_per_1k_impressions',
      cost_per_click: 'cost_per_click',
      cost_per_visit: 'cost_per_visit',
      created_by: 'created_by',
      created_date: 'created_date',
      even_credit_convs: 'even_credit_convs',
      even_credit_convs_per_1k_impress: 'even_credit_convs_per_1k_impress',
      even_credit_convs_per_click: 'even_credit_convs_per_click',
      even_credit_convs_per_visit: 'even_credit_convs_per_visit',
      even_credit_cpa: 'even_credit_cpa',
      even_credit_revenue: 'even_credit_revenue',
      even_credit_roas: 'even_credit_roas',
      first_click_convs: 'first_click_convs',
      first_click_convs_per_1k_impress: 'first_click_convs_per_1k_impress',
      first_click_convs_per_click: 'first_click_convs_per_click',
      first_click_convs_per_visit: 'first_click_convs_per_visit',
      first_click_cpa: 'first_click_cpa',
      first_click_revenue: 'first_click_revenue',
      first_click_roas: 'first_click_roas',
      first_touch_convs: 'first_touch_convs',
      first_touch_convs_per_1k_impress: 'first_touch_convs_per_1k_impress',
      first_touch_convs_per_click: 'first_touch_convs_per_click',
      first_touch_convs_per_visit: 'first_touch_convs_per_visit',
      first_touch_cpa: 'first_touch_cpa',
      first_touch_revenue: 'first_touch_revenue',
      first_touch_roas: 'first_touch_roas',
      id: 'id',
      is_archived: 'is_archived',
      last_click_convs: 'last_click_convs',
      last_click_convs_per_1k_impress: 'last_click_convs_per_1k_impress',
      last_click_convs_per_click: 'last_click_convs_per_click',
      last_click_convs_per_visit: 'last_click_convs_per_visit',
      last_click_cpa: 'last_click_cpa',
      last_click_revenue: 'last_click_revenue',
      last_click_roas: 'last_click_roas',
      last_click_with_extrapolation_convs: 'last_click_with_extrapolation_convs',
      last_click_with_extrapolation_convs_per_100_clicks: 'last_click_with_extrapolation_convs_per_100_clicks',
      last_click_with_extrapolation_convs_per_1k_impress: 'last_click_with_extrapolation_convs_per_1k_impress',
      last_click_with_extrapolation_convs_per_click: 'last_click_with_extrapolation_convs_per_click',
      last_click_with_extrapolation_convs_per_visit: 'last_click_with_extrapolation_convs_per_visit',
      last_click_with_extrapolation_cpa: 'last_click_with_extrapolation_cpa',
      last_click_with_extrapolation_revenue: 'last_click_with_extrapolation_revenue',
      last_click_with_extrapolation_roas: 'last_click_with_extrapolation_roas',
      last_click_with_extrapolation_unattributed: 'last_click_with_extrapolation_unattributed',
      last_modified_by: 'last_modified_by',
      last_modified_date: 'last_modified_date',
      last_touch_convs: 'last_touch_convs',
      last_touch_convs_per_1k_impress: 'last_touch_convs_per_1k_impress',
      last_touch_convs_per_click: 'last_touch_convs_per_click',
      last_touch_convs_per_visit: 'last_touch_convs_per_visit',
      last_touch_cpa: 'last_touch_cpa',
      last_touch_revenue: 'last_touch_revenue',
      last_touch_roas: 'last_touch_roas',
      name: 'name',
      net_media_cost: 'net_media_cost',
      positional_30fl_convs: 'positional_30fl_convs',
      positional_30fl_convs_per_1k_impress: 'positional_30fl_convs_per_1k_impress',
      positional_30fl_convs_per_click: 'positional_30fl_convs_per_click',
      positional_30fl_convs_per_visit: 'positional_30fl_convs_per_visit',
      positional_30fl_cpa: 'positional_30fl_cpa',
      positional_30fl_revenue: 'positional_30fl_revenue',
      positional_30fl_roas: 'positional_30fl_roas',
      positional_40fl_convs: 'positional_40fl_convs',
      positional_40fl_convs_per_1k_impress: 'positional_40fl_convs_per_1k_impress',
      positional_40fl_convs_per_click: 'positional_40fl_convs_per_click',
      positional_40fl_convs_per_visit: 'positional_40fl_convs_per_visit',
      positional_40fl_cpa: 'positional_40fl_cpa',
      positional_40fl_revenue: 'positional_40fl_revenue',
      positional_40fl_roas: 'positional_40fl_roas',
      report_click_through_rate: 'report_click_through_rate',
      report_clicks: 'report_clicks',
      report_impressions: 'report_impressions',
      report_visits: 'report_visits',
      time_decay_1day_convs: 'time_decay_1day_convs',
      time_decay_1day_convs_per_1k_impress: 'time_decay_1day_convs_per_1k_impress',
      time_decay_1day_convs_per_click: 'time_decay_1day_convs_per_click',
      time_decay_1day_convs_per_visit: 'time_decay_1day_convs_per_visit',
      time_decay_1day_cpa: 'time_decay_1day_cpa',
      time_decay_1day_revenue: 'time_decay_1day_revenue',
      time_decay_1day_roas: 'time_decay_1day_roas',
      time_decay_7day_convs: 'time_decay_7day_convs',
      time_decay_7day_convs_per_1k_impress: 'time_decay_7day_convs_per_1k_impress',
      time_decay_7day_convs_per_click: 'time_decay_7day_convs_per_click',
      time_decay_7day_convs_per_visit: 'time_decay_7day_convs_per_visit',
      time_decay_7day_cpa: 'time_decay_7day_cpa',
      time_decay_7day_revenue: 'time_decay_7day_revenue',
      time_decay_7day_roas: 'time_decay_7day_roas',
      type: 'type',
    });
  }


  getAdSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ad_sets'
    );
  }

  getBusinessUnit (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessUnit,
      fields,
      params,
      fetchFirstPage,
      '/business_unit'
    );
  }

  getMetricsBreakdown (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/metrics_breakdown'
    );
  }

  getSources (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/sources'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AtlasCampaign {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
