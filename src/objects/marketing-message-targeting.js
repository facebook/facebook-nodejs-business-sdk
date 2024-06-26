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
 * MarketingMessageTargeting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MarketingMessageTargeting extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      automation_type: 'automation_type',
      delay_send_time_second: 'delay_send_time_second',
      delay_send_time_unit: 'delay_send_time_unit',
      subscriber_lists: 'subscriber_lists',
      targeting_rules: 'targeting_rules',
    });
  }

}
