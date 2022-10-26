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
 * AdAccountAdVolume
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAdVolume extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      actor_id: 'actor_id',
      actor_name: 'actor_name',
      ad_limit_scope_business: 'ad_limit_scope_business',
      ad_limit_scope_business_manager_id: 'ad_limit_scope_business_manager_id',
      ad_limit_set_by_page_admin: 'ad_limit_set_by_page_admin',
      ads_running_or_in_review_count: 'ads_running_or_in_review_count',
      ads_running_or_in_review_count_subject_to_limit_set_by_page: 'ads_running_or_in_review_count_subject_to_limit_set_by_page',
      current_account_ads_running_or_in_review_count: 'current_account_ads_running_or_in_review_count',
      future_limit_activation_date: 'future_limit_activation_date',
      future_limit_on_ads_running_or_in_review: 'future_limit_on_ads_running_or_in_review',
      limit_on_ads_running_or_in_review: 'limit_on_ads_running_or_in_review',
      recommendations: 'recommendations',
    });
  }

  static get RecommendationType (): Object {
    return Object.freeze({
      aco_toggle: 'ACO_TOGGLE',
      aggregated_bid_limited: 'AGGREGATED_BID_LIMITED',
      aggregated_budget_limited: 'AGGREGATED_BUDGET_LIMITED',
      aggregated_cost_limited: 'AGGREGATED_COST_LIMITED',
      auction_overlap: 'AUCTION_OVERLAP',
      auction_overlap_consolidation: 'AUCTION_OVERLAP_CONSOLIDATION',
      audience_expansion: 'AUDIENCE_EXPANSION',
      autoflow_opt_in: 'AUTOFLOW_OPT_IN',
      automatic_placements: 'AUTOMATIC_PLACEMENTS',
      capi: 'CAPI',
      creative_badge: 'CREATIVE_BADGE',
      creative_fatigue: 'CREATIVE_FATIGUE',
      creative_limited: 'CREATIVE_LIMITED',
      dead_link: 'DEAD_LINK',
      ecosystem_bid_reduce_l1_cardinality: 'ECOSYSTEM_BID_REDUCE_L1_CARDINALITY',
      fragmentation: 'FRAGMENTATION',
      learning_limited: 'LEARNING_LIMITED',
      low_outcome: 'LOW_OUTCOME',
      multi_text: 'MULTI_TEXT',
      music: 'MUSIC',
      predictive_creative_limited: 'PREDICTIVE_CREATIVE_LIMITED',
      revert: 'REVERT',
      syd_test_mode: 'SYD_TEST_MODE',
      top_adsets_with_ads_under_cap: 'TOP_ADSETS_WITH_ADS_UNDER_CAP',
      top_campaigns_with_ads_under_cap: 'TOP_CAMPAIGNS_WITH_ADS_UNDER_CAP',
      uneconomical_ads_throttling: 'UNECONOMICAL_ADS_THROTTLING',
      unused_budget: 'UNUSED_BUDGET',
      zero_impression: 'ZERO_IMPRESSION',
    });
  }
}
