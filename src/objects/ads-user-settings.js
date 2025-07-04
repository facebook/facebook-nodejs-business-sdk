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
 * AdsUserSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsUserSettings extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      a_plus_c_survey_seen: 'a_plus_c_survey_seen',
      add_overlays_opt_in_status: 'add_overlays_opt_in_status',
      adgroup_name_template: 'adgroup_name_template',
      ads_cs_catalog_opt_out_timestamp: 'ads_cs_catalog_opt_out_timestamp',
      ads_tool_visits: 'ads_tool_visits',
      aplusc_carousel_cda_opt_in_status: 'aplusc_carousel_cda_opt_in_status',
      aplusc_carousel_inline_comment_opt_in_status: 'aplusc_carousel_inline_comment_opt_in_status',
      aplusc_enhance_cta_opt_in_status: 'aplusc_enhance_cta_opt_in_status',
      aplusc_epa_opt_in_status: 'aplusc_epa_opt_in_status',
      aplusc_local_store_extension_opt_in_status: 'aplusc_local_store_extension_opt_in_status',
      aplusc_opt_out_friction: 'aplusc_opt_out_friction',
      aplusc_videofilter_opt_in_status: 'aplusc_videofilter_opt_in_status',
      aplusc_videouncrop_opt_in_status: 'aplusc_videouncrop_opt_in_status',
      autoflow_lite_opt_in_status: 'autoflow_lite_opt_in_status',
      autoflow_lite_should_opt_in: 'autoflow_lite_should_opt_in',
      blended_ads_creation_defaulting_opt_in_status: 'blended_ads_creation_defaulting_opt_in_status',
      blended_ads_creation_defaulting_opt_out_campaign_group_ids: 'blended_ads_creation_defaulting_opt_out_campaign_group_ids',
      bookmarked_pages: 'bookmarked_pages',
      campaign_group_name_template: 'campaign_group_name_template',
      campaign_name_template: 'campaign_name_template',
      carousel_to_video_opt_in_status: 'carousel_to_video_opt_in_status',
      connected_sources_catalog_opt_in_status: 'connected_sources_catalog_opt_in_status',
      da_add_overlays_opt_in_status: 'da_add_overlays_opt_in_status',
      da_hide_price_opt_in_status: 'da_hide_price_opt_in_status',
      default_creation_mode: 'default_creation_mode',
      dynamic_partnership_ads_opt_in_status: 'dynamic_partnership_ads_opt_in_status',
      enhance_cta_text_extraction_opt_in_status: 'enhance_cta_text_extraction_opt_in_status',
      export_format_default: 'export_format_default',
      focus_mode_default: 'focus_mode_default',
      gen_ai_alpha_test_status: 'gen_ai_alpha_test_status',
      id: 'id',
      image_background_generation_opt_in_status: 'image_background_generation_opt_in_status',
      image_brightness_and_contrast_opt_in_status: 'image_brightness_and_contrast_opt_in_status',
      image_expansion_opt_in_status: 'image_expansion_opt_in_status',
      is_ads_ai_consented: 'is_ads_ai_consented',
      is_cbo_default_on: 'is_cbo_default_on',
      is_se_removal_guidance_dismissed: 'is_se_removal_guidance_dismissed',
      last_used_post_format: 'last_used_post_format',
      last_visited_time: 'last_visited_time',
      metadata_brand_kit_opt_in_status: 'metadata_brand_kit_opt_in_status',
      music_on_reels_opt_in: 'music_on_reels_opt_in',
      muted_cbo_midflight_education_messages: 'muted_cbo_midflight_education_messages',
      onsite_destination_optimization_opt_in: 'onsite_destination_optimization_opt_in',
      open_tabs: 'open_tabs',
      pac_relaxation_opt_in_status: 'pac_relaxation_opt_in_status',
      placement_group_square_opt_in_status: 'placement_group_square_opt_in_status',
      placement_group_vertical_opt_in_status: 'placement_group_vertical_opt_in_status',
      previously_seen_recommendations: 'previously_seen_recommendations',
      product_extensions_opt_in: 'product_extensions_opt_in',
      sa_off_conv_loc_seen: 'sa_off_conv_loc_seen',
      saoff_published_l2_conv_loc_seen: 'saoff_published_l2_conv_loc_seen',
      saon_migr_l1_seen_status: 'saon_migr_l1_seen_status',
      selected_ad_account: 'selected_ad_account',
      selected_comparison_timerange: 'selected_comparison_timerange',
      selected_metric_cic: 'selected_metric_cic',
      selected_metrics_cic: 'selected_metrics_cic',
      selected_page: 'selected_page',
      selected_page_section: 'selected_page_section',
      selected_power_editor_pane: 'selected_power_editor_pane',
      selected_stat_range: 'selected_stat_range',
      should_export_filter_empty_cols: 'should_export_filter_empty_cols',
      should_export_rows_without_unsupported_feature: 'should_export_rows_without_unsupported_feature',
      should_not_auto_expand_tree_table: 'should_not_auto_expand_tree_table',
      should_not_show_cbo_campaign_toggle_off_confirmation_message: 'should_not_show_cbo_campaign_toggle_off_confirmation_message',
      should_not_show_publish_message_on_editor_close: 'should_not_show_publish_message_on_editor_close',
      show_original_videos_opt_in: 'show_original_videos_opt_in',
      static_ad_product_extensions_opt_in: 'static_ad_product_extensions_opt_in',
      sticky_setting_after_default_on: 'sticky_setting_after_default_on',
      syd_campaign_trends_metric: 'syd_campaign_trends_metric',
      text_optimizations_text_extraction_opt_in_status: 'text_optimizations_text_extraction_opt_in_status',
      text_translation_opt_in_status: 'text_translation_opt_in_status',
      text_variations_sticky_opt_in_status: 'text_variations_sticky_opt_in_status',
      total_coupon_syd_dismissals: 'total_coupon_syd_dismissals',
      total_coupon_upsell_dismissals: 'total_coupon_upsell_dismissals',
      url_prefill_removal_timestamp: 'url_prefill_removal_timestamp',
      use_pe_create_flow: 'use_pe_create_flow',
      use_stepper_primary_entry: 'use_stepper_primary_entry',
      user: 'user',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AdsUserSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
