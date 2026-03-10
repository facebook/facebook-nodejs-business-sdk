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
 * CreativeFatiguePredictionPLE
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreativeFatiguePredictionPLE extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      cpr_lift_estimation: 'cpr_lift_estimation',
      should_display: 'should_display',
    });
  }

}
