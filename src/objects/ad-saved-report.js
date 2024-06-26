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
 * AdSavedReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSavedReport extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      app_owner: 'app_owner',
      breakdowns: 'breakdowns',
      builtin_column_set: 'builtin_column_set',
      creation_source: 'creation_source',
      date_interval: 'date_interval',
      date_preset: 'date_preset',
      format_version: 'format_version',
      id: 'id',
      insights_section: 'insights_section',
      is_shared_unread: 'is_shared_unread',
      level: 'level',
      name: 'name',
      normalized_filter: 'normalized_filter',
      sort: 'sort',
      user_attribution_windows: 'user_attribution_windows',
      user_columns: 'user_columns',
      user_filter: 'user_filter',
      user_owner: 'user_owner',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AdSavedReport {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
