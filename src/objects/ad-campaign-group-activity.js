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
 * AdCampaignGroupActivity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupActivity extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      budget_limit_new: 'budget_limit_new',
      budget_limit_old: 'budget_limit_old',
      buying_type_new: 'buying_type_new',
      buying_type_old: 'buying_type_old',
      event_time: 'event_time',
      event_type: 'event_type',
      id: 'id',
      is_autobid_new: 'is_autobid_new',
      is_autobid_old: 'is_autobid_old',
      is_average_price_pacing_new: 'is_average_price_pacing_new',
      is_average_price_pacing_old: 'is_average_price_pacing_old',
      name_new: 'name_new',
      name_old: 'name_old',
      objective_new: 'objective_new',
      objective_old: 'objective_old',
      pacing_type: 'pacing_type',
      run_status_new: 'run_status_new',
      run_status_old: 'run_status_old',
      spend_cap_new: 'spend_cap_new',
      spend_cap_old: 'spend_cap_old',
      time_created: 'time_created',
      time_updated_new: 'time_updated_new',
      time_updated_old: 'time_updated_old',
    });
  }

  static get ObjectiveNew (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      brand_awareness: 'BRAND_AWARENESS',
      canvas_app_engagement: 'CANVAS_APP_ENGAGEMENT',
      canvas_app_installs: 'CANVAS_APP_INSTALLS',
      event_responses: 'EVENT_RESPONSES',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      local_awareness: 'LOCAL_AWARENESS',
      messages: 'MESSAGES',
      mobile_app_engagement: 'MOBILE_APP_ENGAGEMENT',
      mobile_app_installs: 'MOBILE_APP_INSTALLS',
      none: 'NONE',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      product_catalog_sales: 'PRODUCT_CATALOG_SALES',
      video_views: 'VIDEO_VIEWS',
      website_conversions: 'WEBSITE_CONVERSIONS',
    });
  }
  static get ObjectiveOld (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      brand_awareness: 'BRAND_AWARENESS',
      canvas_app_engagement: 'CANVAS_APP_ENGAGEMENT',
      canvas_app_installs: 'CANVAS_APP_INSTALLS',
      event_responses: 'EVENT_RESPONSES',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      local_awareness: 'LOCAL_AWARENESS',
      messages: 'MESSAGES',
      mobile_app_engagement: 'MOBILE_APP_ENGAGEMENT',
      mobile_app_installs: 'MOBILE_APP_INSTALLS',
      none: 'NONE',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      product_catalog_sales: 'PRODUCT_CATALOG_SALES',
      video_views: 'VIDEO_VIEWS',
      website_conversions: 'WEBSITE_CONVERSIONS',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): AdCampaignGroupActivity {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
