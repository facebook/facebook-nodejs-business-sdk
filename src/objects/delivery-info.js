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
 * DeliveryInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DeliveryInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      active_accelerated_campaign_count: 'active_accelerated_campaign_count',
      active_day_parted_campaign_count: 'active_day_parted_campaign_count',
      active_rotated_campaign_count: 'active_rotated_campaign_count',
      are_all_daily_budgets_spent: 'are_all_daily_budgets_spent',
      completed_campaign_count: 'completed_campaign_count',
      credit_needed_ads_count: 'credit_needed_ads_count',
      delivery_insight: 'delivery_insight',
      delivery_insights: 'delivery_insights',
      eligible_for_delivery_insights: 'eligible_for_delivery_insights',
      end_time: 'end_time',
      has_account_hit_spend_limit: 'has_account_hit_spend_limit',
      has_campaign_group_hit_spend_limit: 'has_campaign_group_hit_spend_limit',
      has_no_active_ads: 'has_no_active_ads',
      has_no_ads: 'has_no_ads',
      inactive_ads_count: 'inactive_ads_count',
      inactive_campaign_count: 'inactive_campaign_count',
      is_account_closed: 'is_account_closed',
      is_account_disabled: 'is_account_disabled',
      is_ad_uneconomical: 'is_ad_uneconomical',
      is_adfarm_penalized: 'is_adfarm_penalized',
      is_adgroup_partially_rejected: 'is_adgroup_partially_rejected',
      is_campaign_accelerated: 'is_campaign_accelerated',
      is_campaign_completed: 'is_campaign_completed',
      is_campaign_day_parted: 'is_campaign_day_parted',
      is_campaign_disabled: 'is_campaign_disabled',
      is_campaign_group_disabled: 'is_campaign_group_disabled',
      is_campaign_rotated: 'is_campaign_rotated',
      is_campaign_scheduled: 'is_campaign_scheduled',
      is_clickbait_penalized: 'is_clickbait_penalized',
      is_daily_budget_spent: 'is_daily_budget_spent',
      is_reach_and_frequency_misconfigured: 'is_reach_and_frequency_misconfigured',
      is_split_test_active: 'is_split_test_active',
      is_split_test_valid: 'is_split_test_valid',
      lift_study_time_period: 'lift_study_time_period',
      limited_campaign_count: 'limited_campaign_count',
      limited_campaign_ids: 'limited_campaign_ids',
      needs_credit: 'needs_credit',
      needs_tax_number: 'needs_tax_number',
      non_deleted_ads_count: 'non_deleted_ads_count',
      not_delivering_campaign_count: 'not_delivering_campaign_count',
      pending_ads_count: 'pending_ads_count',
      reach_frequency_campaign_underdelivery_reason: 'reach_frequency_campaign_underdelivery_reason',
      rejected_ads_count: 'rejected_ads_count',
      scheduled_campaign_count: 'scheduled_campaign_count',
      start_time: 'start_time',
      status: 'status',
      text_penalty_level: 'text_penalty_level',
      id: 'id'
    });
  }

  get (fields, params): DeliveryInfo {
    return this.read(
      fields,
      params
    );
  }
}
