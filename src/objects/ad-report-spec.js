/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * AdReportSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdReportSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      actions_group_by: 'actions_group_by',
      creation_source: 'creation_source',
      data_columns: 'data_columns',
      date_preset: 'date_preset',
      export_columns: 'export_columns',
      filters: 'filters',
      format_version: 'format_version',
      id: 'id',
      insights_section: 'insights_section',
      name: 'name',
      report_schedule: 'report_schedule',
      report_schedule_id: 'report_schedule_id',
      sort_by: 'sort_by',
      sort_dir: 'sort_dir',
      time_increment: 'time_increment',
      time_interval: 'time_interval',
      time_ranges: 'time_ranges',
    });
  }

  static get ActionsGroupBy (): Object {
    return Object.freeze({
      action_brand: 'action_brand',
      action_canvas_component_id: 'action_canvas_component_id',
      action_canvas_component_name: 'action_canvas_component_name',
      action_carousel_card_id: 'action_carousel_card_id',
      action_carousel_card_name: 'action_carousel_card_name',
      action_category: 'action_category',
      action_converted_brand_tag_id: 'action_converted_brand_tag_id',
      action_converted_category_tag_id: 'action_converted_category_tag_id',
      action_converted_product_id: 'action_converted_product_id',
      action_destination: 'action_destination',
      action_device: 'action_device',
      action_event_channel: 'action_event_channel',
      action_target_id: 'action_target_id',
      action_type: 'action_type',
      action_video_sound: 'action_video_sound',
      action_video_type: 'action_video_type',
      interactive_component_sticker_id: 'interactive_component_sticker_id',
      interactive_component_sticker_response: 'interactive_component_sticker_response',
    });
  }
  static get CreationSource (): Object {
    return Object.freeze({
      adsexceladdin: 'adsExcelAddin',
      adsmanagerreporting: 'adsManagerReporting',
      newadsmanager: 'newAdsManager',
    });
  }
  static get DatePreset (): Object {
    return Object.freeze({
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
      lifetime: 'lifetime',
      this_month: 'this_month',
      this_quarter: 'this_quarter',
      this_week_mon_today: 'this_week_mon_today',
      this_week_sun_today: 'this_week_sun_today',
      this_year: 'this_year',
      today: 'today',
      yesterday: 'yesterday',
    });
  }
  static get Format (): Object {
    return Object.freeze({
      csv: 'CSV',
      json: 'JSON',
      xls: 'XLS',
      xlsx: 'XLSX',
    });
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdReportSpec {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdReportSpec {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
