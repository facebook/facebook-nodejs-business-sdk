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
 * PageCTXBudgetSimilarAdvertiserBudgetRecommendation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCTXBudgetSimilarAdvertiserBudgetRecommendation extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      budget: 'budget',
      budget_new_model: 'budget_new_model',
      budget_without_threshold: 'budget_without_threshold',
      reported_conversion: 'reported_conversion',
      reported_conversions_new_model: 'reported_conversions_new_model',
      reported_conversions_without_threshold: 'reported_conversions_without_threshold',
    });
  }

}
