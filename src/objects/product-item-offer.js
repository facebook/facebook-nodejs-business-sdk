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
 * ProductItemOffer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemOffer extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      availability_area: 'availability_area',
      availability_radius: 'availability_radius',
      id: 'id',
      raw_address_data: 'raw_address_data'
    });
  }

  get (fields, params): ProductItemOffer {
    return this.read(
      fields,
      params
    );
  }
}
