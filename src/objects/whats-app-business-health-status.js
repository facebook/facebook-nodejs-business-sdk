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
 * WhatsAppBusinessHealthStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessHealthStatus extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      additional_info: 'additional_info',
      can_receive_call_sip: 'can_receive_call_sip',
      can_send_message: 'can_send_message',
      entity_type: 'entity_type',
      errors: 'errors',
      id: 'id',
    });
  }

}
