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
      id: 'id',
      input_method: 'input_method',
      start_time: 'start_time',
      url: 'url'
    });
  }

  static get InputMethod (): Object {
    return Object.freeze({
      manual_upload: 'MANUAL_UPLOAD',
      server_fetch: 'SERVER_FETCH',
      reupload_last_file: 'REUPLOAD_LAST_FILE',
      user_initiated_server_fetch: 'USER_INITIATED_SERVER_FETCH'
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
