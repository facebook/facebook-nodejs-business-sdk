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
 * AdRuleHistory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleHistory extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      evaluation_spec: 'evaluation_spec',
      exception_code: 'exception_code',
      exception_message: 'exception_message',
      execution_spec: 'execution_spec',
      is_manual: 'is_manual',
      results: 'results',
      schedule_spec: 'schedule_spec',
      timestamp: 'timestamp',
    });
  }

  static get Action (): Object {
    return Object.freeze({
      budget_not_redistributed: 'BUDGET_NOT_REDISTRIBUTED',
      changed_bid: 'CHANGED_BID',
      changed_budget: 'CHANGED_BUDGET',
      consolidate_asc_fragmentation: 'CONSOLIDATE_ASC_FRAGMENTATION',
      consolidate_fragmentation: 'CONSOLIDATE_FRAGMENTATION',
      convert_asc_cp_single_instance: 'CONVERT_ASC_CP_SINGLE_INSTANCE',
      email: 'EMAIL',
      enable_advantage_campaign_budget: 'ENABLE_ADVANTAGE_CAMPAIGN_BUDGET',
      enable_advantage_plus_audience: 'ENABLE_ADVANTAGE_PLUS_AUDIENCE',
      enable_advantage_plus_creative: 'ENABLE_ADVANTAGE_PLUS_CREATIVE',
      enable_advantage_plus_placements: 'ENABLE_ADVANTAGE_PLUS_PLACEMENTS',
      enable_autoflow: 'ENABLE_AUTOFLOW',
      enable_gen_uncrop: 'ENABLE_GEN_UNCROP',
      enable_landing_page_views: 'ENABLE_LANDING_PAGE_VIEWS',
      enable_music: 'ENABLE_MUSIC',
      enable_reels_placements: 'ENABLE_REELS_PLACEMENTS',
      enable_semantic_based_audience_expansion: 'ENABLE_SEMANTIC_BASED_AUDIENCE_EXPANSION',
      enable_shops_ads: 'ENABLE_SHOPS_ADS',
      endpoint_pinged: 'ENDPOINT_PINGED',
      error: 'ERROR',
      facebook_notification_sent: 'FACEBOOK_NOTIFICATION_SENT',
      message_sent: 'MESSAGE_SENT',
      not_changed: 'NOT_CHANGED',
      paused: 'PAUSED',
      unpaused: 'UNPAUSED',
    });
  }
}
