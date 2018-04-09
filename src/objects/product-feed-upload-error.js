/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import ProductFeedUploadErrorSample from './product-feed-upload-error-sample';

/**
 * ProductFeedUploadError
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadError extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      error_type: 'error_type',
      id: 'id',
      severity: 'severity',
      summary: 'summary',
      total_count: 'total_count'
    });
  }

  static get Severity (): Object {
    return Object.freeze({
      fatal: 'FATAL',
      warning: 'WARNING'
    });
  }

  getSamples (fields, params, fetchFirstPage = true): ProductFeedUploadErrorSample {
    return this.getEdge(
      ProductFeedUploadErrorSample,
      fields,
      params,
      fetchFirstPage,
      '/samples'
    );
  }

  get (fields, params): ProductFeedUploadError {
    return this.read(
      fields,
      params
    );
  }
}
