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
 * AdsQuickViews
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsQuickViews extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      attribution_windows: 'attribution_windows',
      breakdowns: 'breakdowns',
      column_fields: 'column_fields',
      description: 'description',
      id: 'id',
      name: 'name',
      owner: 'owner',
      permission: 'permission',
      quick_view_type: 'quick_view_type',
      sort: 'sort',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AdsQuickViews {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
