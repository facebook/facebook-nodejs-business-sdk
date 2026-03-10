 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdCampaignPlacementGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignPlacementGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      effective_audience_network_positions: 'effective_audience_network_positions',
      effective_device_platforms: 'effective_device_platforms',
      effective_facebook_positions: 'effective_facebook_positions',
      effective_instagram_positions: 'effective_instagram_positions',
      effective_messenger_positions: 'effective_messenger_positions',
      effective_oculus_positions: 'effective_oculus_positions',
      effective_publisher_platforms: 'effective_publisher_platforms',
      metadata: 'metadata',
      recommendations: 'recommendations',
    });
  }

  static get EffectiveAudienceNetworkPositions (): Object {
    return Object.freeze({
      classic: 'CLASSIC',
      instream_video: 'INSTREAM_VIDEO',
      rewarded_video: 'REWARDED_VIDEO',
    });
  }
  static get EffectiveDevicePlatforms (): Object {
    return Object.freeze({
      desktop: 'DESKTOP',
      mobile: 'MOBILE',
    });
  }
  static get EffectiveFacebookPositions (): Object {
    return Object.freeze({
      biz_disco_feed: 'BIZ_DISCO_FEED',
      facebook_contextual_bundle: 'FACEBOOK_CONTEXTUAL_BUNDLE',
      fb_reels: 'FB_REELS',
      fb_reels_overlay: 'FB_REELS_OVERLAY',
      feed: 'FEED',
      groups: 'GROUPS',
      group_mall: 'GROUP_MALL',
      group_tab: 'GROUP_TAB',
      instant_article: 'INSTANT_ARTICLE',
      instream_reel: 'INSTREAM_REEL',
      instream_video: 'INSTREAM_VIDEO',
      jobs_browser: 'JOBS_BROWSER',
      marketplace: 'MARKETPLACE',
      notification: 'NOTIFICATION',
      profile_feed: 'PROFILE_FEED',
      profile_reels: 'PROFILE_REELS',
      rhc: 'RHC',
      search: 'SEARCH',
      story: 'STORY',
      story_sticker: 'STORY_STICKER',
      suggested_video: 'SUGGESTED_VIDEO',
      video_feeds: 'VIDEO_FEEDS',
    });
  }
  static get EffectiveInstagramPositions (): Object {
    return Object.freeze({
      effect_tray: 'EFFECT_TRAY',
      explore: 'EXPLORE',
      explore_home: 'EXPLORE_HOME',
      igtv: 'IGTV',
      ig_search: 'IG_SEARCH',
      lead_gen_multi_submit: 'LEAD_GEN_MULTI_SUBMIT',
      profile_feed: 'PROFILE_FEED',
      profile_reels: 'PROFILE_REELS',
      reels: 'REELS',
      reels_instream: 'REELS_INSTREAM',
      reels_overlay: 'REELS_OVERLAY',
      shop: 'SHOP',
      story: 'STORY',
      stream: 'STREAM',
    });
  }
  static get EffectiveMessengerPositions (): Object {
    return Object.freeze({
      messenger_inbox: 'MESSENGER_INBOX',
      messenger_marketing_messages: 'MESSENGER_MARKETING_MESSAGES',
      messenger_story: 'MESSENGER_STORY',
      messenger_thread: 'MESSENGER_THREAD',
    });
  }
  static get EffectiveOculusPositions (): Object {
    return Object.freeze({
      twilight_developer_update: 'TWILIGHT_DEVELOPER_UPDATE',
      twilight_feed: 'TWILIGHT_FEED',
      twilight_feed_spotlight: 'TWILIGHT_FEED_SPOTLIGHT',
      twilight_search: 'TWILIGHT_SEARCH',
      twilight_search_null_state: 'TWILIGHT_SEARCH_NULL_STATE',
      vr_apps: 'VR_APPS',
      vr_rewarded_video: 'VR_REWARDED_VIDEO',
    });
  }
  static get EffectivePublisherPlatforms (): Object {
    return Object.freeze({
      audience_network: 'AUDIENCE_NETWORK',
      facebook: 'FACEBOOK',
      instagram: 'INSTAGRAM',
      messenger: 'MESSENGER',
      oculus: 'OCULUS',
      threads: 'THREADS',
      whatsapp: 'WHATSAPP',
    });
  }
}
