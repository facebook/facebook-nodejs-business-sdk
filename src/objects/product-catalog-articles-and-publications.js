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
import ProductCatalogArticlesAndPublicationsPost from './product-catalog-articles-and-publications-post';

/**
 * ProductCatalogArticlesAndPublications
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogArticlesAndPublications extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalogArticlesAndPublicationsPost> {
    return this.createEdge(
      '/articles_and_publications',
      fields,
      params,
      ProductCatalogArticlesAndPublicationsPost,
      pathOverride,
    );
  }
}
