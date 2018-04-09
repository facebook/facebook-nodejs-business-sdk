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
  static get Fields () {
    return Object.freeze({
      body: 'body'
    });
  }

  static get AdFormat (): Object {
    return Object.freeze({
      right_column_standard: 'RIGHT_COLUMN_STANDARD',
      desktop_feed_standard: 'DESKTOP_FEED_STANDARD',
      mobile_feed_standard: 'MOBILE_FEED_STANDARD',
      mobile_feed_basic: 'MOBILE_FEED_BASIC',
      mobile_interstitial: 'MOBILE_INTERSTITIAL',
      mobile_banner: 'MOBILE_BANNER',
      mobile_medium_rectangle: 'MOBILE_MEDIUM_RECTANGLE',
      mobile_fullwidth: 'MOBILE_FULLWIDTH',
      mobile_native: 'MOBILE_NATIVE',
      instagram_standard: 'INSTAGRAM_STANDARD',
      audience_network_outstream_video: 'AUDIENCE_NETWORK_OUTSTREAM_VIDEO',
      instant_article_standard: 'INSTANT_ARTICLE_STANDARD',
      instream_video_desktop: 'INSTREAM_VIDEO_DESKTOP',
      instream_video_mobile: 'INSTREAM_VIDEO_MOBILE',
      suggested_video_desktop: 'SUGGESTED_VIDEO_DESKTOP',
      suggested_video_mobile: 'SUGGESTED_VIDEO_MOBILE'
    });
  }
}
