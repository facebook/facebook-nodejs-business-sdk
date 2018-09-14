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
 * AdsReportBuilder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilder extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      headers: 'headers',
      rows: 'rows',
      id: 'id'
    });
  }

  static get AttributionWindows (): Object {
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
  static get DimensionGroups (): Object {
    return Object.freeze({
      age: 'age',
      country: 'country',
      gender: 'gender',
      region: 'region',
      region_id: 'region_id',
      dma: 'dma',
      impression_device: 'impression_device',
      publisher_platform: 'publisher_platform',
      device_platform: 'device_platform',
      platform_position: 'platform_position',
      activity_recency: 'activity_recency',
      place_page_id: 'place_page_id',
      household_composition: 'household_composition',
      household_income: 'household_income',
      product_id: 'product_id',
      frequency_value: 'frequency_value',
      hourly_stats_aggregated_by_advertiser_time_zone: 'hourly_stats_aggregated_by_advertiser_time_zone',
      hourly_stats_aggregated_by_audience_time_zone: 'hourly_stats_aggregated_by_audience_time_zone',
      ad_variation: 'ad_variation',
      image_asset: 'image_asset',
      image_asset_value: 'image_asset_value',
      video_asset: 'video_asset',
      video_asset_value: 'video_asset_value',
      link_url_asset: 'link_url_asset',
      link_url_asset_value: 'link_url_asset_value',
      body_asset: 'body_asset',
      body_asset_value: 'body_asset_value',
      title_asset: 'title_asset',
      title_asset_value: 'title_asset_value',
      description_asset: 'description_asset',
      description_asset_value: 'description_asset_value',
      call_to_action_asset: 'call_to_action_asset',
      call_to_action_asset_value: 'call_to_action_asset_value',
      action_device: 'action_device',
      action_reaction: 'action_reaction',
      action_destination: 'action_destination',
      action_event_channel: 'action_event_channel',
      action_link_click_destination: 'action_link_click_destination',
      action_video_type: 'action_video_type',
      action_video_sound: 'action_video_sound',
      action_carousel_card_id: 'action_carousel_card_id',
      action_carousel_card_name: 'action_carousel_card_name',
      action_canvas_component_id: 'action_canvas_component_id',
      action_canvas_component_name: 'action_canvas_component_name',
      ad_id: 'ad_id',
      ad_name: 'ad_name',
      adset_id: 'adset_id',
      adset_name: 'adset_name',
      campaign_id: 'campaign_id',
      campaign_name: 'campaign_name',
      creative_fingerprint: 'creative_fingerprint',
      adset_bid_type: 'adset_bid_type',
      adset_bid_value: 'adset_bid_value',
      budget_type: 'budget_type',
      budget_value: 'budget_value',
      adset_budget_type: 'adset_budget_type',
      adset_budget_value: 'adset_budget_value',
      campaign_budget_type: 'campaign_budget_type',
      campaign_budget_value: 'campaign_budget_value',
      buying_type: 'buying_type',
      delivery_info: 'delivery_info',
      objective: 'objective',
      delivery_start: 'delivery_start',
      delivery_end: 'delivery_end',
      ad_delivery: 'ad_delivery',
      adset_delivery: 'adset_delivery',
      campaign_delivery: 'campaign_delivery',
      days_1: 'days_1',
      days_7: 'days_7',
      days_14: 'days_14',
      monthly: 'monthly',
      all_days: 'all_days'
    });
  }
  static get Dimensions (): Object {
    return Object.freeze({
      age: 'age',
      country: 'country',
      gender: 'gender',
      region: 'region',
      region_id: 'region_id',
      dma: 'dma',
      impression_device: 'impression_device',
      publisher_platform: 'publisher_platform',
      device_platform: 'device_platform',
      platform_position: 'platform_position',
      activity_recency: 'activity_recency',
      place_page_id: 'place_page_id',
      household_composition: 'household_composition',
      household_income: 'household_income',
      product_id: 'product_id',
      frequency_value: 'frequency_value',
      hourly_stats_aggregated_by_advertiser_time_zone: 'hourly_stats_aggregated_by_advertiser_time_zone',
      hourly_stats_aggregated_by_audience_time_zone: 'hourly_stats_aggregated_by_audience_time_zone',
      ad_variation: 'ad_variation',
      image_asset: 'image_asset',
      image_asset_value: 'image_asset_value',
      video_asset: 'video_asset',
      video_asset_value: 'video_asset_value',
      link_url_asset: 'link_url_asset',
      link_url_asset_value: 'link_url_asset_value',
      body_asset: 'body_asset',
      body_asset_value: 'body_asset_value',
      title_asset: 'title_asset',
      title_asset_value: 'title_asset_value',
      description_asset: 'description_asset',
      description_asset_value: 'description_asset_value',
      call_to_action_asset: 'call_to_action_asset',
      call_to_action_asset_value: 'call_to_action_asset_value',
      action_device: 'action_device',
      action_reaction: 'action_reaction',
      action_destination: 'action_destination',
      action_event_channel: 'action_event_channel',
      action_link_click_destination: 'action_link_click_destination',
      action_video_type: 'action_video_type',
      action_video_sound: 'action_video_sound',
      action_carousel_card_id: 'action_carousel_card_id',
      action_carousel_card_name: 'action_carousel_card_name',
      action_canvas_component_id: 'action_canvas_component_id',
      action_canvas_component_name: 'action_canvas_component_name',
      ad_id: 'ad_id',
      ad_name: 'ad_name',
      adset_id: 'adset_id',
      adset_name: 'adset_name',
      campaign_id: 'campaign_id',
      campaign_name: 'campaign_name',
      creative_fingerprint: 'creative_fingerprint',
      adset_bid_type: 'adset_bid_type',
      adset_bid_value: 'adset_bid_value',
      budget_type: 'budget_type',
      budget_value: 'budget_value',
      adset_budget_type: 'adset_budget_type',
      adset_budget_value: 'adset_budget_value',
      campaign_budget_type: 'campaign_budget_type',
      campaign_budget_value: 'campaign_budget_value',
      buying_type: 'buying_type',
      delivery_info: 'delivery_info',
      objective: 'objective',
      delivery_start: 'delivery_start',
      delivery_end: 'delivery_end',
      ad_delivery: 'ad_delivery',
      adset_delivery: 'adset_delivery',
      campaign_delivery: 'campaign_delivery',
      days_1: 'days_1',
      days_7: 'days_7',
      days_14: 'days_14',
      monthly: 'monthly',
      all_days: 'all_days'
    });
  }

  get (fields, params): AdsReportBuilder {
    return this.read(
      fields,
      params
    );
  }
}
