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
 * UserNuxStatuses
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserNuxStatuses extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      max_views: 'max_views',
      nux_data: 'nux_data',
      nux_id: 'nux_id',
      id: 'id'
    });
  }

  get (fields, params): UserNuxStatuses {
    return this.read(
      fields,
      params
    );
  }
}
