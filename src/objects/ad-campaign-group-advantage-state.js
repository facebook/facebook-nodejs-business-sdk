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
 * AdCampaignGroupAdvantageState
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupAdvantageState extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      advantage_audience_state: 'advantage_audience_state',
      advantage_budget_state: 'advantage_budget_state',
      advantage_placement_state: 'advantage_placement_state',
      advantage_state: 'advantage_state',
    });
  }

}
