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
 * TargetingGeoLocation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocation extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      cities: 'cities',
      countries: 'countries',
      country_groups: 'country_groups',
      custom_locations: 'custom_locations',
      electoral_districts: 'electoral_districts',
      geo_markets: 'geo_markets',
      location_set_ids: 'location_set_ids',
      location_types: 'location_types',
      places: 'places',
      political_districts: 'political_districts',
      regions: 'regions',
      zips: 'zips'
    });
  }
}
