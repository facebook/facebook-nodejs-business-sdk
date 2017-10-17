/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import ProductGroup from './product-group';
import ProductItem from './product-item';

/**
 * ProductSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSet extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
     auto_creation_url: 'auto_creation_url',
     filter: 'filter',
     id: 'id',
     name: 'name',
     product_catalog: 'product_catalog',
     product_count: 'product_count',
    });
  }


  getProductGroups(fields, params, fetchFirstPage = true): ProductGroup {
    return this.getEdge(
      ProductGroup,
      fields,
      params,
      fetchFirstPage,
      '/product_groups'
    );
  }

  getProducts(fields, params, fetchFirstPage = true): ProductItem {
    return this.getEdge(
      ProductItem,
      fields,
      params,
      fetchFirstPage,
      '/products'
    );
  }

  delete (fields, params): Object {
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
