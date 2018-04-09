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
      canvas_component_avg_pct_view: 'canvas_component_avg_pct_view',
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
      value_1d_view: '1D_VIEW',
      value_7d_view: '7D_VIEW',
      value_28d_view: '28D_VIEW',
      value_1d_click: '1D_CLICK',
      value_7d_click: '7D_CLICK',
      value_28d_click: '28D_CLICK',
      default: 'DEFAULT'
    });
  }
  static get ActionBreakdowns (): Object {
    return Object.freeze({
      action_canvas_component_name: 'ACTION_CANVAS_COMPONENT_NAME',
      action_carousel_card_id: 'ACTION_CAROUSEL_CARD_ID',
      action_carousel_card_name: 'ACTION_CAROUSEL_CARD_NAME',
      action_destination: 'ACTION_DESTINATION',
      action_device: 'ACTION_DEVICE',
      action_link_click_destination: 'ACTION_LINK_CLICK_DESTINATION',
      action_reaction: 'ACTION_REACTION',
      action_target_id: 'ACTION_TARGET_ID',
      action_type: 'ACTION_TYPE',
      action_video_sound: 'ACTION_VIDEO_SOUND',
      action_video_type: 'ACTION_VIDEO_TYPE'
    });
  }
  static get ActionReportTime (): Object {
    return Object.freeze({
      impression: 'IMPRESSION',
      conversion: 'CONVERSION'
    });
  }
  static get Breakdowns (): Object {
    return Object.freeze({
      age: 'AGE',
      country: 'COUNTRY',
      dma: 'DMA',
      gender: 'GENDER',
      frequency_value: 'FREQUENCY_VALUE',
      hourly_stats_aggregated_by_advertiser_time_zone: 'HOURLY_STATS_AGGREGATED_BY_ADVERTISER_TIME_ZONE',
      hourly_stats_aggregated_by_audience_time_zone: 'HOURLY_STATS_AGGREGATED_BY_AUDIENCE_TIME_ZONE',
      impression_device: 'IMPRESSION_DEVICE',
      place_page_id: 'PLACE_PAGE_ID',
      publisher_platform: 'PUBLISHER_PLATFORM',
      platform_position: 'PLATFORM_POSITION',
      device_platform: 'DEVICE_PLATFORM',
      product_id: 'PRODUCT_ID',
      region: 'REGION'
    });
  }
  static get DatePreset (): Object {
    return Object.freeze({
      today: 'TODAY',
      yesterday: 'YESTERDAY',
      this_month: 'THIS_MONTH',
      last_month: 'LAST_MONTH',
      this_quarter: 'THIS_QUARTER',
      lifetime: 'LIFETIME',
      last_3d: 'LAST_3D',
      last_7d: 'LAST_7D',
      last_14d: 'LAST_14D',
      last_28d: 'LAST_28D',
      last_30d: 'LAST_30D',
      last_90d: 'LAST_90D',
      last_week_mon_sun: 'LAST_WEEK_MON_SUN',
      last_week_sun_sat: 'LAST_WEEK_SUN_SAT',
      last_quarter: 'LAST_QUARTER',
      last_year: 'LAST_YEAR',
      this_week_mon_today: 'THIS_WEEK_MON_TODAY',
      this_week_sun_today: 'THIS_WEEK_SUN_TODAY',
      this_year: 'THIS_YEAR'
    });
  }
  static get Level (): Object {
    return Object.freeze({
      ad: 'AD',
      adset: 'ADSET',
      campaign: 'CAMPAIGN',
      account: 'ACCOUNT'
    });
  }
  static get SummaryActionBreakdowns (): Object {
    return Object.freeze({
      action_canvas_component_name: 'ACTION_CANVAS_COMPONENT_NAME',
      action_carousel_card_id: 'ACTION_CAROUSEL_CARD_ID',
      action_carousel_card_name: 'ACTION_CAROUSEL_CARD_NAME',
      action_destination: 'ACTION_DESTINATION',
      action_device: 'ACTION_DEVICE',
      action_link_click_destination: 'ACTION_LINK_CLICK_DESTINATION',
      action_reaction: 'ACTION_REACTION',
      action_target_id: 'ACTION_TARGET_ID',
      action_type: 'ACTION_TYPE',
      action_video_sound: 'ACTION_VIDEO_SOUND',
      action_video_type: 'ACTION_VIDEO_TYPE'
    });
  }
  static get Summary (): Object {
    return Object.freeze({
      id: 'ID',
      account_id: 'ACCOUNT_ID',
      async_percent_completion: 'ASYNC_PERCENT_COMPLETION',
      async_status: 'ASYNC_STATUS',
      date_start: 'DATE_START',
      date_stop: 'DATE_STOP',
      emails: 'EMAILS',
      friendly_name: 'FRIENDLY_NAME',
      is_bookmarked: 'IS_BOOKMARKED',
      is_running: 'IS_RUNNING',
      schedule_id: 'SCHEDULE_ID',
      time_completed: 'TIME_COMPLETED',
      time_ref: 'TIME_REF'
    });
  }
}
