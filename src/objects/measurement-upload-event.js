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
      group: 'group',
      id: 'id',
      partner: 'partner',
      upload_end_time: 'upload_end_time',
      upload_start_time: 'upload_start_time',
      upload_tag: 'upload_tag',
      version: 'version'
    });
  }

  static get Group (): Object {
    return Object.freeze({
      sunday: 'SUNDAY',
      monday: 'MONDAY'
    });
  }
  static get Version (): Object {
    return Object.freeze({
      weekly: 'WEEKLY',
      evaluation: 'EVALUATION'
    });
  }

  get (fields, params): MeasurementUploadEvent {
    return this.read(
      fields,
      params
    );
  }
}
