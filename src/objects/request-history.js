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
 * RequestHistory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RequestHistory extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      api_version: 'api_version',
      created_time: 'created_time',
      error_code: 'error_code',
      graph_path: 'graph_path',
      http_method: 'http_method',
      post_params: 'post_params',
      query_params: 'query_params',
      id: 'id'
    });
  }

  static get HttpMethod (): Object {
    return Object.freeze({
      get: 'GET',
      post: 'POST',
      delete: 'DELETE'
    });
  }
}
