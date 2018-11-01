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
      can_viewer_post: 'can_viewer_post',
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
      invited_count: 'invited_count',
      is_canceled: 'is_canceled',
      is_date_only: 'is_date_only',
      is_draft: 'is_draft',
      is_page_owned: 'is_page_owned',
      location: 'location',
      maybe_count: 'maybe_count',
      name: 'name',
      noreply_count: 'noreply_count',
      owner: 'owner',
      parent_group: 'parent_group',
      place: 'place',
      privacy: 'privacy',
      scheduled_publish_time: 'scheduled_publish_time',
      start_time: 'start_time',
      ticket_uri: 'ticket_uri',
      ticket_uri_start_sales_time: 'ticket_uri_start_sales_time',
      ticketing_privacy_uri: 'ticketing_privacy_uri',
      ticketing_terms_uri: 'ticketing_terms_uri',
      timezone: 'timezone',
      type: 'type',
      updated_time: 'updated_time',
      venue: 'venue'
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

  createLiveVideo (fields, params): AbstractObject {
    return this.createEdge(
      '/live_videos',
      fields,
      params

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
