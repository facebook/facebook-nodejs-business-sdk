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
import Comment from './comment';
import Profile from './profile';
import ProfilePictureSource from './profile-picture-source';
import Post from './post';

/**
 * Status
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Status extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      event: 'event',
      from: 'from',
      id: 'id',
      message: 'message',
      place: 'place',
      updated_time: 'updated_time'
    });
  }

  getComments (fields, params, fetchFirstPage = true): Comment {
    return this.getEdge(
      Comment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  createComment (fields, params): Comment {
    return this.createEdge(
      '/comments',
      fields,
      params,
      Comment
    );
  }

  deleteLikes (params): AbstractObject {
    return super.deleteEdge(
      '/likes',
      params
    );
  }

  getLikes (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  createLike (fields, params): Status {
    return this.createEdge(
      '/likes',
      fields,
      params,
      Status
    );
  }

  getPicture (fields, params, fetchFirstPage = true): ProfilePictureSource {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getReactions (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/reactions'
    );
  }

  getShareDPosts (fields, params, fetchFirstPage = true): Post {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/sharedposts'
    );
  }

  getTags (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/tags'
    );
  }

  get (fields, params): Status {
    return this.read(
      fields,
      params
    );
  }
}
