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
 * AdVolume
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdVolume extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_volume_break_down: 'ad_volume_break_down',
      ads_running_or_in_review_count: 'ads_running_or_in_review_count',
      future_limit_activation_date: 'future_limit_activation_date',
      future_limit_on_ads_running_or_in_review: 'future_limit_on_ads_running_or_in_review',
      individual_accounts_ad_volume: 'individual_accounts_ad_volume',
      is_gpa_page: 'is_gpa_page',
      limit_on_ads_running_or_in_review: 'limit_on_ads_running_or_in_review',
      owning_business_ad_volume: 'owning_business_ad_volume',
      partner_business_ad_volume: 'partner_business_ad_volume',
      user_role: 'user_role',
    });
  }

}
