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
import ProductItem from './product-item';

/**
 * ProductSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSet extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      auto_creation_url: 'auto_creation_url',
      filter: 'filter',
      id: 'id',
      name: 'name',
      product_catalog: 'product_catalog',
      product_count: 'product_count'
    });
  }

  getProducts (fields, params, fetchFirstPage = true): ProductItem {
    return this.getEdge(
      ProductItem,
      fields,
      params,
      fetchFirstPage,
      '/products'
    );
  }

  getVehicles (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/vehicles'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): ProductSet {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): ProductSet {
    return super.update(
      params
    );
  }
}
