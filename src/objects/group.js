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
import User from './user';
import Album from './album';
import Event from './event';
import LiveVideo from './live-video';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import AdVideo from './ad-video';

/**
 * Group
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Group extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      archived: 'archived',
      cover: 'cover',
      created_time: 'created_time',
      description: 'description',
      email: 'email',
      icon: 'icon',
      id: 'id',
      link: 'link',
      member_count: 'member_count',
      member_request_count: 'member_request_count',
      name: 'name',
      owner: 'owner',
      parent: 'parent',
      permissions: 'permissions',
      privacy: 'privacy',
      purpose: 'purpose',
      subdomain: 'subdomain',
      updated_time: 'updated_time',
      venue: 'venue'
    });
  }

  static get GroupType (): Object {
    return Object.freeze({
      family: 'FAMILY',
      close_friends: 'CLOSE_FRIENDS',
      neighbors: 'NEIGHBORS',
      teammates: 'TEAMMATES',
      for_sale: 'FOR_SALE',
      event_planning: 'EVENT_PLANNING',
      support: 'SUPPORT',
      club: 'CLUB',
      project: 'PROJECT',
      sorority: 'SORORITY',
      fraternity: 'FRATERNITY',
      study_group: 'STUDY_GROUP',
      school_class: 'SCHOOL_CLASS',
      learning: 'LEARNING',
      meme: 'MEME',
      travel_planning: 'TRAVEL_PLANNING',
      couple: 'COUPLE',
      parents: 'PARENTS',
      custom: 'CUSTOM',
      none: 'NONE',
      work_team: 'WORK_TEAM',
      work_teamwork: 'WORK_TEAMWORK',
      work_feedback: 'WORK_FEEDBACK',
      work_announcement: 'WORK_ANNOUNCEMENT',
      work_demo_group: 'WORK_DEMO_GROUP',
      work_social: 'WORK_SOCIAL',
      work_discussion: 'WORK_DISCUSSION',
      work_multi_company: 'WORK_MULTI_COMPANY',
      work_for_sale: 'WORK_FOR_SALE',
      work_learning: 'WORK_LEARNING',
      fitness: 'FITNESS',
      real_world: 'REAL_WORLD',
      casual: 'CASUAL',
      game: 'GAME',
      high_school_forum: 'HIGH_SCHOOL_FORUM',
      real_world_at_work: 'REAL_WORLD_AT_WORK',
      for_work: 'FOR_WORK',
      mentorship: 'MENTORSHIP',
      work_mentorship: 'WORK_MENTORSHIP',
      ephemeral: 'EPHEMERAL',
      work_ephemeral: 'WORK_EPHEMERAL'
    });
  }
  static get JoinSetting (): Object {
    return Object.freeze({
      none: 'NONE',
      anyone: 'ANYONE',
      admin_only: 'ADMIN_ONLY'
    });
  }
  static get PostPermissions (): Object {
    return Object.freeze({
      none: 'NONE',
      admin_only: 'ADMIN_ONLY',
      anyone: 'ANYONE'
    });
  }
  static get SuggestionCategory (): Object {
    return Object.freeze({
      family: 'FAMILY',
      life_event: 'LIFE_EVENT',
      top_page: 'TOP_PAGE',
      work: 'WORK',
      work_generic: 'WORK_GENERIC',
      school: 'SCHOOL',
      school_generic: 'SCHOOL_GENERIC',
      messenger: 'MESSENGER',
      messenger_thread: 'MESSENGER_THREAD',
      page_admin: 'PAGE_ADMIN',
      friend_list: 'FRIEND_LIST',
      games: 'GAMES',
      event: 'EVENT',
      close_friends: 'CLOSE_FRIENDS',
      close_friends_generic: 'CLOSE_FRIENDS_GENERIC',
      nearby_friends: 'NEARBY_FRIENDS',
      current_city: 'CURRENT_CITY',
      workplace_1_1: 'WORKPLACE_1_1',
      workplace_manager: 'WORKPLACE_MANAGER',
      workplace: 'WORKPLACE'
    });
  }

  getAccessRequests (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/access_requests'
    );
  }

  deleteAdMIns (params): AbstractObject {
    return super.deleteEdge(
      '/admins',
      params
    );
  }

  getAdMIns (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/admins'
    );
  }

  createAdMIn (fields, params): Group {
    return this.createEdge(
      '/admins',
      fields,
      params,
      Group
    );
  }

  getAlbums (fields, params, fetchFirstPage = true): Album {
    return this.getEdge(
      Album,
      fields,
      params,
      fetchFirstPage,
      '/albums'
    );
  }

  createAlbum (fields, params): Album {
    return this.createEdge(
      '/albums',
      fields,
      params,
      Album
    );
  }

  getCompanies (fields, params, fetchFirstPage = true): Group {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/companies'
    );
  }

  getDocs (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/docs'
    );
  }

  createDoc (fields, params): AbstractObject {
    return this.createEdge(
      '/docs',
      fields,
      params

    );
  }

  getEvents (fields, params, fetchFirstPage = true): Event {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
    );
  }

  createFeed (fields, params): AbstractObject {
    return this.createEdge(
      '/feed',
      fields,
      params

    );
  }

  getFormerMembers (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/former_members'
    );
  }

  createGroupThread (fields, params): AbstractObject {
    return this.createEdge(
      '/group_threads',
      fields,
      params

    );
  }

  getGroups (fields, params, fetchFirstPage = true): Group {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/groups'
    );
  }

  createGroup (fields, params): Group {
    return this.createEdge(
      '/groups',
      fields,
      params,
      Group
    );
  }

  getGuestMembers (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/guest_members'
    );
  }

  getLiveVideos (fields, params, fetchFirstPage = true): LiveVideo {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/live_videos'
    );
  }

  createLiveVideo (fields, params): LiveVideo {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      LiveVideo
    );
  }

  getMemberRequests (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/member_requests'
    );
  }

  deleteMembers (params): AbstractObject {
    return super.deleteEdge(
      '/members',
      params
    );
  }

  getMembers (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/members'
    );
  }

  createMember (fields, params): Group {
    return this.createEdge(
      '/members',
      fields,
      params,
      Group
    );
  }

  deleteModerators (params): AbstractObject {
    return super.deleteEdge(
      '/moderators',
      params
    );
  }

  getModerators (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/moderators'
    );
  }

  createModerator (fields, params): Group {
    return this.createEdge(
      '/moderators',
      fields,
      params,
      Group
    );
  }

  createOpenGraphActionFeed (fields, params): AbstractObject {
    return this.createEdge(
      '/opengraphactionfeed',
      fields,
      params

    );
  }

  getOptedInMembers (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/opted_in_members'
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

  getPixelInsights (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/pixel_insights'
    );
  }

  getReportedContent (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/reported_content'
    );
  }

  getVideos (fields, params, fetchFirstPage = true): AdVideo {
    return this.getEdge(
      AdVideo,
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

  get (fields, params): Group {
    return this.read(
      fields,
      params
    );
  }
}
