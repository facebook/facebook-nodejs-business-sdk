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
 * PageStoreVisitsCustomAudiencesEligibleCountries
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageStoreVisitsCustomAudiencesEligibleCountries extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      country_code: 'country_code',
      measurable_locations_count: 'measurable_locations_count',
      total_locations_count: 'total_locations_count',
      id: 'id'
    });
  }

  get (fields, params): PageStoreVisitsCustomAudiencesEligibleCountries {
    return this.read(
      fields,
      params
    );
  }
}
