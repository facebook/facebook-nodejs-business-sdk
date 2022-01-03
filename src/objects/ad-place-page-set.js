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
 * AdPlacePageSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPlacePageSet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account_id: 'account_id',
      id: 'id',
      location_types: 'location_types',
      name: 'name',
      pages_count: 'pages_count',
      parent_page: 'parent_page',
    });
  }

  static get LocationTypes (): Object {
    return Object.freeze({
      home: 'home',
      recent: 'recent',
    });
  }
  static get TargetedAreaType (): Object {
    return Object.freeze({
      custom_radius: 'CUSTOM_RADIUS',
      marketing_area: 'MARKETING_AREA',
      none: 'NONE',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): AdPlacePageSet {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
