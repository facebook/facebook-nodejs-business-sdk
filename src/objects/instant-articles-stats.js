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
 * InstantArticlesStats
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstantArticlesStats extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      error: 'error',
      metadata: 'metadata',
      metric: 'metric',
      totals: 'totals',
      x_axis_breakdown: 'x_axis_breakdown',
    });
  }

}
