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
 * PageCTXBudgetDFOBudgetRecommendation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCTXBudgetDFOBudgetRecommendation extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      budget: 'budget',
      budget_leads: 'budget_leads',
      budget_new_model: 'budget_new_model',
      budget_purchases: 'budget_purchases',
      budget_value: 'budget_value',
      budget_without_threshold: 'budget_without_threshold',
      reported_conversion: 'reported_conversion',
      reported_conversion_leads: 'reported_conversion_leads',
      reported_conversion_purchases: 'reported_conversion_purchases',
      reported_conversion_value: 'reported_conversion_value',
      reported_conversions_new_model: 'reported_conversions_new_model',
      reported_conversions_without_threshold: 'reported_conversions_without_threshold',
      zo_budget: 'zo_budget',
      zo_budget_leads: 'zo_budget_leads',
      zo_budget_purchases: 'zo_budget_purchases',
      zo_budget_value: 'zo_budget_value',
    });
  }

}
