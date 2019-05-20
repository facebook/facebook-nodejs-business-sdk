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
 * FoodDrinkOrder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FoodDrinkOrder extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      admin_note: 'admin_note',
      creation_time: 'creation_time',
      customer_name: 'customer_name',
      customer_phone_number: 'customer_phone_number',
      id: 'id',
      note: 'note',
      order_details: 'order_details',
      state: 'state',
      update_time: 'update_time',
    });
  }

  static get State (): Object {
    return Object.freeze({
      cancelled: 'CANCELLED',
      confirmed: 'CONFIRMED',
      draft: 'DRAFT',
      expired: 'EXPIRED',
      on_delivery: 'ON_DELIVERY',
      pending: 'PENDING',
      ready_for_pickup: 'READY_FOR_PICKUP',
      serving: 'SERVING',
    });
  }

  get (fields, params): FoodDrinkOrder {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): FoodDrinkOrder {
    return super.update(
      params
    );
  }
}
