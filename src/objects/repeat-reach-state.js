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
 * RepeatReachState
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RepeatReachState extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      current_saturation_level: 'current_saturation_level',
      forecasted_saturation_level: 'forecasted_saturation_level',
      high_saturation_threshold: 'high_saturation_threshold',
      should_display_cpr: 'should_display_cpr',
    });
  }

}
