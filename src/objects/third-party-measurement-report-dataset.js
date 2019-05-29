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
 * ThirdPartyMeasurementReportDataset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyMeasurementReportDataset extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      category: 'category',
      id: 'id',
      partner: 'partner',
      product: 'product',
      schema: 'schema',
    });
  }

  static get Category (): Object {
    return Object.freeze({
      mta: 'MTA',
    });
  }
  static get Product (): Object {
    return Object.freeze({
      custom: 'CUSTOM',
      mta: 'MTA',
      viewability: 'VIEWABILITY',
    });
  }

  get (fields, params): ThirdPartyMeasurementReportDataset {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): ThirdPartyMeasurementReportDataset {
    return super.update(
      params
    );
  }
}
