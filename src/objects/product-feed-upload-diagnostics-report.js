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
 * ProductFeedUploadDiagnosticsReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadDiagnosticsReport extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      last_updated_time: 'last_updated_time',
      report_url: 'report_url',
    });
  }

}
