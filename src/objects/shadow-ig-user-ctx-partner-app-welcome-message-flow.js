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
 * ShadowIGUserCTXPartnerAppWelcomeMessageFlow
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGUserCTXPartnerAppWelcomeMessageFlow extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      compatible_platforms: 'compatible_platforms',
      eligible_platforms: 'eligible_platforms',
      id: 'id',
      is_ig_only_flow: 'is_ig_only_flow',
      is_used_in_ad: 'is_used_in_ad',
      last_update_time: 'last_update_time',
      name: 'name',
      welcome_message_flow: 'welcome_message_flow',
    });
  }

}
