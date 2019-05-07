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
 * ProductGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      product_catalog: 'product_catalog',
      retailer_id: 'retailer_id',
      variants: 'variants'
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

  createProduct (fields, params): ProductItem {
    return this.createEdge(
      '/products',
      fields,
      params,
      ProductItem
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): ProductGroup {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): ProductGroup {
    return super.update(
      params
    );
  }
}
