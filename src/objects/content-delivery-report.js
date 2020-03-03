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
  static get Fields () {
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
      instagram: 'INSTAGRAM',
      messenger: 'MESSENGER',
      unknown: 'UNKNOWN',
      whatsapp: 'WHATSAPP',
    });
  }
  static get Position (): Object {
    return Object.freeze({
      all_placements: 'ALL_PLACEMENTS',
      an_classic: 'AN_CLASSIC',
      facebook_groups_feed: 'FACEBOOK_GROUPS_FEED',
      facebook_stories: 'FACEBOOK_STORIES',
      feed: 'FEED',
      groups: 'GROUPS',
      instagram_explore: 'INSTAGRAM_EXPLORE',
      instagram_igtv: 'INSTAGRAM_IGTV',
      instagram_stories: 'INSTAGRAM_STORIES',
      instant_article: 'INSTANT_ARTICLE',
      instream_video: 'INSTREAM_VIDEO',
      marketplace: 'MARKETPLACE',
      messenger_inbox: 'MESSENGER_INBOX',
      messenger_stories: 'MESSENGER_STORIES',
      others: 'OTHERS',
      rewarded_video: 'REWARDED_VIDEO',
      right_hand_column: 'RIGHT_HAND_COLUMN',
      search: 'SEARCH',
      status: 'STATUS',
      suggested_video: 'SUGGESTED_VIDEO',
      unknown: 'UNKNOWN',
      video_feeds: 'VIDEO_FEEDS',
    });
  }
}
