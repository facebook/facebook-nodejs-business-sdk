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
 * PagePost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePost extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      actions: 'actions',
      admin_creator: 'admin_creator',
      allowed_advertising_objectives: 'allowed_advertising_objectives',
      application: 'application',
      backdated_time: 'backdated_time',
      call_to_action: 'call_to_action',
      can_reply_privately: 'can_reply_privately',
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
  static get CheckinEntryPoint (): Object {
    return Object.freeze({
      branding_checkin: 'BRANDING_CHECKIN',
      branding_status: 'BRANDING_STATUS',
      branding_photo: 'BRANDING_PHOTO',
      branding_other: 'BRANDING_OTHER'
    });
  }
  static get Formatting (): Object {
    return Object.freeze({
      plaintext: 'PLAINTEXT',
      markdown: 'MARKDOWN'
    });
  }
  static get PlaceAttachmentSetting (): Object {
    return Object.freeze({
      value_1: '1',
      value_2: '2'
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
  static get PostingToRedspace (): Object {
    return Object.freeze({
      enabled: 'enabled',
      disabled: 'disabled'
    });
  }
  static get TargetSurface (): Object {
    return Object.freeze({
      story: 'STORY',
      timeline: 'TIMELINE'
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
  static get With (): Object {
    return Object.freeze({
      location: 'LOCATION'
    });
  }
  static get FeedStoryVisibility (): Object {
    return Object.freeze({
      hidden: 'hidden',
      visible: 'visible'
    });
  }
  static get TimelineVisibility (): Object {
    return Object.freeze({
      hidden: 'hidden',
      normal: 'normal',
      forced_allow: 'forced_allow'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): PagePost {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): PagePost {
    return super.update(
      params
    );
  }
}
