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
 * CreativeMulticellTestConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreativeMulticellTestConfig extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      daily_budget: 'daily_budget',
      lifetime_budget: 'lifetime_budget',
    });
  }

}
