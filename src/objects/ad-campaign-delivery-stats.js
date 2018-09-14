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
 * AdCampaignDeliveryStats
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignDeliveryStats extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      bid_recommendation: 'bid_recommendation',
      current_average_cost: 'current_average_cost',
      delivery_warning: 'delivery_warning',
      has_unrealistic_high_bid: 'has_unrealistic_high_bid',
      last_significant_edit_ts: 'last_significant_edit_ts',
      learning_stage_info: 'learning_stage_info',
      recommendations: 'recommendations',
      id: 'id'
    });
  }

  static get BidRecommendationTimeRangeType (): Object {
    return Object.freeze({
      since_last_learning_stage_exit: 'SINCE_LAST_LEARNING_STAGE_EXIT',
      last_n_days: 'LAST_N_DAYS',
      since_last_significant_edit: 'SINCE_LAST_SIGNIFICANT_EDIT'
    });
  }

  get (fields, params): AdCampaignDeliveryStats {
    return this.read(
      fields,
      params
    );
  }
}
