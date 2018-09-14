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
 * PageCustomerInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCustomerInsights extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      fan_since: 'fan_since',
      gmt_offset: 'gmt_offset',
      id: 'id',
      review: 'review'
    });
  }

  get (fields, params): PageCustomerInsights {
    return this.read(
      fields,
      params
    );
  }
}
