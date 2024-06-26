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
 * CustomAudienceSharedAccountCampaignInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceSharedAccountCampaignInfo extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account_id: 'account_id',
      account_name: 'account_name',
      adset_excluding_count: 'adset_excluding_count',
      adset_including_count: 'adset_including_count',
      campaign_delivery_status: 'campaign_delivery_status',
      campaign_objective: 'campaign_objective',
      campaign_pages: 'campaign_pages',
      campaign_schedule: 'campaign_schedule',
    });
  }

}
