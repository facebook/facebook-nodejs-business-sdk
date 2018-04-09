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
 * AdAccountRoas
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountRoas extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adgroup_id: 'adgroup_id',
      arpu_180d: 'arpu_180d',
      arpu_1d: 'arpu_1d',
      arpu_30d: 'arpu_30d',
      arpu_365d: 'arpu_365d',
      arpu_3d: 'arpu_3d',
      arpu_7d: 'arpu_7d',
      arpu_90d: 'arpu_90d',
      campaign_group_id: 'campaign_group_id',
      campaign_id: 'campaign_id',
      date_start: 'date_start',
      date_stop: 'date_stop',
      installs: 'installs',
      revenue: 'revenue',
      revenue_180d: 'revenue_180d',
      revenue_1d: 'revenue_1d',
      revenue_30d: 'revenue_30d',
      revenue_365d: 'revenue_365d',
      revenue_3d: 'revenue_3d',
      revenue_7d: 'revenue_7d',
      revenue_90d: 'revenue_90d',
      spend: 'spend',
      yield_180d: 'yield_180d',
      yield_1d: 'yield_1d',
      yield_30d: 'yield_30d',
      yield_365d: 'yield_365d',
      yield_3d: 'yield_3d',
      yield_7d: 'yield_7d',
      yield_90d: 'yield_90d'
    });
  }
}
