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
 * RightsManagerInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RightsManagerInsights extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      error: 'error',
      error_message: 'error_message',
      metadata: 'metadata',
      totals: 'totals',
      x_axis_breakdown: 'x_axis_breakdown',
    });
  }

}
