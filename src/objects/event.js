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
import Profile from './profile';
import User from './user';
import NullNode from './null-node';
import Comment from './comment';
import Photo from './photo';
import AdVideo from './ad-video';

/**
 * Event
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Event extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attending_count: 'attending_count',
      can_guests_invite: 'can_guests_invite',
      category: 'category',
      cover: 'cover',
      declined_count: 'declined_count',
      description: 'description',
      discount_code_enabled: 'discount_code_enabled',
      end_time: 'end_time',
      event_times: 'event_times',
      guest_list_enabled: 'guest_list_enabled',
      id: 'id',
      interested_count: 'interested_count',
      is_canceled: 'is_canceled',
      is_draft: 'is_draft',
      is_page_owned: 'is_page_owned',
      maybe_count: 'maybe_count',
      name: 'name',
      noreply_count: 'noreply_count',
      owner: 'owner',
      parent_group: 'parent_group',
      place: 'place',
      scheduled_publish_time: 'scheduled_publish_time',
      start_time: 'start_time',
      ticket_uri: 'ticket_uri',
      ticket_uri_start_sales_time: 'ticket_uri_start_sales_time',
      ticketing_privacy_uri: 'ticketing_privacy_uri',
      ticketing_terms_uri: 'ticketing_terms_uri',
      timezone: 'timezone',
      type: 'type',
      updated_time: 'updated_time'
    });
  }

  static get Type (): Object {
    return Object.freeze({
      private: 'private',
      public: 'public',
      group: 'group',
      community: 'community'
    });
  }
  static get Projection (): Object {
    return Object.freeze({
      equirectangular: 'EQUIRECTANGULAR',
      cubemap: 'CUBEMAP',
      half_equirectangular: 'HALF_EQUIRECTANGULAR'
    });
  }
  static get SpatialAudioFormat (): Object {
    return Object.freeze({
      ambix_4: 'ambiX_4'
    });
  }
  static get Status (): Object {
    return Object.freeze({
      unpublished: 'UNPUBLISHED',
      live_now: 'LIVE_NOW',
      scheduled_unpublished: 'SCHEDULED_UNPUBLISHED',
      scheduled_live: 'SCHEDULED_LIVE',
      scheduled_canceled: 'SCHEDULED_CANCELED'
    });
  }
  static get StereoscopicMode (): Object {
    return Object.freeze({
      mono: 'MONO',
      left_right: 'LEFT_RIGHT',
      top_bottom: 'TOP_BOTTOM'
    });
  }
  static get StreamType (): Object {
    return Object.freeze({
      regular: 'REGULAR',
      ambient: 'AMBIENT'
    });
  }
  static get EventStateFilter (): Object {
    return Object.freeze({
      canceled: 'canceled',
      draft: 'draft',
      scheduled_draft_for_publication: 'scheduled_draft_for_publication',
      published: 'published'
    });
  }
  static get TimeFilter (): Object {
    return Object.freeze({
      upcoming: 'upcoming',
      past: 'past'
    });
  }
  static get PromotableEventTypes (): Object {
    return Object.freeze({
      offsite_ticket: 'OFFSITE_TICKET',
      onsite_ticket: 'ONSITE_TICKET',
      rsvp: 'RSVP'
    });
  }

  getAdmins (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/admins'
    );
  }

  getAttending (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/attending'
    );
  }

  createAttending (fields, params): Event {
    return this.createEdge(
      '/attending',
      fields,
      params,
      Event
    );
  }

  getComments (fields, params, fetchFirstPage = true): NullNode {
    return this.getEdge(
      NullNode,
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

  getDeclined (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/declined'
    );
  }

  createDeclined (fields, params): Event {
    return this.createEdge(
      '/declined',
      fields,
      params,
      Event
    );
  }

  getFeed (fields, params, fetchFirstPage = true): NullNode {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/feed'
    );
  }

  createFeed (fields, params): AbstractObject {
    return this.createEdge(
      '/feed',
      fields,
      params

    );
  }

  getInterested (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/interested'
    );
  }

  getLiveVideos (fields, params, fetchFirstPage = true): NullNode {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/live_videos'
    );
  }

  createLiveVideo (fields, params): Event {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      Event
    );
  }

  getMaybe (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/maybe'
    );
  }

  createMaybe (fields, params): Event {
    return this.createEdge(
      '/maybe',
      fields,
      params,
      Event
    );
  }

  getNoreply (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/noreply'
    );
  }

  getPhotos (fields, params, fetchFirstPage = true): NullNode {
    return this.getEdge(
      NullNode,
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

  getPicture (fields, params, fetchFirstPage = true): NullNode {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getPosts (fields, params, fetchFirstPage = true): NullNode {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/posts'
    );
  }

  getRoles (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/roles'
    );
  }

  getVideos (fields, params, fetchFirstPage = true): NullNode {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  createVideo (fields, params): AdVideo {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): Event {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Event {
    return super.update(
      params
    );
  }
}
