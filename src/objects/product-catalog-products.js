 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';
import ProductCatalogProductsPost from './product-catalog-products-post';

/**
 * ProductCatalogProducts
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogProducts extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalogProductsPost> {
    return this.createEdge(
      '/products',
      fields,
      params,
      ProductCatalogProductsPost,
      pathOverride,
    );
  }
}
