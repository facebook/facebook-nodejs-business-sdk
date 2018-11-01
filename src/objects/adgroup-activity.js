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
 * AdgroupActivity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdgroupActivity extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_creative_id_new: 'ad_creative_id_new',
      ad_creative_id_old: 'ad_creative_id_old',
      asset_feed_id_new: 'asset_feed_id_new',
      asset_feed_id_old: 'asset_feed_id_old',
      bid_amount_new: 'bid_amount_new',
      bid_amount_old: 'bid_amount_old',
      bid_info_new: 'bid_info_new',
      bid_info_old: 'bid_info_old',
      bid_type_new: 'bid_type_new',
      bid_type_old: 'bid_type_old',
      conversion_specs_new: 'conversion_specs_new',
      conversion_specs_old: 'conversion_specs_old',
      created_time: 'created_time',
      display_sequence_new: 'display_sequence_new',
      display_sequence_old: 'display_sequence_old',
      engagement_audience_new: 'engagement_audience_new',
      engagement_audience_old: 'engagement_audience_old',
      event_time: 'event_time',
      event_type: 'event_type',
      force_run_status_new: 'force_run_status_new',
      force_run_status_old: 'force_run_status_old',
      friendly_name_new: 'friendly_name_new',
      friendly_name_old: 'friendly_name_old',
      id: 'id',
      is_reviewer_admin_new: 'is_reviewer_admin_new',
      is_reviewer_admin_old: 'is_reviewer_admin_old',
      objective_new: 'objective_new',
      objective_old: 'objective_old',
      objective_source_new: 'objective_source_new',
      objective_source_old: 'objective_source_old',
      priority_new: 'priority_new',
      priority_old: 'priority_old',
      reason_new: 'reason_new',
      reason_old: 'reason_old',
      run_status_new: 'run_status_new',
      run_status_old: 'run_status_old',
      source_adgroup_id_new: 'source_adgroup_id_new',
      source_adgroup_id_old: 'source_adgroup_id_old',
      start_time_new: 'start_time_new',
      start_time_old: 'start_time_old',
      stop_time_new: 'stop_time_new',
      stop_time_old: 'stop_time_old',
      target_spec_id_new: 'target_spec_id_new',
      target_spec_id_old: 'target_spec_id_old',
      tracking_pixel_ids_new: 'tracking_pixel_ids_new',
      tracking_pixel_ids_old: 'tracking_pixel_ids_old',
      tracking_specs_new: 'tracking_specs_new',
      tracking_specs_old: 'tracking_specs_old',
      update_time_new: 'update_time_new',
      update_time_old: 'update_time_old',
      view_tags_new: 'view_tags_new',
      view_tags_old: 'view_tags_old'
    });
  }

  static get ObjectiveNew (): Object {
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
  static get ObjectiveOld (): Object {
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

  get (fields, params): AdgroupActivity {
    return this.read(
      fields,
      params
    );
  }
}
