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
 * ExportAdgroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExportAdgroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_id: 'ad_id',
      ad_name: 'ad_name',
      id: 'id'
    });
  }

  get (fields, params): ExportAdgroup {
    return this.read(
      fields,
      params
    );
  }
}
