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
 * AdAccountDefaultObjective
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountDefaultObjective extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      default_objective_for_user: 'default_objective_for_user',
      objective_for_level: 'objective_for_level',
      id: 'id'
    });
  }

  static get DefaultObjectiveForUser (): Object {
    return Object.freeze({
      none: 'NONE',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      canvas_app_installs: 'CANVAS_APP_INSTALLS',
      event_responses: 'EVENT_RESPONSES',
      canvas_app_engagement: 'CANVAS_APP_ENGAGEMENT',
      post_engagement: 'POST_ENGAGEMENT',
      website_conversions: 'WEBSITE_CONVERSIONS',
      mobile_app_installs: 'MOBILE_APP_INSTALLS',
      link_clicks: 'LINK_CLICKS',
      mobile_app_engagement: 'MOBILE_APP_ENGAGEMENT',
      video_views: 'VIDEO_VIEWS',
      local_awareness: 'LOCAL_AWARENESS',
      product_catalog_sales: 'PRODUCT_CATALOG_SALES',
      lead_generation: 'LEAD_GENERATION',
      brand_awareness: 'BRAND_AWARENESS',
      app_installs: 'APP_INSTALLS',
      messages: 'MESSAGES'
    });
  }
  static get ObjectiveForLevel (): Object {
    return Object.freeze({
      none: 'NONE',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      canvas_app_installs: 'CANVAS_APP_INSTALLS',
      event_responses: 'EVENT_RESPONSES',
      canvas_app_engagement: 'CANVAS_APP_ENGAGEMENT',
      post_engagement: 'POST_ENGAGEMENT',
      website_conversions: 'WEBSITE_CONVERSIONS',
      mobile_app_installs: 'MOBILE_APP_INSTALLS',
      link_clicks: 'LINK_CLICKS',
      mobile_app_engagement: 'MOBILE_APP_ENGAGEMENT',
      video_views: 'VIDEO_VIEWS',
      local_awareness: 'LOCAL_AWARENESS',
      product_catalog_sales: 'PRODUCT_CATALOG_SALES',
      lead_generation: 'LEAD_GENERATION',
      brand_awareness: 'BRAND_AWARENESS',
      app_installs: 'APP_INSTALLS',
      messages: 'MESSAGES'
    });
  }

  get (fields, params): AdAccountDefaultObjective {
    return this.read(
      fields,
      params
    );
  }
}
