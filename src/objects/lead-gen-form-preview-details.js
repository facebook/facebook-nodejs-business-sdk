/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * LeadGenFormPreviewDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenFormPreviewDetails extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      call_to_action_title: 'call_to_action_title',
      default_appointment_scheduling_inline_context: 'default_appointment_scheduling_inline_context',
      default_thank_you_page: 'default_thank_you_page',
      edit_text: 'edit_text',
      email_inline_context_text: 'email_inline_context_text',
      next_button_text: 'next_button_text',
      personal_info_text: 'personal_info_text',
      phone_number_inline_context_text: 'phone_number_inline_context_text',
      review_your_info_text: 'review_your_info_text',
      slide_to_submit_text: 'slide_to_submit_text',
      submit_button_text: 'submit_button_text'
    });
  }
}
