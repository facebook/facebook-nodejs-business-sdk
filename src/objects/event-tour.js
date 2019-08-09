/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import Event from './event';
import Page from './page';

/**
 * EventTour
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventTour extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      dominant_color: 'dominant_color',
      end_time: 'end_time',
      id: 'id',
      is_past: 'is_past',
      last_event_timestamp: 'last_event_timestamp',
      name: 'name',
      num_events: 'num_events',
      photo: 'photo',
      publishing_state: 'publishing_state',
      scheduled_publish_timestamp: 'scheduled_publish_timestamp',
      start_time: 'start_time',
      ticketing_uri: 'ticketing_uri',
      video: 'video',
    });
  }


  getEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
    );
  }

  getPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/pages'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): EventTour {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
