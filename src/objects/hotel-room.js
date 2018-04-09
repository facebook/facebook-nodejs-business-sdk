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
 * HotelRoom
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HotelRoom extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      applinks: 'applinks',
      base_price: 'base_price',
      currency: 'currency',
      description: 'description',
      id: 'id',
      images: 'images',
      margin_level: 'margin_level',
      name: 'name',
      room_id: 'room_id',
      sale_price: 'sale_price',
      url: 'url'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): HotelRoom {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): HotelRoom {
    return super.update(
      params
    );
  }
}
