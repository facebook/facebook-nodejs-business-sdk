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
 * AdAccountLiveVideoAdvertiser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountLiveVideoAdvertiser extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      is_lva_toggle_on: 'is_lva_toggle_on',
      lva_default_budget: 'lva_default_budget',
      should_default_current_live: 'should_default_current_live',
      should_default_scheduled_live: 'should_default_scheduled_live',
      should_show_lva_toggle: 'should_show_lva_toggle',
    });
  }

}
