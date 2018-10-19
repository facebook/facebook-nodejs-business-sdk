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
 * AdsInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsInsights extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_currency: 'account_currency',
      account_id: 'account_id',
      account_name: 'account_name',
      action_values: 'action_values',
      actions: 'actions',
      activity_recency: 'activity_recency',
      ad_click_actions: 'ad_click_actions',
      ad_format_asset: 'ad_format_asset',
      ad_id: 'ad_id',
      ad_impression_actions: 'ad_impression_actions',
      ad_name: 'ad_name',
      adset_id: 'adset_id',
      adset_name: 'adset_name',
      age: 'age',
      age_targeting: 'age_targeting',
      bid_type: 'bid_type',
      body_asset: 'body_asset',
      buying_type: 'buying_type',
      call_to_action_asset: 'call_to_action_asset',
      campaign_id: 'campaign_id',
      campaign_name: 'campaign_name',
      canvas_avg_view_percent: 'canvas_avg_view_percent',
      canvas_avg_view_time: 'canvas_avg_view_time',
      canvas_component_avg_pct_view: 'canvas_component_avg_pct_view',
      clicks: 'clicks',
      cost_per_10_sec_video_view: 'cost_per_10_sec_video_view',
      cost_per_15_sec_video_view: 'cost_per_15_sec_video_view',
      cost_per_2_sec_continuous_video_view: 'cost_per_2_sec_continuous_video_view',
      cost_per_action_type: 'cost_per_action_type',
      cost_per_ad_click: 'cost_per_ad_click',
      cost_per_dda_countby_convs: 'cost_per_dda_countby_convs',
      cost_per_estimated_ad_recallers: 'cost_per_estimated_ad_recallers',
      cost_per_inline_link_click: 'cost_per_inline_link_click',
      cost_per_inline_post_engagement: 'cost_per_inline_post_engagement',
      cost_per_one_thousand_ad_impression: 'cost_per_one_thousand_ad_impression',
      cost_per_outbound_click: 'cost_per_outbound_click',
      cost_per_thruplay: 'cost_per_thruplay',
      cost_per_unique_action_type: 'cost_per_unique_action_type',
      cost_per_unique_click: 'cost_per_unique_click',
      cost_per_unique_inline_link_click: 'cost_per_unique_inline_link_click',
      cost_per_unique_outbound_click: 'cost_per_unique_outbound_click',
      country: 'country',
      cpc: 'cpc',
      cpm: 'cpm',
      cpp: 'cpp',
      created_time: 'created_time',
      creative_fingerprint: 'creative_fingerprint',
      ctr: 'ctr',
      date_start: 'date_start',
      date_stop: 'date_stop',
      dda_countby_convs: 'dda_countby_convs',
      description_asset: 'description_asset',
      device_platform: 'device_platform',
      dma: 'dma',
      estimated_ad_recall_rate: 'estimated_ad_recall_rate',
      estimated_ad_recall_rate_lower_bound: 'estimated_ad_recall_rate_lower_bound',
      estimated_ad_recall_rate_upper_bound: 'estimated_ad_recall_rate_upper_bound',
      estimated_ad_recallers: 'estimated_ad_recallers',
      estimated_ad_recallers_lower_bound: 'estimated_ad_recallers_lower_bound',
      estimated_ad_recallers_upper_bound: 'estimated_ad_recallers_upper_bound',
      frequency: 'frequency',
      frequency_value: 'frequency_value',
      gender: 'gender',
      gender_targeting: 'gender_targeting',
      hourly_stats_aggregated_by_advertiser_time_zone: 'hourly_stats_aggregated_by_advertiser_time_zone',
      hourly_stats_aggregated_by_audience_time_zone: 'hourly_stats_aggregated_by_audience_time_zone',
      image_asset: 'image_asset',
      impression_device: 'impression_device',
      impressions: 'impressions',
      impressions_dummy: 'impressions_dummy',
      inline_link_click_ctr: 'inline_link_click_ctr',
      inline_link_clicks: 'inline_link_clicks',
      inline_post_engagement: 'inline_post_engagement',
      labels: 'labels',
      link_url_asset: 'link_url_asset',
      location: 'location',
      media_asset: 'media_asset',
      mobile_app_purchase_roas: 'mobile_app_purchase_roas',
      objective: 'objective',
      outbound_clicks: 'outbound_clicks',
      outbound_clicks_ctr: 'outbound_clicks_ctr',
      place_page_id: 'place_page_id',
      place_page_name: 'place_page_name',
      placement: 'placement',
      platform_position: 'platform_position',
      product_format: 'product_format',
      product_id: 'product_id',
      publisher_platform: 'publisher_platform',
      purchasing_interface: 'purchasing_interface',
      reach: 'reach',
      region: 'region',
      relevance_score: 'relevance_score',
      social_spend: 'social_spend',
      spend: 'spend',
      title_asset: 'title_asset',
      total_action_value: 'total_action_value',
      unique_actions: 'unique_actions',
      unique_clicks: 'unique_clicks',
      unique_ctr: 'unique_ctr',
      unique_inline_link_click_ctr: 'unique_inline_link_click_ctr',
      unique_inline_link_clicks: 'unique_inline_link_clicks',
      unique_link_clicks_ctr: 'unique_link_clicks_ctr',
      unique_outbound_clicks: 'unique_outbound_clicks',
      unique_outbound_clicks_ctr: 'unique_outbound_clicks_ctr',
      unique_video_continuous_2_sec_watched_actions: 'unique_video_continuous_2_sec_watched_actions',
      unique_video_view_10_sec: 'unique_video_view_10_sec',
      unique_video_view_15_sec: 'unique_video_view_15_sec',
      updated_time: 'updated_time',
      video_10_sec_watched_actions: 'video_10_sec_watched_actions',
      video_15_sec_watched_actions: 'video_15_sec_watched_actions',
      video_30_sec_watched_actions: 'video_30_sec_watched_actions',
      video_asset: 'video_asset',
      video_avg_percent_watched_actions: 'video_avg_percent_watched_actions',
      video_avg_time_watched_actions: 'video_avg_time_watched_actions',
      video_continuous_2_sec_watched_actions: 'video_continuous_2_sec_watched_actions',
      video_p100_watched_actions: 'video_p100_watched_actions',
      video_p25_watched_actions: 'video_p25_watched_actions',
      video_p50_watched_actions: 'video_p50_watched_actions',
      video_p75_watched_actions: 'video_p75_watched_actions',
      video_p95_watched_actions: 'video_p95_watched_actions',
      video_play_actions: 'video_play_actions',
      video_play_retention_0_to_15s_actions: 'video_play_retention_0_to_15s_actions',
      video_play_retention_20_to_60s_actions: 'video_play_retention_20_to_60s_actions',
      video_play_retention_graph_actions: 'video_play_retention_graph_actions',
      video_thruplay_watched_actions: 'video_thruplay_watched_actions',
      video_time_watched_actions: 'video_time_watched_actions',
      website_ctr: 'website_ctr',
      website_purchase_roas: 'website_purchase_roas',
      id: 'id'
    });
  }

  static get ActionAttributionWindows (): Object {
    return Object.freeze({
      value_1d_view: '1d_view',
      value_7d_view: '7d_view',
      value_28d_view: '28d_view',
      value_1d_click: '1d_click',
      value_7d_click: '7d_click',
      value_28d_click: '28d_click',
      default: 'default'
    });
  }
  static get ActionBreakdowns (): Object {
    return Object.freeze({
      action_canvas_component_name: 'action_canvas_component_name',
      action_carousel_card_id: 'action_carousel_card_id',
      action_carousel_card_name: 'action_carousel_card_name',
      action_destination: 'action_destination',
      action_device: 'action_device',
      action_link_click_destination: 'action_link_click_destination',
      action_reaction: 'action_reaction',
      action_target_id: 'action_target_id',
      action_type: 'action_type',
      action_video_sound: 'action_video_sound',
      action_video_type: 'action_video_type'
    });
  }
  static get ActionReportTime (): Object {
    return Object.freeze({
      impression: 'impression',
      conversion: 'conversion'
    });
  }
  static get Breakdowns (): Object {
    return Object.freeze({
      age: 'age',
      country: 'country',
      dma: 'dma',
      gender: 'gender',
      frequency_value: 'frequency_value',
      hourly_stats_aggregated_by_advertiser_time_zone: 'hourly_stats_aggregated_by_advertiser_time_zone',
      hourly_stats_aggregated_by_audience_time_zone: 'hourly_stats_aggregated_by_audience_time_zone',
      impression_device: 'impression_device',
      place_page_id: 'place_page_id',
      publisher_platform: 'publisher_platform',
      platform_position: 'platform_position',
      device_platform: 'device_platform',
      product_id: 'product_id',
      region: 'region',
      ad_format_asset: 'ad_format_asset',
      body_asset: 'body_asset',
      call_to_action_asset: 'call_to_action_asset',
      description_asset: 'description_asset',
      image_asset: 'image_asset',
      link_url_asset: 'link_url_asset',
      title_asset: 'title_asset',
      video_asset: 'video_asset'
    });
  }
  static get DatePreset (): Object {
    return Object.freeze({
      today: 'today',
      yesterday: 'yesterday',
      this_month: 'this_month',
      last_month: 'last_month',
      this_quarter: 'this_quarter',
      lifetime: 'lifetime',
      last_3d: 'last_3d',
      last_7d: 'last_7d',
      last_14d: 'last_14d',
      last_28d: 'last_28d',
      last_30d: 'last_30d',
      last_90d: 'last_90d',
      last_week_mon_sun: 'last_week_mon_sun',
      last_week_sun_sat: 'last_week_sun_sat',
      last_quarter: 'last_quarter',
      last_year: 'last_year',
      this_week_mon_today: 'this_week_mon_today',
      this_week_sun_today: 'this_week_sun_today',
      this_year: 'this_year'
    });
  }
  static get Level (): Object {
    return Object.freeze({
      ad: 'ad',
      adset: 'adset',
      campaign: 'campaign',
      account: 'account'
    });
  }
  static get SummaryActionBreakdowns (): Object {
    return Object.freeze({
      action_canvas_component_name: 'action_canvas_component_name',
      action_carousel_card_id: 'action_carousel_card_id',
      action_carousel_card_name: 'action_carousel_card_name',
      action_destination: 'action_destination',
      action_device: 'action_device',
      action_link_click_destination: 'action_link_click_destination',
      action_reaction: 'action_reaction',
      action_target_id: 'action_target_id',
      action_type: 'action_type',
      action_video_sound: 'action_video_sound',
      action_video_type: 'action_video_type'
    });
  }

  get (fields, params): AdsInsights {
    return this.read(
      fields,
      params
    );
  }
}
