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

/**
 * ProductCatalogProductSetsGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogProductSetsGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      data: 'data',
      paging: 'paging',
      summary: 'summary',
    });
  }

  static get IntegratedCheckoutEligibility (): Object {
    return Object.freeze({
      eligible: 'ELIGIBLE',
      not_eligible: 'NOT_ELIGIBLE',
    });
  }
  static get IntegratedCheckoutPartner (): Object {
    return Object.freeze({
      amazon: 'AMAZON',
      jest_e2e_amazon: 'JEST_E2E_AMAZON',
      lowes: 'LOWES',
      meli: 'MELI',
      none: 'NONE',
      shein: 'SHEIN',
      shopee_id: 'SHOPEE_ID',
      shopee_my: 'SHOPEE_MY',
      shopee_ph: 'SHOPEE_PH',
      shopee_sg: 'SHOPEE_SG',
      shopee_th: 'SHOPEE_TH',
      shopee_tw: 'SHOPEE_TW',
      shopee_vn: 'SHOPEE_VN',
      walmart: 'WALMART',
      zalando: 'ZALANDO',
    });
  }
}
