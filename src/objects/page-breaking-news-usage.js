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
 * PageBreakingNewsUsage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageBreakingNewsUsage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      remaining_daily_uses: 'remaining_daily_uses',
      remaining_monthly_pool_uses: 'remaining_monthly_pool_uses',
      id: 'id'
    });
  }

  get (fields, params): PageBreakingNewsUsage {
    return this.read(
      fields,
      params
    );
  }
}
