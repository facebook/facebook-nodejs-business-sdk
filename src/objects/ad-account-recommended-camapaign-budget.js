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
 * AdAccountRecommendedCamapaignBudget
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountRecommendedCamapaignBudget extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      daily: 'daily',
      lifetime: 'lifetime',
      objective: 'objective',
    });
  }

}
