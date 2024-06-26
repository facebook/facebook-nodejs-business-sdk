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
 * LeadGenDataDraft
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenDataDraft extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      block_display_for_non_targeted_viewer: 'block_display_for_non_targeted_viewer',
      created_time: 'created_time',
      disqualified_end_component: 'disqualified_end_component',
      follow_up_action_url: 'follow_up_action_url',
      id: 'id',
      is_optimized_for_quality: 'is_optimized_for_quality',
      legal_content: 'legal_content',
      locale: 'locale',
      name: 'name',
      page: 'page',
      question_page_custom_headline: 'question_page_custom_headline',
      questions: 'questions',
      status: 'status',
      thank_you_page: 'thank_you_page',
      tracking_parameters: 'tracking_parameters',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): LeadGenDataDraft {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
