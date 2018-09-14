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
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import Post from './post';

/**
 * Album
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Album extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      backdated_time: 'backdated_time',
      backdated_time_granularity: 'backdated_time_granularity',
      can_backdate: 'can_backdate',
      can_upload: 'can_upload',
      count: 'count',
      cover_photo: 'cover_photo',
      created_time: 'created_time',
      description: 'description',
      edit_link: 'edit_link',
      event: 'event',
      from: 'from',
      id: 'id',
      is_user_facing: 'is_user_facing',
      link: 'link',
      location: 'location',
      modified_major: 'modified_major',
      name: 'name',
      photo_count: 'photo_count',
      place: 'place',
      privacy: 'privacy',
      type: 'type',
      updated_time: 'updated_time',
      video_count: 'video_count'
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

  createLike (fields, params): Album {
    return this.createEdge(
      '/likes',
      fields,
      params,
      Album
    );
  }

  getPhotos (fields, params, fetchFirstPage = true): Photo {
    return this.getEdge(
      Photo,
      fields,
      params,
      fetchFirstPage,
      '/photos'
    );
  }

  createPhoto (fields, params): Photo {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo
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

  get (fields, params): Album {
    return this.read(
      fields,
      params
    );
  }
}
