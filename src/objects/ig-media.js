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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import IGBoostMediaAd from './ig-boost-media-ad';
import BrandedContentShadowIGUserID from './branded-content-shadow-ig-user-id';
import ShadowIGMediaCollaborators from './shadow-ig-media-collaborators';
import IGComment from './ig-comment';
import InstagramInsightsResult from './instagram-insights-result';
import ShadowIGMediaProductTags from './shadow-ig-media-product-tags';

/**
 * IGMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMedia extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      alt_text: 'alt_text',
      boost_eligibility_info: 'boost_eligibility_info',
      caption: 'caption',
      comments_count: 'comments_count',
      copyright_check_information: 'copyright_check_information',
      id: 'id',
      ig_id: 'ig_id',
      is_comment_enabled: 'is_comment_enabled',
      is_shared_to_feed: 'is_shared_to_feed',
      legacy_instagram_media_id: 'legacy_instagram_media_id',
      like_count: 'like_count',
      media_product_type: 'media_product_type',
      media_type: 'media_type',
      media_url: 'media_url',
      owner: 'owner',
      permalink: 'permalink',
      shortcode: 'shortcode',
      thumbnail_url: 'thumbnail_url',
      timestamp: 'timestamp',
      username: 'username',
      view_count: 'view_count',
    });
  }


  getBoostAdsList (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGBoostMediaAd,
      fields,
      params,
      fetchFirstPage,
      '/boost_ads_list'
    );
  }

  getBrandedContentPartnerPromote (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BrandedContentShadowIGUserID,
      fields,
      params,
      fetchFirstPage,
      '/branded_content_partner_promote'
    );
  }

  createBrandedContentPartnerPromote (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BrandedContentShadowIGUserID> {
    return this.createEdge(
      '/branded_content_partner_promote',
      fields,
      params,
      BrandedContentShadowIGUserID,
      pathOverride,
    );
  }

  getChildren (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/children'
    );
  }

  getCollaborators (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ShadowIGMediaCollaborators,
      fields,
      params,
      fetchFirstPage,
      '/collaborators'
    );
  }

  getComments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGComment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  createComment (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<IGComment> {
    return this.createEdge(
      '/comments',
      fields,
      params,
      IGComment,
      pathOverride,
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramInsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  deletePartnershipAdCode (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/partnership_ad_code',
      params
    );
  }

  createPartnershipAdCode (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/partnership_ad_code',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getProductTags (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ShadowIGMediaProductTags,
      fields,
      params,
      fetchFirstPage,
      '/product_tags'
    );
  }

  createProductTag (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ShadowIGMediaProductTags> {
    return this.createEdge(
      '/product_tags',
      fields,
      params,
      ShadowIGMediaProductTags,
      pathOverride,
    );
  }

  
  get (fields: Array<string>, params: Object = {}): IGMedia {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): IGMedia {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
