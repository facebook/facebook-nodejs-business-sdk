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
 * AdSavedLocation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSavedLocation extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      cities: 'cities',
      countries: 'countries',
      country_groups: 'country_groups',
      custom_locations: 'custom_locations',
      geo_markets: 'geo_markets',
      id: 'id',
      location_sentences: 'location_sentences',
      name: 'name',
      regions: 'regions',
      zips: 'zips',
    });
  }


  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdSavedLocation {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdSavedLocation {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
