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
import Cursor from './../cursor';

/**
 * CommerceOrder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceOrder extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      buyer_details: 'buyer_details',
      channel: 'channel',
      created: 'created',
      estimated_payment_details: 'estimated_payment_details',
      id: 'id',
      is_group_buy: 'is_group_buy',
      is_test_order: 'is_test_order',
      last_updated: 'last_updated',
      merchant_order_id: 'merchant_order_id',
      order_status: 'order_status',
      selected_shipping_option: 'selected_shipping_option',
      ship_by_date: 'ship_by_date',
      shipping_address: 'shipping_address',
    });
  }

  static get Filters (): Object {
    return Object.freeze({
      has_cancellations: 'HAS_CANCELLATIONS',
      has_fulfillments: 'HAS_FULFILLMENTS',
      has_refunds: 'HAS_REFUNDS',
      no_cancellations: 'NO_CANCELLATIONS',
      no_refunds: 'NO_REFUNDS',
      no_shipments: 'NO_SHIPMENTS',
    });
  }
  static get State (): Object {
    return Object.freeze({
      completed: 'COMPLETED',
      created: 'CREATED',
      fb_processing: 'FB_PROCESSING',
      in_progress: 'IN_PROGRESS',
    });
  }
  static get ReasonCode (): Object {
    return Object.freeze({
      buyers_remorse: 'BUYERS_REMORSE',
      damaged_goods: 'DAMAGED_GOODS',
      facebook_initiated: 'FACEBOOK_INITIATED',
      not_as_described: 'NOT_AS_DESCRIBED',
      quality_issue: 'QUALITY_ISSUE',
      refund_compromised: 'REFUND_COMPROMISED',
      refund_for_return: 'REFUND_FOR_RETURN',
      refund_reason_other: 'REFUND_REASON_OTHER',
      refund_sfi_fake: 'REFUND_SFI_FAKE',
      refund_sfi_real: 'REFUND_SFI_REAL',
      wrong_item: 'WRONG_ITEM',
    });
  }

  createAcknowledgeOrder (fields: Array<string>, params: Object = {}): Promise<CommerceOrder> {
    return this.createEdge(
      '/acknowledge_order',
      fields,
      params,
      CommerceOrder
    );
  }

  getCancellations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/cancellations'
    );
  }

  createCancellation (fields: Array<string>, params: Object = {}): Promise<CommerceOrder> {
    return this.createEdge(
      '/cancellations',
      fields,
      params,
      CommerceOrder
    );
  }

  getItems (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/items'
    );
  }

  getPayments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/payments'
    );
  }

  getPromotionDetails (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/promotion_details'
    );
  }

  getPromotions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/promotions'
    );
  }

  getRefunds (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/refunds'
    );
  }

  createRefund (fields: Array<string>, params: Object = {}): Promise<CommerceOrder> {
    return this.createEdge(
      '/refunds',
      fields,
      params,
      CommerceOrder
    );
  }

  getReturns (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/returns'
    );
  }

  getShipments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/shipments'
    );
  }

  createShipment (fields: Array<string>, params: Object = {}): Promise<CommerceOrder> {
    return this.createEdge(
      '/shipments',
      fields,
      params,
      CommerceOrder
    );
  }

  createUpdateShipment (fields: Array<string>, params: Object = {}): Promise<CommerceOrder> {
    return this.createEdge(
      '/update_shipment',
      fields,
      params,
      CommerceOrder
    );
  }

  
  get (fields: Array<string>, params: Object = {}): CommerceOrder {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
