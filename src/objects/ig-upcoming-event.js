 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * IGUpcomingEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUpcomingEvent extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      end_time: 'end_time',
      id: 'id',
      notification_subtypes: 'notification_subtypes',
      notification_target_time: 'notification_target_time',
      start_time: 'start_time',
      title: 'title',
    });
  }

  static get NotificationSubtypes (): Object {
    return Object.freeze({
      after_event_1day: 'AFTER_EVENT_1DAY',
      after_event_2day: 'AFTER_EVENT_2DAY',
      after_event_3day: 'AFTER_EVENT_3DAY',
      after_event_4day: 'AFTER_EVENT_4DAY',
      after_event_5day: 'AFTER_EVENT_5DAY',
      after_event_6day: 'AFTER_EVENT_6DAY',
      after_event_7day: 'AFTER_EVENT_7DAY',
      before_event_15min: 'BEFORE_EVENT_15MIN',
      before_event_1day: 'BEFORE_EVENT_1DAY',
      before_event_1hour: 'BEFORE_EVENT_1HOUR',
      before_event_2day: 'BEFORE_EVENT_2DAY',
      event_start: 'EVENT_START',
      rescheduled: 'RESCHEDULED',
    });
  }
  static get NotificationTargetTime (): Object {
    return Object.freeze({
      event_end: 'EVENT_END',
      event_start: 'EVENT_START',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): IGUpcomingEvent {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): IGUpcomingEvent {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
