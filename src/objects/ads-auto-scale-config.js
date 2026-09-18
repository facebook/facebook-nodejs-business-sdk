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
 * AdsAutoScaleConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsAutoScaleConfig extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      budget_value: 'budget_value',
      budget_value_type: 'budget_value_type',
      is_enabled: 'is_enabled',
    });
  }

}
