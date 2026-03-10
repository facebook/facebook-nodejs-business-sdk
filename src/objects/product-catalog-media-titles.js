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
import ProductCatalogMediaTitlesPost from './product-catalog-media-titles-post';

/**
 * ProductCatalogMediaTitles
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogMediaTitles extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalogMediaTitlesPost> {
    return this.createEdge(
      '/media_titles',
      fields,
      params,
      ProductCatalogMediaTitlesPost,
      pathOverride,
    );
  }
}
