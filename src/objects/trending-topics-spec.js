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
 * TrendingTopicsSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TrendingTopicsSpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      is_all_trending: 'is_all_trending',
      is_special_budget_alloc: 'is_special_budget_alloc',
      trending_topics: 'trending_topics',
    });
  }

}
