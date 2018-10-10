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
 * ReportStatsMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReportStatsMetadata extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      cutoff_date_account_data: 'cutoff_date_account_data',
      cutoff_date_actions: 'cutoff_date_actions',
      cutoff_date_carousel_action_breakdown: 'cutoff_date_carousel_action_breakdown',
      cutoff_date_carousel_card_name: 'cutoff_date_carousel_card_name',
      cutoff_date_demographics: 'cutoff_date_demographics',
      cutoff_date_general: 'cutoff_date_general',
      cutoff_date_placement: 'cutoff_date_placement',
      cutoff_date_relevance_score: 'cutoff_date_relevance_score',
      cutoff_date_video_type_breakdown: 'cutoff_date_video_type_breakdown',
      cutoff_date_website_ctr: 'cutoff_date_website_ctr',
      id: 'id'
    });
  }

  get (fields, params): ReportStatsMetadata {
    return this.read(
      fields,
      params
    );
  }
}
