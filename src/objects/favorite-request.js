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
 * FavoriteRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FavoriteRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      api_version: 'api_version',
      description: 'description',
      graph_path: 'graph_path',
      hash: 'hash',
      http_method: 'http_method',
      id: 'id',
      post_params: 'post_params',
      query_params: 'query_params'
    });
  }

  static get HttpMethod (): Object {
    return Object.freeze({
      get: 'GET',
      post: 'POST',
      delete: 'DELETE'
    });
  }
  static get ApiVersion (): Object {
    return Object.freeze({
      unversioned: 'unversioned',
      v1_0: 'v1.0',
      v2_0: 'v2.0',
      v2_1: 'v2.1',
      v2_2: 'v2.2',
      v2_3: 'v2.3',
      v2_4: 'v2.4',
      v2_5: 'v2.5',
      v2_6: 'v2.6',
      v2_7: 'v2.7',
      v2_8: 'v2.8',
      v2_9: 'v2.9',
      v2_10: 'v2.10',
      v2_11: 'v2.11',
      v2_12: 'v2.12',
      v3_0: 'v3.0',
      v3_1: 'v3.1',
      v3_2: 'v3.2',
      v3_3: 'v3.3'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): FavoriteRequest {
    return this.read(
      fields,
      params
    );
  }
}
