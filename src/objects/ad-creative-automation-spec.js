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
 * AdCreativeAutomationSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeAutomationSpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      decision_type: 'decision_type',
      enrollment_status: 'enrollment_status',
    });
  }

}
