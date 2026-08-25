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
import ProductCatalogProfessionalServicesItemPut from './product-catalog-professional-services-item-put';

/**
 * ProductCatalogProfessionalServicesItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogProfessionalServicesItem extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genput (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalogProfessionalServicesItemPut> {
    return this.putEdge(
      '/',
      fields,
      params,
      ProductCatalogProfessionalServicesItemPut,
      pathOverride,
    );
  }
}
