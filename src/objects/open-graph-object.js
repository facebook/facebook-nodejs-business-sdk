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
import Comment from './comment';
import Profile from './profile';

/**
 * OpenGraphObject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OpenGraphObject extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      admins: 'admins',
      application: 'application',
      audio: 'audio',
      created_time: 'created_time',
      description: 'description',
      determiner: 'determiner',
      engagement: 'engagement',
      id: 'id',
      image: 'image',
      is_scraped: 'is_scraped',
      locale: 'locale',
      location: 'location',
      post_action_id: 'post_action_id',
      profile_id: 'profile_id',
      restrictions: 'restrictions',
      see_also: 'see_also',
      site_name: 'site_name',
      title: 'title',
      type: 'type',
      updated_time: 'updated_time',
      video: 'video',
    });
  }


  getComments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Comment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  getReactions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/reactions'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): OpenGraphObject {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
