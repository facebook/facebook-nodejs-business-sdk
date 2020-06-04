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
import Cursor from './../cursor';
import CreativeAssetTag from './creative-asset-tag';

/**
 * BusinessImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessImage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      creation_time: 'creation_time',
      hash: 'hash',
      height: 'height',
      id: 'id',
      media_library_url: 'media_library_url',
      name: 'name',
      url: 'url',
      url_128: 'url_128',
      width: 'width',
    });
  }

  static get ValidationAdPlacements (): Object {
    return Object.freeze({
      audience_network_instream_video: 'AUDIENCE_NETWORK_INSTREAM_VIDEO',
      audience_network_instream_video_mobile: 'AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE',
      audience_network_rewarded_video: 'AUDIENCE_NETWORK_REWARDED_VIDEO',
      desktop_feed_standard: 'DESKTOP_FEED_STANDARD',
      facebook_story_mobile: 'FACEBOOK_STORY_MOBILE',
      instagram_standard: 'INSTAGRAM_STANDARD',
      instagram_story: 'INSTAGRAM_STORY',
      instant_article_standard: 'INSTANT_ARTICLE_STANDARD',
      instream_video_desktop: 'INSTREAM_VIDEO_DESKTOP',
      instream_video_image: 'INSTREAM_VIDEO_IMAGE',
      instream_video_mobile: 'INSTREAM_VIDEO_MOBILE',
      messenger_mobile_inbox_media: 'MESSENGER_MOBILE_INBOX_MEDIA',
      messenger_mobile_story_media: 'MESSENGER_MOBILE_STORY_MEDIA',
      mobile_feed_standard: 'MOBILE_FEED_STANDARD',
      mobile_fullwidth: 'MOBILE_FULLWIDTH',
      mobile_interstitial: 'MOBILE_INTERSTITIAL',
      mobile_medium_rectangle: 'MOBILE_MEDIUM_RECTANGLE',
      mobile_native: 'MOBILE_NATIVE',
      right_column_standard: 'RIGHT_COLUMN_STANDARD',
      suggested_video_mobile: 'SUGGESTED_VIDEO_MOBILE',
    });
  }

  getAdPlacementValidationResults (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ad_placement_validation_results'
    );
  }

  deleteCreativeAssetTags (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/creative_asset_tags',
      params
    );
  }

  getCreativeAssetTags (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CreativeAssetTag,
      fields,
      params,
      fetchFirstPage,
      '/creative_asset_tags'
    );
  }

  createCreativeAssetTag (fields: Array<string>, params: Object = {}): Promise<BusinessImage> {
    return this.createEdge(
      '/creative_asset_tags',
      fields,
      params,
      BusinessImage
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessImage {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
