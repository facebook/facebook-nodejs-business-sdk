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
 * AdPreview
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPreview extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      body: 'body',
    });
  }

  static get AdFormat (): Object {
    return Object.freeze({
      audience_network_instream_video: 'AUDIENCE_NETWORK_INSTREAM_VIDEO',
      audience_network_instream_video_mobile: 'AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE',
      audience_network_outstream_video: 'AUDIENCE_NETWORK_OUTSTREAM_VIDEO',
      audience_network_rewarded_video: 'AUDIENCE_NETWORK_REWARDED_VIDEO',
      biz_disco_feed_mobile: 'BIZ_DISCO_FEED_MOBILE',
      desktop_feed_standard: 'DESKTOP_FEED_STANDARD',
      facebook_reels_banner: 'FACEBOOK_REELS_BANNER',
      facebook_reels_mobile: 'FACEBOOK_REELS_MOBILE',
      facebook_reels_sticker: 'FACEBOOK_REELS_STICKER',
      facebook_story_mobile: 'FACEBOOK_STORY_MOBILE',
      facebook_story_sticker_mobile: 'FACEBOOK_STORY_STICKER_MOBILE',
      instagram_explore_contextual: 'INSTAGRAM_EXPLORE_CONTEXTUAL',
      instagram_explore_immersive: 'INSTAGRAM_EXPLORE_IMMERSIVE',
      instagram_reels: 'INSTAGRAM_REELS',
      instagram_shop: 'INSTAGRAM_SHOP',
      instagram_standard: 'INSTAGRAM_STANDARD',
      instagram_story: 'INSTAGRAM_STORY',
      instant_article_recirculation_ad: 'INSTANT_ARTICLE_RECIRCULATION_AD',
      instant_article_standard: 'INSTANT_ARTICLE_STANDARD',
      instream_banner_desktop: 'INSTREAM_BANNER_DESKTOP',
      instream_banner_mobile: 'INSTREAM_BANNER_MOBILE',
      instream_video_desktop: 'INSTREAM_VIDEO_DESKTOP',
      instream_video_image: 'INSTREAM_VIDEO_IMAGE',
      instream_video_mobile: 'INSTREAM_VIDEO_MOBILE',
      job_browser_desktop: 'JOB_BROWSER_DESKTOP',
      job_browser_mobile: 'JOB_BROWSER_MOBILE',
      marketplace_mobile: 'MARKETPLACE_MOBILE',
      messenger_mobile_inbox_media: 'MESSENGER_MOBILE_INBOX_MEDIA',
      messenger_mobile_story_media: 'MESSENGER_MOBILE_STORY_MEDIA',
      mobile_banner: 'MOBILE_BANNER',
      mobile_feed_basic: 'MOBILE_FEED_BASIC',
      mobile_feed_standard: 'MOBILE_FEED_STANDARD',
      mobile_fullwidth: 'MOBILE_FULLWIDTH',
      mobile_interstitial: 'MOBILE_INTERSTITIAL',
      mobile_medium_rectangle: 'MOBILE_MEDIUM_RECTANGLE',
      mobile_native: 'MOBILE_NATIVE',
      right_column_standard: 'RIGHT_COLUMN_STANDARD',
      suggested_video_desktop: 'SUGGESTED_VIDEO_DESKTOP',
      suggested_video_mobile: 'SUGGESTED_VIDEO_MOBILE',
      watch_feed_home: 'WATCH_FEED_HOME',
      watch_feed_mobile: 'WATCH_FEED_MOBILE',
    });
  }
  static get RenderType (): Object {
    return Object.freeze({
      fallback: 'FALLBACK',
    });
  }
}
