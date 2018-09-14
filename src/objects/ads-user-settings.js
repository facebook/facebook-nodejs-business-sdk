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
 * AdsUserSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsUserSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adgroup_column_visibility: 'adgroup_column_visibility',
      adgroup_name_template: 'adgroup_name_template',
      adgroup_widths: 'adgroup_widths',
      ads_tool_visits: 'ads_tool_visits',
      bookmarked_pages: 'bookmarked_pages',
      campaign_column_visibility: 'campaign_column_visibility',
      campaign_group_column_visibility: 'campaign_group_column_visibility',
      campaign_group_name_template: 'campaign_group_name_template',
      campaign_group_widths: 'campaign_group_widths',
      campaign_name_template: 'campaign_name_template',
      campaign_widths: 'campaign_widths',
      default_creation_mode: 'default_creation_mode',
      id: 'id',
      last_used_post_format: 'last_used_post_format',
      last_visited_time: 'last_visited_time',
      open_tabs: 'open_tabs',
      selected_ad_account: 'selected_ad_account',
      selected_comparison_timerange: 'selected_comparison_timerange',
      selected_page: 'selected_page',
      selected_page_section: 'selected_page_section',
      selected_power_editor_pane: 'selected_power_editor_pane',
      selected_stat_range: 'selected_stat_range',
      should_not_show_publish_message_on_editor_close: 'should_not_show_publish_message_on_editor_close',
      unowned_pages: 'unowned_pages',
      use_pe_create_flow: 'use_pe_create_flow',
      use_stepper_primary_entry: 'use_stepper_primary_entry',
      user: 'user'
    });
  }

  get (fields, params): AdsUserSettings {
    return this.read(
      fields,
      params
    );
  }
}
