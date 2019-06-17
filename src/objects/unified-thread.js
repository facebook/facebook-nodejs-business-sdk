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
import Cursor from './../cursor';

/**
 * UnifiedThread
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UnifiedThread extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_reply: 'can_reply',
      former_participants: 'former_participants',
      id: 'id',
      is_subscribed: 'is_subscribed',
      link: 'link',
      message_count: 'message_count',
      name: 'name',
      participants: 'participants',
      scoped_thread_key: 'scoped_thread_key',
      senders: 'senders',
      snippet: 'snippet',
      subject: 'subject',
      unread_count: 'unread_count',
      updated_time: 'updated_time',
      wallpaper: 'wallpaper',
    });
  }


  getMessages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/messages'
    );
  }

  createMessage (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/messages',
      fields,
      params,
      
    );
  }

  
  get (fields: Array<string>, params: Object = {}): UnifiedThread {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
