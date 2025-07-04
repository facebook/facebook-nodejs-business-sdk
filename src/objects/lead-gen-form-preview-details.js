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
 * LeadGenFormPreviewDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenFormPreviewDetails extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      call_business_text: 'call_business_text',
      call_to_action_title: 'call_to_action_title',
      chat_on_messenger_text: 'chat_on_messenger_text',
      chat_on_whatsapp_text: 'chat_on_whatsapp_text',
      contact_information_text: 'contact_information_text',
      creatives_overview_default_text: 'creatives_overview_default_text',
      custom_disclaimer_editor_state: 'custom_disclaimer_editor_state',
      custom_disclaimer_title: 'custom_disclaimer_title',
      data_privacy_policy_setting_description: 'data_privacy_policy_setting_description',
      default_appointment_scheduling_inline_context: 'default_appointment_scheduling_inline_context',
      default_disqualified_end_component: 'default_disqualified_end_component',
      default_thank_you_page: 'default_thank_you_page',
      disqualified_thank_you_card_transparency_info_text: 'disqualified_thank_you_card_transparency_info_text',
      edit_text: 'edit_text',
      email_inline_context_text: 'email_inline_context_text',
      email_messenger_push_opt_in_disclaimer: 'email_messenger_push_opt_in_disclaimer',
      email_messenger_push_opt_in_transparency_text: 'email_messenger_push_opt_in_transparency_text',
      form_clarity_description_content: 'form_clarity_description_content',
      form_clarity_description_title: 'form_clarity_description_title',
      form_clarity_headline: 'form_clarity_headline',
      gated_content_locked_description: 'gated_content_locked_description',
      gated_content_locked_headline: 'gated_content_locked_headline',
      gated_content_unlocked_description: 'gated_content_unlocked_description',
      gated_content_unlocked_headline: 'gated_content_unlocked_headline',
      how_it_works_section_headers: 'how_it_works_section_headers',
      next_button_text: 'next_button_text',
      optional_question_text: 'optional_question_text',
      personal_info_text: 'personal_info_text',
      phone_number_inline_context_text: 'phone_number_inline_context_text',
      privacy_policy_link_text: 'privacy_policy_link_text',
      privacy_policy_link_text_for_optional_privacy_policy: 'privacy_policy_link_text_for_optional_privacy_policy',
      privacy_policy_title_section_title_text: 'privacy_policy_title_section_title_text',
      privacy_setting_description: 'privacy_setting_description',
      products_section_headers: 'products_section_headers',
      qualified_thank_you_card_transparency_info_text: 'qualified_thank_you_card_transparency_info_text',
      redeem_promo_code_text: 'redeem_promo_code_text',
      return_to_facebook_text: 'return_to_facebook_text',
      review_your_info_text: 'review_your_info_text',
      secure_sharing_text: 'secure_sharing_text',
      secure_sharing_text_for_optional_privacy_policy: 'secure_sharing_text_for_optional_privacy_policy',
      slide_to_submit_text: 'slide_to_submit_text',
      social_proof_section_headers: 'social_proof_section_headers',
      submit_button_text: 'submit_button_text',
      view_file_text: 'view_file_text',
      whats_app_opt_in_body: 'whats_app_opt_in_body',
      whats_app_opt_in_title: 'whats_app_opt_in_title',
    });
  }

}
