/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import ProfilePictureSource from './profile-picture-source';

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


  getPicture (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): ProfilePictureSource {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
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
