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
 * AdReportSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdReportSpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account_id: 'account_id',
      actions_group_by: 'actions_group_by',
      creation_source: 'creation_source',
      data_columns: 'data_columns',
      date_preset: 'date_preset',
      export_columns: 'export_columns',
      filters: 'filters',
      format_version: 'format_version',
      id: 'id',
      insights_section: 'insights_section',
      name: 'name',
      report_schedule_id: 'report_schedule_id',
      sort_by: 'sort_by',
      sort_dir: 'sort_dir',
      time_increment: 'time_increment',
      time_interval: 'time_interval',
      time_ranges: 'time_ranges',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AdReportSpec {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
