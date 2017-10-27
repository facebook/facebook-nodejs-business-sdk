/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AdAsyncRequest from './ad-async-request';

/**
 * AdAsyncRequestSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAsyncRequestSet extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      canceled_count: 'canceled_count',
      created_time: 'created_time',
      error_count: 'error_count',
      id: 'id',
      in_progress_count: 'in_progress_count',
      initial_count: 'initial_count',
      is_completed: 'is_completed',
      name: 'name',
      notification_mode: 'notification_mode',
      notification_result: 'notification_result',
      notification_status: 'notification_status',
      notification_uri: 'notification_uri',
      owner_id: 'owner_id',
      success_count: 'success_count',
      total_count: 'total_count',
      updated_time: 'updated_time'
    });
  }

  static get NotificationMode (): Object {
    return Object.freeze({
      off: 'OFF',
      on_complete: 'ON_COMPLETE'
    });
  }
  static get NotificationStatus (): Object {
    return Object.freeze({
      not_sent: 'NOT_SENT',
      sending: 'SENDING',
      sent: 'SENT'
    });
  }

  getRequests (fields, params, fetchFirstPage = true): AdAsyncRequest {
    return this.getEdge(
      AdAsyncRequest,
      fields,
      params,
      fetchFirstPage,
      '/requests'
    );
  }

  get (fields, params): AdAsyncRequestSet {
    return this.read(
      fields,
      params
    );
  }
}
