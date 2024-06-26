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
 * TargetingAutomation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingAutomation extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      advantage_audience: 'advantage_audience',
      individual_setting: 'individual_setting',
      shared_audiences: 'shared_audiences',
      value_expression: 'value_expression',
    });
  }

}
