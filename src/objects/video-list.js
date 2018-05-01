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
      videos_count: 'videos_count'
    });
  }

  deleteVideos (params): AbstractObject {
    return super.deleteEdge(
      '/videos',
      params
    );
  }

  createVideo (fields, params): VideoList {
    return this.createEdge(
      '/videos',
      fields,
      params,
      VideoList
    );
  }

  get (fields, params): VideoList {
    return this.read(
      fields,
      params
    );
  }
}
