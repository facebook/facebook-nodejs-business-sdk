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
 * ProductFeedUploadDiagnostics
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadDiagnostics extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      last_modified_time: 'last_modified_time',
      report_url: 'report_url',
    });
  }

}
