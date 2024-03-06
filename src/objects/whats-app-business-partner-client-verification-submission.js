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
 * WhatsAppBusinessPartnerClientVerificationSubmission
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessPartnerClientVerificationSubmission extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      client_business_id: 'client_business_id',
      id: 'id',
      rejection_reasons: 'rejection_reasons',
      submitted_info: 'submitted_info',
      submitted_time: 'submitted_time',
      update_time: 'update_time',
      verification_status: 'verification_status',
    });
  }

}
