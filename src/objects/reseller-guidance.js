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
 * ResellerGuidance
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ResellerGuidance extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_account_first_spend_date: 'ad_account_first_spend_date',
      ad_account_id: 'ad_account_id',
      adopted_guidance_l7d: 'adopted_guidance_l7d',
      advertiser_name: 'advertiser_name',
      attributed_to_reseller_l7d: 'attributed_to_reseller_l7d',
      available_guidance: 'available_guidance',
      guidance_adoption_rate_l7d: 'guidance_adoption_rate_l7d',
      nurtured_by_reseller_l7d: 'nurtured_by_reseller_l7d',
      planning_agency_name: 'planning_agency_name',
      recommendation_time: 'recommendation_time',
      reporting_ds: 'reporting_ds',
      reseller: 'reseller',
      revenue_l30d: 'revenue_l30d',
      ultimate_advertiser_name: 'ultimate_advertiser_name',
    });
  }

}
