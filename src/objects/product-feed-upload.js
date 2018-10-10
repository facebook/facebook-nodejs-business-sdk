/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import ProductFeedUploadError from './product-feed-upload-error';

/**
 * ProductFeedUpload
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUpload extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      end_time: 'end_time',
      error_count: 'error_count',
      filename: 'filename',
      id: 'id',
      input_method: 'input_method',
      num_deleted_items: 'num_deleted_items',
      num_detected_items: 'num_detected_items',
      num_invalid_items: 'num_invalid_items',
      num_persisted_items: 'num_persisted_items',
      start_time: 'start_time',
      url: 'url',
      warning_count: 'warning_count'
    });
  }

  static get InputMethod (): Object {
    return Object.freeze({
      manual_upload: 'Manual Upload',
      server_fetch: 'Server Fetch',
      reupload_last_file: 'Reupload Last File',
      user_initiated_server_fetch: 'User initiated server fetch'
    });
  }

  getErrors (fields, params, fetchFirstPage = true): ProductFeedUploadError {
    return this.getEdge(
      ProductFeedUploadError,
      fields,
      params,
      fetchFirstPage,
      '/errors'
    );
  }

  get (fields, params): ProductFeedUpload {
    return this.read(
      fields,
      params
    );
  }
}
