/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import User from './user';

/**
 * OpenGraphContext
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OpenGraphContext extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
    });
  }


  getFriendsTaggedAt (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): User {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/friends_tagged_at'
    );
  }

  getMusicListenFriends (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): User {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/music_listen_friends'
    );
  }

  getVideoWatchFriends (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): User {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/video_watch_friends'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): OpenGraphContext {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
