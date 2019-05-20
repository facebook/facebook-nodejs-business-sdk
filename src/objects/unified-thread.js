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


  getMessages (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/messages'
    );
  }

  createMessage (fields, params): AbstractObject {
    return this.createEdge(
      '/messages',
      fields,
      params,
      
    );
  }

  get (fields, params): UnifiedThread {
    return this.read(
      fields,
      params
    );
  }
}
