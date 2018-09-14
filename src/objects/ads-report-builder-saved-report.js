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
 * AdsReportBuilderSavedReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderSavedReport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account_id: 'ad_account_id',
      attribution_windows: 'attribution_windows',
      creation_source: 'creation_source',
      creation_time: 'creation_time',
      date_interval: 'date_interval',
      date_preset: 'date_preset',
      dimension_groups: 'dimension_groups',
      dimensions: 'dimensions',
      filtering: 'filtering',
      id: 'id',
      is_mutated: 'is_mutated',
      last_access_time: 'last_access_time',
      last_report_snapshot_id: 'last_report_snapshot_id',
      last_report_snapshot_time: 'last_report_snapshot_time',
      locked_dimensions: 'locked_dimensions',
      metrics: 'metrics',
      old_report_schedule: 'old_report_schedule',
      report_name: 'report_name',
      report_snapshot_async_percent_completion: 'report_snapshot_async_percent_completion',
      report_snapshot_async_status: 'report_snapshot_async_status',
      schedule_frequency: 'schedule_frequency',
      sorting: 'sorting',
      start_date: 'start_date',
      status: 'status',
      subscribers: 'subscribers',
      update_time: 'update_time',
      user: 'user',
      user_dimensions: 'user_dimensions',
      user_metrics: 'user_metrics'
    });
  }

  getScheduleDReports (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/scheduled_reports'
    );
  }

  get (fields, params): AdsReportBuilderSavedReport {
    return this.read(
      fields,
      params
    );
  }
}
