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
 * LeadNurturingState
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadNurturingState extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ai_agent_mode: 'ai_agent_mode',
      conversation_summary: 'conversation_summary',
      handoff_reason: 'handoff_reason',
      lead_interest_level: 'lead_interest_level',
      needed_manual_actions: 'needed_manual_actions',
      qualification_details: 'qualification_details',
      qualification_status: 'qualification_status',
      scheduled_time: 'scheduled_time',
      updated_email: 'updated_email',
      updated_phone_number: 'updated_phone_number',
    });
  }

}
