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
import ProductCatalogAppsAndSoftwarePost from './product-catalog-apps-and-software-post';

/**
 * ProductCatalogAppsAndSoftware
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogAppsAndSoftware extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalogAppsAndSoftwarePost> {
    return this.createEdge(
      '/apps_and_software',
      fields,
      params,
      ProductCatalogAppsAndSoftwarePost,
      pathOverride,
    );
  }
}
