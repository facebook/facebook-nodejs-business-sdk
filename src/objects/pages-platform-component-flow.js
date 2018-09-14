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
 * PagesPlatformComponentFlow
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagesPlatformComponentFlow extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app: 'app',
      cta: 'cta',
      id: 'id',
      page: 'page'
    });
  }

  getOrders (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/orders'
    );
  }

  get (fields, params): PagesPlatformComponentFlow {
    return this.read(
      fields,
      params
    );
  }
}
