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
 * FAMEAdCampaignGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FAMEAdCampaignGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adaccount_id: 'adaccount_id',
      adaccount_name: 'adaccount_name',
      buying_type: 'buying_type',
      campaign_id: 'campaign_id',
      campaign_name: 'campaign_name',
      campaign_status: 'campaign_status',
      objective: 'objective',
      spend_cap: 'spend_cap',
      id: 'id'
    });
  }

  static get DatePreset (): Object {
    return Object.freeze({
      today: 'today',
      yesterday: 'yesterday',
      this_month: 'this_month',
      last_month: 'last_month',
      this_quarter: 'this_quarter',
      lifetime: 'lifetime',
      last_3d: 'last_3d',
      last_7d: 'last_7d',
      last_14d: 'last_14d',
      last_28d: 'last_28d',
      last_30d: 'last_30d',
      last_90d: 'last_90d',
      last_week_mon_sun: 'last_week_mon_sun',
      last_week_sun_sat: 'last_week_sun_sat',
      last_quarter: 'last_quarter',
      last_year: 'last_year',
      this_week_mon_today: 'this_week_mon_today',
      this_week_sun_today: 'this_week_sun_today',
      this_year: 'this_year'
    });
  }
  static get EffectiveStatus (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      paused: 'PAUSED',
      deleted: 'DELETED',
      pending_review: 'PENDING_REVIEW',
      disapproved: 'DISAPPROVED',
      preapproved: 'PREAPPROVED',
      pending_billing_info: 'PENDING_BILLING_INFO',
      campaign_paused: 'CAMPAIGN_PAUSED',
      archived: 'ARCHIVED',
      adset_paused: 'ADSET_PAUSED'
    });
  }

  get (fields, params): FAMEAdCampaignGroup {
    return this.read(
      fields,
      params
    );
  }
}
