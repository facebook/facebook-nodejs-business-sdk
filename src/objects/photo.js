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
 * Photo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Photo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      album: 'album',
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
      year: 'year',
      month: 'month',
      day: 'day',
      hour: 'hour',
      min: 'min',
      none: 'none'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      profile: 'profile',
      tagged: 'tagged',
      uploaded: 'uploaded'
    });
  }
  static get UnpublishedContentType (): Object {
    return Object.freeze({
      scheduled: 'SCHEDULED',
      draft: 'DRAFT',
      ads_post: 'ADS_POST',
      inline_created: 'INLINE_CREATED',
      published: 'PUBLISHED'
    });
  }
  static get CheckinEntryPoint (): Object {
    return Object.freeze({
      branding_checkin: 'BRANDING_CHECKIN',
      branding_status: 'BRANDING_STATUS',
      branding_photo: 'BRANDING_PHOTO',
      branding_other: 'BRANDING_OTHER'
    });
  }

  deleteLikes (params): AbstractObject {
    return super.deleteEdge(
      '/likes',
      params
    );
  }

  createLike (fields, params): AbstractObject {
    return this.createEdge(
      '/likes',
      fields,
      params

    );
  }

  createTag (fields, params): AbstractObject {
    return this.createEdge(
      '/tags',
      fields,
      params

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
