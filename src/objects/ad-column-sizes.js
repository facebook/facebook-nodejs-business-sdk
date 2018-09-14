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
 * AdColumnSizes
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdColumnSizes extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      admarket_account: 'admarket_account',
      app_id: 'app_id',
      columns: 'columns',
      id: 'id',
      owner: 'owner',
      page: 'page',
      report: 'report',
      tab: 'tab',
      view: 'view'
    });
  }

  get (fields, params): AdColumnSizes {
    return this.read(
      fields,
      params
    );
  }
}
