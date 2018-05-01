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
 * PageInsightsAsyncExportRun
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageInsightsAsyncExportRun extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      data_level: 'data_level',
      filters: 'filters',
      format: 'format',
      gen_report_date: 'gen_report_date',
      id: 'id',
      report_end_date: 'report_end_date',
      report_start_date: 'report_start_date',
      sorters: 'sorters',
      status: 'status'
    });
  }

  get (fields, params): PageInsightsAsyncExportRun {
    return this.read(
      fields,
      params
    );
  }
}
