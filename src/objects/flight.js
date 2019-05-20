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
 * Flight
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Flight extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      applinks: 'applinks',
      currency: 'currency',
      description: 'description',
      destination_airport: 'destination_airport',
      destination_city: 'destination_city',
      flight_id: 'flight_id',
      id: 'id',
      images: 'images',
      oneway_currency: 'oneway_currency',
      oneway_price: 'oneway_price',
      origin_airport: 'origin_airport',
      origin_city: 'origin_city',
      price: 'price',
      sanitized_images: 'sanitized_images',
      url: 'url',
    });
  }


  get (fields, params): Flight {
    return this.read(
      fields,
      params
    );
  }
}
