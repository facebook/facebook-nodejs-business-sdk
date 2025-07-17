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
 * ALMEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ALMEvent extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_account_ids: 'ad_account_ids',
      campaign_ids: 'campaign_ids',
      channel: 'channel',
      event: 'event',
      event_time: 'event_time',
      guidance: 'guidance',
      guidance_detail: 'guidance_detail',
      guidance_type: 'guidance_type',
      id: 'id',
      parent_advertiser_ids: 'parent_advertiser_ids',
      reseller_business_id: 'reseller_business_id',
      sub_channel: 'sub_channel',
      user_id: 'user_id',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): ALMEvent {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
