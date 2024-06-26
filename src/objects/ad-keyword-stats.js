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
 * AdKeywordStats
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdKeywordStats extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      actions: 'actions',
      clicks: 'clicks',
      cost_per_total_action: 'cost_per_total_action',
      cost_per_unique_click: 'cost_per_unique_click',
      cpc: 'cpc',
      cpm: 'cpm',
      cpp: 'cpp',
      ctr: 'ctr',
      frequency: 'frequency',
      id: 'id',
      impressions: 'impressions',
      name: 'name',
      reach: 'reach',
      spend: 'spend',
      total_actions: 'total_actions',
      total_unique_actions: 'total_unique_actions',
      unique_actions: 'unique_actions',
      unique_clicks: 'unique_clicks',
      unique_ctr: 'unique_ctr',
      unique_impressions: 'unique_impressions',
    });
  }

}
