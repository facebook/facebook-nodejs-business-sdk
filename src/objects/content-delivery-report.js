/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ContentDeliveryReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ContentDeliveryReport extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      content_name: 'content_name',
      content_url: 'content_url',
      creator_name: 'creator_name',
      creator_url: 'creator_url',
      estimated_impressions: 'estimated_impressions',
    });
  }

  static get Platform (): Object {
    return Object.freeze({
      audience_network: 'AUDIENCE_NETWORK',
      facebook: 'FACEBOOK',
      hidden_aaa: 'HIDDEN_AAA',
      instagram: 'INSTAGRAM',
      messenger: 'MESSENGER',
      oculus: 'OCULUS',
      unknown: 'UNKNOWN',
      whatsapp: 'WHATSAPP',
    });
  }
  static get Position (): Object {
    return Object.freeze({
      all_placements: 'ALL_PLACEMENTS',
      an_classic: 'AN_CLASSIC',
      biz_disco_feed: 'BIZ_DISCO_FEED',
      facebook_groups_feed: 'FACEBOOK_GROUPS_FEED',
      facebook_reels: 'FACEBOOK_REELS',
      facebook_reels_overlay: 'FACEBOOK_REELS_OVERLAY',
      facebook_stories: 'FACEBOOK_STORIES',
      feed: 'FEED',
      groups: 'GROUPS',
      hidden_aaa: 'HIDDEN_AAA',
      instagram_explore: 'INSTAGRAM_EXPLORE',
      instagram_igtv: 'INSTAGRAM_IGTV',
      instagram_reels: 'INSTAGRAM_REELS',
      instagram_shop: 'INSTAGRAM_SHOP',
      instagram_stories: 'INSTAGRAM_STORIES',
      instant_article: 'INSTANT_ARTICLE',
      instream_video: 'INSTREAM_VIDEO',
      jobs_browser: 'JOBS_BROWSER',
      marketplace: 'MARKETPLACE',
      messenger_inbox: 'MESSENGER_INBOX',
      messenger_stories: 'MESSENGER_STORIES',
      oculus_rewarded_video: 'OCULUS_REWARDED_VIDEO',
      oculus_twilight_developer_update: 'OCULUS_TWILIGHT_DEVELOPER_UPDATE',
      oculus_twilight_feed: 'OCULUS_TWILIGHT_FEED',
      oculus_twilight_feed_spotlight: 'OCULUS_TWILIGHT_FEED_SPOTLIGHT',
      oculus_twilight_search: 'OCULUS_TWILIGHT_SEARCH',
      oculus_vr_apps: 'OCULUS_VR_APPS',
      others: 'OTHERS',
      rewarded_video: 'REWARDED_VIDEO',
      right_hand_column: 'RIGHT_HAND_COLUMN',
      search: 'SEARCH',
      status: 'STATUS',
      stickers: 'STICKERS',
      suggested_video: 'SUGGESTED_VIDEO',
      unknown: 'UNKNOWN',
      video_feeds: 'VIDEO_FEEDS',
    });
  }
}
