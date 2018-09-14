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
 * BigDataUploadSession
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BigDataUploadSession extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      columns: 'columns',
      id: 'id',
      number_chunks: 'number_chunks',
      status: 'status'
    });
  }

  getChunks (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/chunks'
    );
  }

  get (fields, params): BigDataUploadSession {
    return this.read(
      fields,
      params
    );
  }
}
