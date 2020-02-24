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
 * ReachFrequencyActivity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyActivity extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      campaign_active: 'campaign_active',
      campaign_started: 'campaign_started',
      creative_uploaded: 'creative_uploaded',
      delivered_budget: 'delivered_budget',
      delivered_daily_grp: 'delivered_daily_grp',
      delivered_daily_impression: 'delivered_daily_impression',
      delivered_impression: 'delivered_impression',
      delivered_reach: 'delivered_reach',
      delivered_total_impression: 'delivered_total_impression',
      io_approved: 'io_approved',
      sf_link: 'sf_link',
    });
  }

}
