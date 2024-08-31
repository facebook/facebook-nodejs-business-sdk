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
 * ALMEndAdvertiserInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ALMEndAdvertiserInfo extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      estimated_ad_budget: 'estimated_ad_budget',
      id: 'id',
      parent_advertiser_id: 'parent_advertiser_id',
      parent_advertiser_name: 'parent_advertiser_name',
      tag: 'tag',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): ALMEndAdvertiserInfo {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
