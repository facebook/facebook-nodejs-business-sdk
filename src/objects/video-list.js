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
import Comment from './comment';
import AdVideo from './ad-video';

/**
 * VideoList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoList extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_time: 'creation_time',
      description: 'description',
      id: 'id',
      last_modified: 'last_modified',
      owner: 'owner',
      season_number: 'season_number',
      thumbnail: 'thumbnail',
      title: 'title',
      videos_count: 'videos_count',
    });
  }


  createComment (fields: Array<string>, params: Object = {}): Promise<Comment> {
    return this.createEdge(
      '/comments',
      fields,
      params,
      Comment
    );
  }

  deleteVideos (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/videos',
      params
    );
  }

  getVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  createVideo (fields: Array<string>, params: Object = {}): Promise<VideoList> {
    return this.createEdge(
      '/videos',
      fields,
      params,
      VideoList
    );
  }

  
  get (fields: Array<string>, params: Object = {}): VideoList {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
