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
 * AdAccountUserSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountUserSettings extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      acf_should_opt_out_video_adjustments: 'acf_should_opt_out_video_adjustments',
      aco_sticky_settings: 'aco_sticky_settings',
      actions_quick_view_created: 'actions_quick_view_created',
      active_ads_quick_view_created: 'active_ads_quick_view_created',
      ad_account: 'ad_account',
      ad_object_export_format: 'ad_object_export_format',
      ads_manager_footer_row_toast_impressions: 'ads_manager_footer_row_toast_impressions',
      auto_review_video_caption: 'auto_review_video_caption',
      campaign_overview_columns: 'campaign_overview_columns',
      column_suggestion_status: 'column_suggestion_status',
      conditional_formatting_rules: 'conditional_formatting_rules',
      default_account_overview_agegender_metrics: 'default_account_overview_agegender_metrics',
      default_account_overview_location_metrics: 'default_account_overview_location_metrics',
      default_account_overview_metrics: 'default_account_overview_metrics',
      default_account_overview_time_metrics: 'default_account_overview_time_metrics',
      default_builtin_column_preset: 'default_builtin_column_preset',
      default_nam_time_range: 'default_nam_time_range',
      draft_mode_enabled: 'draft_mode_enabled',
      export_deleted_items_with_delivery: 'export_deleted_items_with_delivery',
      export_summary_row: 'export_summary_row',
      had_delivery_quick_view_created: 'had_delivery_quick_view_created',
      has_seen_groups_column_flexing_experience: 'has_seen_groups_column_flexing_experience',
      has_seen_instagram_column_flexing_experience: 'has_seen_instagram_column_flexing_experience',
      has_seen_leads_column_flexing_experience: 'has_seen_leads_column_flexing_experience',
      has_seen_shops_ads_metrics_onboarding_tour: 'has_seen_shops_ads_metrics_onboarding_tour',
      has_seen_shops_column_flexing_experience: 'has_seen_shops_column_flexing_experience',
      hidden_optimization_tips: 'hidden_optimization_tips',
      high_performing_quick_view_created: 'high_performing_quick_view_created',
      id: 'id',
      is_3p_auth_setting_set: 'is_3p_auth_setting_set',
      is_ads_manager_footer_row_preference_set: 'is_ads_manager_footer_row_preference_set',
      is_ads_manager_footer_row_shown: 'is_ads_manager_footer_row_shown',
      is_text_variation_nux_close: 'is_text_variation_nux_close',
      last_used_columns: 'last_used_columns',
      last_used_pe_filters: 'last_used_pe_filters',
      last_used_website_urls: 'last_used_website_urls',
      outlier_preferences: 'outlier_preferences',
      pinned_ad_object_ids: 'pinned_ad_object_ids',
      rb_export_format: 'rb_export_format',
      rb_export_raw_data: 'rb_export_raw_data',
      rb_export_summary_row: 'rb_export_summary_row',
      saip_advertiser_setup_optimisation_guidance_overall_state: 'saip_advertiser_setup_optimisation_guidance_overall_state',
      saip_advertiser_setup_optimisation_guidance_state: 'saip_advertiser_setup_optimisation_guidance_state',
      shops_ads_metrics_onboarding_tour_close_count: 'shops_ads_metrics_onboarding_tour_close_count',
      shops_ads_metrics_onboarding_tour_last_action_time: 'shops_ads_metrics_onboarding_tour_last_action_time',
      should_default_image_auto_crop: 'should_default_image_auto_crop',
      should_default_image_auto_crop_for_tail: 'should_default_image_auto_crop_for_tail',
      should_default_image_auto_crop_optimization: 'should_default_image_auto_crop_optimization',
      should_default_image_dof_toggle: 'should_default_image_dof_toggle',
      should_default_image_lpp_ads_to_square: 'should_default_image_lpp_ads_to_square',
      should_default_instagram_profile_card_optimization: 'should_default_instagram_profile_card_optimization',
      should_default_text_swapping_optimization: 'should_default_text_swapping_optimization',
      should_logout_of_3p_sourcing: 'should_logout_of_3p_sourcing',
      should_show_shops_ads_metrics_onboarding_tour: 'should_show_shops_ads_metrics_onboarding_tour',
      show_archived_data: 'show_archived_data',
      show_text_variation_nux_tooltip: 'show_text_variation_nux_tooltip',
      syd_campaign_trends_activemetric: 'syd_campaign_trends_activemetric',
      syd_campaign_trends_attribution: 'syd_campaign_trends_attribution',
      syd_campaign_trends_metrics: 'syd_campaign_trends_metrics',
      syd_campaign_trends_objective: 'syd_campaign_trends_objective',
      syd_campaign_trends_time_range: 'syd_campaign_trends_time_range',
      syd_landing_page_opt_in_status: 'syd_landing_page_opt_in_status',
      text_gen_persona_opt_in_type: 'text_gen_persona_opt_in_type',
      text_variations_opt_in_out_ts: 'text_variations_opt_in_out_ts',
      text_variations_opt_in_type: 'text_variations_opt_in_type',
      user: 'user',
    });
  }

  static get SydCampaignTrendsObjective (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      brand_awareness: 'BRAND_AWARENESS',
      event_responses: 'EVENT_RESPONSES',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      local_awareness: 'LOCAL_AWARENESS',
      messages: 'MESSAGES',
      offer_claims: 'OFFER_CLAIMS',
      outcome_app_promotion: 'OUTCOME_APP_PROMOTION',
      outcome_awareness: 'OUTCOME_AWARENESS',
      outcome_engagement: 'OUTCOME_ENGAGEMENT',
      outcome_leads: 'OUTCOME_LEADS',
      outcome_sales: 'OUTCOME_SALES',
      outcome_traffic: 'OUTCOME_TRAFFIC',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      product_catalog_sales: 'PRODUCT_CATALOG_SALES',
      reach: 'REACH',
      store_visits: 'STORE_VISITS',
      video_views: 'VIDEO_VIEWS',
      website_conversions: 'WEBSITE_CONVERSIONS',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): AdAccountUserSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
