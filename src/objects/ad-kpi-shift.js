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
 * AdKpiShift
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdKpiShift extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_set: 'ad_set',
      cost_per_result_shift: 'cost_per_result_shift',
      enough_effective_days: 'enough_effective_days',
      result_indicator: 'result_indicator',
      result_shift: 'result_shift',
      spend_shift: 'spend_shift',
      id: 'id'
    });
  }

  static get EventSource (): Object {
    return Object.freeze({
      ads_delivery_dashboard_bunnylol: 'ADS_DELIVERY_DASHBOARD_BUNNYLOL',
      ads_delivery_debugger: 'ADS_DELIVERY_DEBUGGER',
      ads_delivery_insights_availability_tool: 'ADS_DELIVERY_INSIGHTS_AVAILABILITY_TOOL',
      ads_manager_delivery_column: 'ADS_MANAGER_DELIVERY_COLUMN',
      checkout_graduation_flow: 'CHECKOUT_GRADUATION_FLOW',
      notifications: 'NOTIFICATIONS',
      power_editor_delivery_column: 'POWER_EDITOR_DELIVERY_COLUMN',
      best_practices_report: 'BEST_PRACTICES_REPORT',
      unknown: 'UNKNOWN'
    });
  }

  get (fields, params): AdKpiShift {
    return this.read(
      fields,
      params
    );
  }
}
