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
 * NegativeKeywordList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class NegativeKeywordList extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      applied_active_ad_campaign_groups: 'applied_active_ad_campaign_groups',
      applied_inactive_ad_campaign_groups: 'applied_inactive_ad_campaign_groups',
      creator_id: 'creator_id',
      id: 'id',
      is_fully_reviewed: 'is_fully_reviewed',
      last_update_time: 'last_update_time',
      last_update_user_id: 'last_update_user_id',
      list_name: 'list_name',
      total_approved_keyword_count: 'total_approved_keyword_count',
      total_declined_keyword_count: 'total_declined_keyword_count',
      total_negative_keyword_count: 'total_negative_keyword_count',
      total_validated_keyword_count: 'total_validated_keyword_count',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): NegativeKeywordList {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): NegativeKeywordList {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
