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
 * PageSavedFilter
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageSavedFilter extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      display_name: 'display_name',
      filters: 'filters',
      id: 'id',
      page_id: 'page_id',
      section: 'section',
      time_created: 'time_created',
      time_updated: 'time_updated',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): PageSavedFilter {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
