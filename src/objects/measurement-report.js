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
 * MeasurementReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MeasurementReport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      download_urls: 'download_urls',
      id: 'id',
      metadata: 'metadata',
      report_type: 'report_type',
      status: 'status',
      upload_urls: 'upload_urls'
    });
  }

  static get ReportType (): Object {
    return Object.freeze({
      multi_channel_report: 'multi_channel_report',
      video_metrics_report: 'video_metrics_report',
      fruit_rollup_report: 'fruit_rollup_report',
      third_party_mta_report: 'third_party_mta_report',
      partner_lift_study_report: 'partner_lift_study_report',
      mmm_report: 'mmm_report'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): MeasurementReport {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): MeasurementReport {
    return super.update(
      params
    );
  }
}
