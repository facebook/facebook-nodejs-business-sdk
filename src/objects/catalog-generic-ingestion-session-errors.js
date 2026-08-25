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
import Cursor from './../cursor';
import CatalogGenericIngestionSessionErrorsGet from './catalog-generic-ingestion-session-errors-get';

/**
 * CatalogGenericIngestionSessionErrors
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogGenericIngestionSessionErrors extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genget (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CatalogGenericIngestionSessionErrorsGet,
      fields,
      params,
      fetchFirstPage,
      '/errors'
    );
  }
}
