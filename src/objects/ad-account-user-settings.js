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
 * AdAccountUserSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountUserSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account: 'ad_account',
      ad_object_export_format: 'ad_object_export_format',
      auto_review_video_caption: 'auto_review_video_caption',
      column_suggestion_status: 'column_suggestion_status',
      default_account_overview_agegender_metrics: 'default_account_overview_agegender_metrics',
      default_account_overview_location_metrics: 'default_account_overview_location_metrics',
      default_account_overview_metrics: 'default_account_overview_metrics',
      default_account_overview_time_metrics: 'default_account_overview_time_metrics',
      default_builtin_column_preset: 'default_builtin_column_preset',
      default_nam_time_range: 'default_nam_time_range',
      draft_mode_enabled: 'draft_mode_enabled',
      export_deleted_items_with_delivery: 'export_deleted_items_with_delivery',
      export_summary_row: 'export_summary_row',
      id: 'id',
      last_used_columns: 'last_used_columns',
      last_used_pe_filters: 'last_used_pe_filters',
      rb_export_format: 'rb_export_format',
      rb_export_raw_data: 'rb_export_raw_data',
      rb_export_summary_row: 'rb_export_summary_row',
      show_archived_data: 'show_archived_data',
      user: 'user'
    });
  }

  getColumnPresets (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/column_presets'
    );
  }

  getFilters (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/filters'
    );
  }

  get (fields, params): AdAccountUserSettings {
    return this.read(
      fields,
      params
    );
  }
}
