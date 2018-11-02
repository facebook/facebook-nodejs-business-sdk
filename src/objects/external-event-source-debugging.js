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
 * ExternalEventSourceDebugging
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExternalEventSourceDebugging extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_version: 'app_version',
      content_url: 'content_url',
      device_os: 'device_os',
      diagnostic: 'diagnostic',
      event_name: 'event_name',
      event_time: 'event_time',
      missing_ids: 'missing_ids',
      severity: 'severity',
      id: 'id'
    });
  }
}
