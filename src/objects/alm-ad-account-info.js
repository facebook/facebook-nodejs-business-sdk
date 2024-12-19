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
 * ALMAdAccountInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ALMAdAccountInfo extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_account_id: 'ad_account_id',
      id: 'id',
      managed_by: 'managed_by',
      owned_by: 'owned_by',
      parent_advertiser_id: 'parent_advertiser_id',
      sub_vertical: 'sub_vertical',
      tag: 'tag',
      user_ids: 'user_ids',
      vertical: 'vertical',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): ALMAdAccountInfo {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
