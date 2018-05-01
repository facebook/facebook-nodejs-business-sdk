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

/**
 * AdStudyObjective
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudyObjective extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      custom_attributes: 'custom_attributes',
      id: 'id',
      is_primary: 'is_primary',
      last_updated_results: 'last_updated_results',
      name: 'name',
      results: 'results',
      type: 'type'
    });
  }

  static get Breakdowns (): Object {
    return Object.freeze({
      age: 'age',
      cell_id: 'cell_id',
      gender: 'gender',
      country: 'country'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      sales: 'SALES',
      nonsales: 'NONSALES',
      mae: 'MAE',
      telco: 'TELCO',
      ftl: 'FTL',
      mai: 'MAI',
      partner: 'PARTNER',
      brandlift: 'BRANDLIFT',
      brand: 'BRAND'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): AdStudyObjective {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdStudyObjective {
    return super.update(
      params
    );
  }
}
