/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Lead from './lead';

/**
 * LeadgenForm
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadgenForm extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      allow_organic_lead: 'allow_organic_lead',
      block_display_for_non_targeted_viewer: 'block_display_for_non_targeted_viewer',
      context_card: 'context_card',
      created_time: 'created_time',
      creator: 'creator',
      creator_id: 'creator_id',
      cusomized_tcpa_content: 'cusomized_tcpa_content',
      expired_leads_count: 'expired_leads_count',
      extra_details: 'extra_details',
      follow_up_action_text: 'follow_up_action_text',
      follow_up_action_url: 'follow_up_action_url',
      id: 'id',
      is_continued_flow: 'is_continued_flow',
      leadgen_export_csv_url: 'leadgen_export_csv_url',
      leads_count: 'leads_count',
      legal_content: 'legal_content',
      locale: 'locale',
      messenger_welcome_message: 'messenger_welcome_message',
      name: 'name',
      organic_leads_count: 'organic_leads_count',
      page: 'page',
      page_id: 'page_id',
      privacy_policy_url: 'privacy_policy_url',
      qualifiers: 'qualifiers',
      question_page_custom_headline: 'question_page_custom_headline',
      questions: 'questions',
      status: 'status',
      tcpa_compliance: 'tcpa_compliance',
      thank_you_page: 'thank_you_page'
    });
  }

  getLeads (fields, params, fetchFirstPage = true): Lead {
    return this.getEdge(
      Lead,
      fields,
      params,
      fetchFirstPage,
      '/leads'
    );
  }

  createTestLead (fields, params): LeadgenForm {
    return this.createEdge(
      '/test_leads',
      fields,
      params
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): LeadgenForm {
    return this.read(
      fields,
      params
    );
  }
}
