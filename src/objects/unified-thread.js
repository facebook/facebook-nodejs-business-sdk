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
      wallpaper: 'wallpaper'
    });
  }

  get (fields, params): UnifiedThread {
    return this.read(
      fields,
      params
    );
  }
}
