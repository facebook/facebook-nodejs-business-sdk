 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ProductFeedUploadGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      end_time: 'end_time',
      error_count: 'error_count',
      error_report: 'error_report',
      errors: 'errors',
      filename: 'filename',
      id: 'id',
      input_method: 'input_method',
      num_deleted_items: 'num_deleted_items',
      num_detected_items: 'num_detected_items',
      num_invalid_items: 'num_invalid_items',
      num_persisted_items: 'num_persisted_items',
      progresses: 'progresses',
      start_time: 'start_time',
      upload_complete: 'upload_complete',
      url: 'url',
      warning_count: 'warning_count',
    });
  }

  static get InputMethod (): Object {
    return Object.freeze({
      google_sheets_fetch: 'GOOGLE_SHEETS_FETCH',
      manual_upload: 'MANUAL_UPLOAD',
      reupload_existing: 'REUPLOAD_EXISTING',
      reupload_last_file: 'REUPLOAD_LAST_FILE',
      server_fetch: 'SERVER_FETCH',
      user_initiated_server_fetch: 'USER_INITIATED_SERVER_FETCH',
    });
  }
}
