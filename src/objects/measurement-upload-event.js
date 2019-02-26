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
 * MeasurementUploadEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MeasurementUploadEvent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      aggregation_level: 'aggregation_level',
      conversion_end_date: 'conversion_end_date',
      conversion_start_date: 'conversion_start_date',
      event_status: 'event_status',
      group: 'group',
      id: 'id',
      lookback_window: 'lookback_window',
      match_universe: 'match_universe',
      partner: 'partner',
      upload_end_time: 'upload_end_time',
      upload_start_time: 'upload_start_time',
      upload_tag: 'upload_tag',
      version: 'version'
    });
  }

  static get AggregationLevel (): Object {
    return Object.freeze({
      daily: 'DAILY',
      none: 'NONE',
      weekly: 'WEEKLY'
    });
  }
  static get EventStatus (): Object {
    return Object.freeze({
      cancelcompleted: 'CANCELCOMPLETED',
      canceled: 'CANCELED',
      completed: 'COMPLETED',
      failed: 'FAILED',
      started: 'STARTED',
      uploaded: 'UPLOADED'
    });
  }
  static get Group (): Object {
    return Object.freeze({
      monday: 'MONDAY',
      sunday: 'SUNDAY'
    });
  }
  static get LookbackWindow (): Object {
    return Object.freeze({
      days30: 'DAYS30',
      days45: 'DAYS45',
      days60: 'DAYS60',
      days90: 'DAYS90'
    });
  }
  static get MatchUniverse (): Object {
    return Object.freeze({
      full: 'FULL',
      pii: 'PII',
      pixel: 'PIXEL'
    });
  }
  static get Version (): Object {
    return Object.freeze({
      evaluation: 'EVALUATION',
      weekly: 'WEEKLY'
    });
  }

  get (fields, params): MeasurementUploadEvent {
    return this.read(
      fields,
      params
    );
  }
}
