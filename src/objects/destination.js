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
 * Destination
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Destination extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      address: 'address',
      applinks: 'applinks',
      currency: 'currency',
      description: 'description',
      destination_id: 'destination_id',
      id: 'id',
      images: 'images',
      name: 'name',
      price: 'price',
      price_change: 'price_change',
      sanitized_images: 'sanitized_images',
      types: 'types',
      url: 'url'
    });
  }

  get (fields, params): Destination {
    return this.read(
      fields,
      params
    );
  }
}
