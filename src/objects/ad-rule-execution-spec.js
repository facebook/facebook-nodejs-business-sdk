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
 * AdRuleExecutionSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleExecutionSpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      execution_options: 'execution_options',
      execution_type: 'execution_type',
      is_once_off: 'is_once_off',
      id: 'id',
    });
  }

  static get ExecutionType (): Object {
    return Object.freeze({
      add_interest_relaxation: 'ADD_INTEREST_RELAXATION',
      add_questionnaire_interests: 'ADD_QUESTIONNAIRE_INTERESTS',
      ad_recommendation_apply: 'AD_RECOMMENDATION_APPLY',
      audience_consolidation: 'AUDIENCE_CONSOLIDATION',
      audience_consolidation_ask_first: 'AUDIENCE_CONSOLIDATION_ASK_FIRST',
      change_bid: 'CHANGE_BID',
      change_budget: 'CHANGE_BUDGET',
      change_campaign_budget: 'CHANGE_CAMPAIGN_BUDGET',
      dco: 'DCO',
      increase_radius: 'INCREASE_RADIUS',
      notification: 'NOTIFICATION',
      pause: 'PAUSE',
      ping_endpoint: 'PING_ENDPOINT',
      rebalance_budget: 'REBALANCE_BUDGET',
      rotate: 'ROTATE',
      unpause: 'UNPAUSE',
      update_creative: 'UPDATE_CREATIVE',
      update_lax_budget: 'UPDATE_LAX_BUDGET',
      update_lax_duration: 'UPDATE_LAX_DURATION',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): AdRuleExecutionSpec {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
