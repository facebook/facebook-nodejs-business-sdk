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
 * MeasurementPlayground
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MeasurementPlayground extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      parameters: 'parameters',
      report_type: 'report_type',
      report_urls: 'report_urls',
      reports_zip_url: 'reports_zip_url',
      result: 'result',
      status: 'status'
    });
  }

  get (fields, params): MeasurementPlayground {
    return this.read(
      fields,
      params
    );
  }
}
