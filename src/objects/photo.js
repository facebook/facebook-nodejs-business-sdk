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
import InsightsResult from './insights-result';
import Profile from './profile';
import Post from './post';
import Page from './page';
import TaggableSubject from './taggable-subject';

/**
 * Photo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Photo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      album: 'album',
      alt_text: 'alt_text',
      alt_text_custom: 'alt_text_custom',
      backdated_time: 'backdated_time',
      backdated_time_granularity: 'backdated_time_granularity',
      can_backdate: 'can_backdate',
      can_delete: 'can_delete',
      can_tag: 'can_tag',
      created_time: 'created_time',
      event: 'event',
      from: 'from',
      height: 'height',
      icon: 'icon',
      id: 'id',
      images: 'images',
      link: 'link',
      name: 'name',
      name_tags: 'name_tags',
      page_story_id: 'page_story_id',
      picture: 'picture',
      place: 'place',
      position: 'position',
      source: 'source',
      target: 'target',
      updated_time: 'updated_time',
      webp_images: 'webp_images',
      width: 'width'
    });
  }

  static get BackdatedTimeGranularity (): Object {
    return Object.freeze({
      day: 'day',
      hour: 'hour',
      min: 'min',
      month: 'month',
      none: 'none',
      year: 'year'
    });
  }
  static get UnpublishedContentType (): Object {
    return Object.freeze({
      ads_post: 'ADS_POST',
      draft: 'DRAFT',
      inline_created: 'INLINE_CREATED',
      published: 'PUBLISHED',
      scheduled: 'SCHEDULED'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      profile: 'profile',
      tagged: 'tagged',
      uploaded: 'uploaded'
    });
  }
  static get CheckinEntryPoint (): Object {
    return Object.freeze({
      branding_checkin: 'BRANDING_CHECKIN',
      branding_other: 'BRANDING_OTHER',
      branding_photo: 'BRANDING_PHOTO',
      branding_status: 'BRANDING_STATUS'
    });
  }
  static get Formatting (): Object {
    return Object.freeze({
      markdown: 'MARKDOWN',
      plaintext: 'PLAINTEXT'
    });
  }
  static get PostSurfacesBlacklist (): Object {
    return Object.freeze({
      value_1: '1',
      value_2: '2',
      value_3: '3',
      value_4: '4',
      value_5: '5'
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

  createDismissTagSuggestion (fields, params): Photo {
    return this.createEdge(
      '/dismisstagsuggestion',
      fields,
      params,
      Photo
    );
  }

  getInsights (fields, params, fetchFirstPage = true): InsightsResult {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
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

  createLike (fields, params): Photo {
    return this.createEdge(
      '/likes',
      fields,
      params,
      Photo
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

  getReactions (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/reactions'
    );
  }

  getSharedPosts (fields, params, fetchFirstPage = true): Post {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/sharedposts'
    );
  }

  getSponsorTags (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/sponsor_tags'
    );
  }

  getTags (fields, params, fetchFirstPage = true): TaggableSubject {
    return this.getEdge(
      TaggableSubject,
      fields,
      params,
      fetchFirstPage,
      '/tags'
    );
  }

  createTag (fields, params): Photo {
    return this.createEdge(
      '/tags',
      fields,
      params,
      Photo
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): Photo {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Photo {
    return super.update(
      params
    );
  }
}
