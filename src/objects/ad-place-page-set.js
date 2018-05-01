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
