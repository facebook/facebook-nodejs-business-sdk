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
 * AdCampaignGoal
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGoal extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      engaged_audiences_audience_label_exclusions: 'engaged_audiences_audience_label_exclusions',
      engaged_audiences_audience_label_inclusions: 'engaged_audiences_audience_label_inclusions',
      engaged_audiences_exclusions: 'engaged_audiences_exclusions',
      engaged_audiences_inclusions: 'engaged_audiences_inclusions',
      existing_customers_audience_label_exclusions: 'existing_customers_audience_label_exclusions',
      existing_customers_audience_label_inclusions: 'existing_customers_audience_label_inclusions',
      existing_customers_exclusions: 'existing_customers_exclusions',
      existing_customers_inclusions: 'existing_customers_inclusions',
      is_ca_expansion_enabled: 'is_ca_expansion_enabled',
      is_lookalike_inclusion_enabled: 'is_lookalike_inclusion_enabled',
      lookalike_inclusions: 'lookalike_inclusions',
      type: 'type',
    });
  }

}
