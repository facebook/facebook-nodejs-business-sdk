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
 * GuidanceLiftEstimate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GuidanceLiftEstimate extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      actual_7d_cpr: 'actual_7d_cpr',
      adoption_date: 'adoption_date',
      guidance_name: 'guidance_name',
      lift_estimation: 'lift_estimation',
      predicted_7d_cpr: 'predicted_7d_cpr',
    });
  }

}
