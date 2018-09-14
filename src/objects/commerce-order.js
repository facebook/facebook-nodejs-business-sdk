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
 * CommerceOrder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceOrder extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      created: 'created',
      email: 'email',
      id: 'id',
      items: 'items',
      last_updated: 'last_updated',
      merchant_order_id: 'merchant_order_id',
      ship_by_date: 'ship_by_date'
    });
  }

  static get Status (): Object {
    return Object.freeze({
      created: 'CREATED',
      in_progress: 'IN_PROGRESS',
      shipped: 'SHIPPED',
      cancelled: 'CANCELLED',
      refunded: 'REFUNDED'
    });
  }

  getRefundStatus (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/refund_status'
    );
  }

  get (fields, params): CommerceOrder {
    return this.read(
      fields,
      params
    );
  }
}
