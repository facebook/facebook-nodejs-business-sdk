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
 * PageLocationsHealthSummary
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageLocationsHealthSummary extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      checked_count: 'checked_count',
      health_check: 'health_check',
      unhealthy_count: 'unhealthy_count',
      id: 'id'
    });
  }
}
