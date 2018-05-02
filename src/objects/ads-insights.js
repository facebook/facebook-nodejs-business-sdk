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
      ad_id: 'ad_id',
      ad_name: 'ad_name',
      adset_id: 'adset_id',
      adset_name: 'adset_name',
      buying_type: 'buying_type',
      call_to_action_clicks: 'call_to_action_clicks',
      campaign_id: 'campaign_id',
      campaign_name: 'campaign_name',
      canvas_avg_view_percent: 'canvas_avg_view_percent',
      canvas_avg_view_time: 'canvas_avg_view_time',
      clicks: 'clicks',
      cost_per_10_sec_video_view: 'cost_per_10_sec_video_view',
      cost_per_action_type: 'cost_per_action_type',
      cost_per_estimated_ad_recallers: 'cost_per_estimated_ad_recallers',
      cost_per_inline_link_click: 'cost_per_inline_link_click',
      cost_per_inline_post_engagement: 'cost_per_inline_post_engagement',
      cost_per_outbound_click: 'cost_per_outbound_click',
      cost_per_total_action: 'cost_per_total_action',
      cost_per_unique_action_type: 'cost_per_unique_action_type',
      cost_per_unique_click: 'cost_per_unique_click',
      cost_per_unique_inline_link_click: 'cost_per_unique_inline_link_click',
      cost_per_unique_outbound_click: 'cost_per_unique_outbound_click',
      cpc: 'cpc',
      cpm: 'cpm',
      cpp: 'cpp',
      ctr: 'ctr',
      date_start: 'date_start',
      date_stop: 'date_stop',
      estimated_ad_recall_rate: 'estimated_ad_recall_rate',
      estimated_ad_recallers: 'estimated_ad_recallers',
      frequency: 'frequency',
      impressions: 'impressions',
      inline_link_click_ctr: 'inline_link_click_ctr',
      inline_link_clicks: 'inline_link_clicks',
      inline_post_engagement: 'inline_post_engagement',
      mobile_app_purchase_roas: 'mobile_app_purchase_roas',
      objective: 'objective',
      outbound_clicks: 'outbound_clicks',
      outbound_clicks_ctr: 'outbound_clicks_ctr',
      place_page_name: 'place_page_name',
      reach: 'reach',
      relevance_score: 'relevance_score',
      social_clicks: 'social_clicks',
      social_impressions: 'social_impressions',
      social_reach: 'social_reach',
      social_spend: 'social_spend',
      spend: 'spend',
      total_action_value: 'total_action_value',
      total_actions: 'total_actions',
      total_unique_actions: 'total_unique_actions',
      unique_actions: 'unique_actions',
      unique_clicks: 'unique_clicks',
      unique_ctr: 'unique_ctr',
      unique_inline_link_click_ctr: 'unique_inline_link_click_ctr',
      unique_inline_link_clicks: 'unique_inline_link_clicks',
      unique_link_clicks_ctr: 'unique_link_clicks_ctr',
      unique_outbound_clicks: 'unique_outbound_clicks',
      unique_outbound_clicks_ctr: 'unique_outbound_clicks_ctr',
      unique_social_clicks: 'unique_social_clicks',
      video_10_sec_watched_actions: 'video_10_sec_watched_actions',
      video_30_sec_watched_actions: 'video_30_sec_watched_actions',
      video_avg_percent_watched_actions: 'video_avg_percent_watched_actions',
      video_avg_time_watched_actions: 'video_avg_time_watched_actions',
      video_p100_watched_actions: 'video_p100_watched_actions',
      video_p25_watched_actions: 'video_p25_watched_actions',
      video_p50_watched_actions: 'video_p50_watched_actions',
      video_p75_watched_actions: 'video_p75_watched_actions',
      video_p95_watched_actions: 'video_p95_watched_actions',
      website_ctr: 'website_ctr',
      website_purchase_roas: 'website_purchase_roas'
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
  static get Summary (): Object {
    return Object.freeze({
      id: 'id',
      account_id: 'account_id',
      async_percent_completion: 'async_percent_completion',
      async_status: 'async_status',
      date_start: 'date_start',
      date_stop: 'date_stop',
      emails: 'emails',
      friendly_name: 'friendly_name',
      is_bookmarked: 'is_bookmarked',
      is_running: 'is_running',
      schedule_id: 'schedule_id',
      time_completed: 'time_completed',
      time_ref: 'time_ref'
    });
  }
}
