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
import RTBDynamicPost from './rtb-dynamic-post';
import InsightsResult from './insights-result';
import Profile from './profile';
import User from './user';

/**
 * Post
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Post extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      actions: 'actions',
      admin_creator: 'admin_creator',
      allowed_advertising_objectives: 'allowed_advertising_objectives',
      application: 'application',
      backdated_time: 'backdated_time',
      call_to_action: 'call_to_action',
      caption: 'caption',
      child_attachments: 'child_attachments',
      comments_mirroring_domain: 'comments_mirroring_domain',
      coordinates: 'coordinates',
      created_time: 'created_time',
      description: 'description',
      event: 'event',
      expanded_height: 'expanded_height',
      expanded_width: 'expanded_width',
      feed_targeting: 'feed_targeting',
      from: 'from',
      full_picture: 'full_picture',
      height: 'height',
      icon: 'icon',
      id: 'id',
      instagram_eligibility: 'instagram_eligibility',
      is_app_share: 'is_app_share',
      is_eligible_for_promotion: 'is_eligible_for_promotion',
      is_expired: 'is_expired',
      is_hidden: 'is_hidden',
      is_instagram_eligible: 'is_instagram_eligible',
      is_popular: 'is_popular',
      is_published: 'is_published',
      is_spherical: 'is_spherical',
      link: 'link',
      message: 'message',
      message_tags: 'message_tags',
      multi_share_end_card: 'multi_share_end_card',
      multi_share_optimized: 'multi_share_optimized',
      name: 'name',
      object_id: 'object_id',
      parent_id: 'parent_id',
      permalink_url: 'permalink_url',
      picture: 'picture',
      place: 'place',
      privacy: 'privacy',
      promotable_id: 'promotable_id',
      promotion_status: 'promotion_status',
      properties: 'properties',
      scheduled_publish_time: 'scheduled_publish_time',
      shares: 'shares',
      source: 'source',
      status_type: 'status_type',
      story: 'story',
      story_tags: 'story_tags',
      subscribed: 'subscribed',
      target: 'target',
      targeting: 'targeting',
      timeline_visibility: 'timeline_visibility',
      type: 'type',
      updated_time: 'updated_time',
      via: 'via',
      video_buying_eligibility: 'video_buying_eligibility',
      width: 'width',
    });
  }

  static get BackdatedTimeGranularity (): Object {
    return Object.freeze({
      day: 'day',
      hour: 'hour',
      min: 'min',
      month: 'month',
      none: 'none',
      year: 'year',
    });
  }
  static get FeedStoryVisibility (): Object {
    return Object.freeze({
      hidden: 'hidden',
      visible: 'visible',
    });
  }
  static get TimelineVisibility (): Object {
    return Object.freeze({
      forced_allow: 'forced_allow',
      hidden: 'hidden',
      normal: 'normal',
    });
  }

  getAttachments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/attachments'
    );
  }

  getComments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Comment {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Comment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  createComment (fields: Array<string>, params: Object = {}): Comment {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/comments',
      fields,
      params,
      Comment
    );
  }

  getDynamicPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): RTBDynamicPost {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      RTBDynamicPost,
      fields,
      params,
      fetchFirstPage,
      '/dynamic_posts'
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): InsightsResult {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  deleteLikes (params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.deleteEdge(
      '/likes',
      params
    );
  }

  getLikes (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Profile {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  createLike (fields: Array<string>, params: Object = {}): Post {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/likes',
      fields,
      params,
      Post
    );
  }

  createPromotion (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/promotions',
      fields,
      params,
      
    );
  }

  getReactions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Profile {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/reactions'
    );
  }

  getSeen (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): User {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/seen'
    );
  }

  getSharedPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Post {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/sharedposts'
    );
  }

  getTo (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Profile {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/to'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Post {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Post {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
