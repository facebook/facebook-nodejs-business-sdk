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
 * EventExternalTicketInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventExternalTicketInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      max_sales_price: 'max_sales_price',
      min_sales_price: 'min_sales_price',
      sales_status: 'sales_status'
    });
  }

  get (fields, params): EventExternalTicketInfo {
    return this.read(
      fields,
      params
    );
  }
}
