/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AdPlacePageSetInvalidLocation from './ad-place-page-set-invalid-location';
import Page from './page';
import PageLocationsBreakdown from './page-locations-breakdown';

/**
 * AdPlacePageSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPlacePageSet extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      id: 'id',
      location_types: 'location_types',
      name: 'name',
      pages_count: 'pages_count',
      parent_page: 'parent_page'
    });
  }

  static get LocationTypes (): Object {
    return Object.freeze({
      recent: 'recent',
      home: 'home'
    });
  }

  getInvalidLocations (fields, params, fetchFirstPage = true): AdPlacePageSetInvalidLocation {
    return this.getEdge(
      AdPlacePageSetInvalidLocation,
      fields,
      params,
      fetchFirstPage,
      '/invalid_locations'
    );
  }

  getLocations (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/locations'
    );
  }

  getLocationsBreakdown (fields, params, fetchFirstPage = true): PageLocationsBreakdown {
    return this.getEdge(
      PageLocationsBreakdown,
      fields,
      params,
      fetchFirstPage,
      '/locations_breakdown'
    );
  }

  getTargetedLocations (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/targeted_locations'
    );
  }

  get (fields, params): AdPlacePageSet {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdPlacePageSet {
    return super.update(
      params
    );
  }
}
