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
 * InsightsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InsightsResult extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      description: 'description',
      description_from_api_doc: 'description_from_api_doc',
      id: 'id',
      name: 'name',
      period: 'period',
      title: 'title',
      values: 'values',
    });
  }

  static get DatePreset (): Object {
    return Object.freeze({
      data_maximum: 'data_maximum',
      last_14d: 'last_14d',
      last_28d: 'last_28d',
      last_30d: 'last_30d',
      last_3d: 'last_3d',
      last_7d: 'last_7d',
      last_90d: 'last_90d',
      last_month: 'last_month',
      last_quarter: 'last_quarter',
      last_week_mon_sun: 'last_week_mon_sun',
      last_week_sun_sat: 'last_week_sun_sat',
      last_year: 'last_year',
      maximum: 'maximum',
      this_month: 'this_month',
      this_quarter: 'this_quarter',
      this_week_mon_today: 'this_week_mon_today',
      this_week_sun_today: 'this_week_sun_today',
      this_year: 'this_year',
      today: 'today',
      yesterday: 'yesterday',
    });
  }
  static get Period (): Object {
    return Object.freeze({
      day: 'day',
      days_28: 'days_28',
      lifetime: 'lifetime',
      month: 'month',
      total_over_range: 'total_over_range',
      week: 'week',
    });
  }
  static get Metric (): Object {
    return Object.freeze({
      pages_fb_story_replies: 'PAGES_FB_STORY_REPLIES',
      pages_fb_story_shares: 'PAGES_FB_STORY_SHARES',
      pages_fb_story_sticker_interactions: 'PAGES_FB_STORY_STICKER_INTERACTIONS',
      pages_fb_story_thread_lightweight_reactions: 'PAGES_FB_STORY_THREAD_LIGHTWEIGHT_REACTIONS',
      page_story_impressions_by_story_id: 'PAGE_STORY_IMPRESSIONS_BY_STORY_ID',
      page_story_impressions_by_story_id_unique: 'PAGE_STORY_IMPRESSIONS_BY_STORY_ID_UNIQUE',
      story_interaction: 'STORY_INTERACTION',
    });
  }
}
