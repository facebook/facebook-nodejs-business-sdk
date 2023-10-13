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
import UserAvailableCatalogs from './user-available-catalogs';
import ShadowIGUserCatalogProductSearch from './shadow-ig-user-catalog-product-search';
import ContentPublishingLimitResponse from './content-publishing-limit-response';
import Dataset from './dataset';
import InstagramInsightsResult from './instagram-insights-result';
import IGMedia from './ig-media';
import UserPageOneTimeOptInTokenSettings from './user-page-one-time-opt-in-token-settings';
import IGShoppingProductAppeal from './ig-shopping-product-appeal';
import ShadowIGHashtag from './shadow-ig-hashtag';

/**
 * IGUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUser extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      biography: 'biography',
      business_discovery: 'business_discovery',
      followers_count: 'followers_count',
      follows_count: 'follows_count',
      id: 'id',
      ig_id: 'ig_id',
      media_count: 'media_count',
      mentioned_comment: 'mentioned_comment',
      mentioned_media: 'mentioned_media',
      name: 'name',
      owner_business: 'owner_business',
      profile_picture_url: 'profile_picture_url',
      shopping_product_tag_eligibility: 'shopping_product_tag_eligibility',
      shopping_review_status: 'shopping_review_status',
      username: 'username',
      website: 'website',
    });
  }


  getAvailableCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserAvailableCatalogs,
      fields,
      params,
      fetchFirstPage,
      '/available_catalogs'
    );
  }

  getCatalogProductSearch (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ShadowIGUserCatalogProductSearch,
      fields,
      params,
      fetchFirstPage,
      '/catalog_product_search'
    );
  }

  getContentPublishingLimit (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ContentPublishingLimitResponse,
      fields,
      params,
      fetchFirstPage,
      '/content_publishing_limit'
    );
  }

  getDataset (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Dataset,
      fields,
      params,
      fetchFirstPage,
      '/dataset'
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

  getLiveMedia (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/live_media'
    );
  }

  getMedia (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/media'
    );
  }

  createMedia (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<IGMedia> {
    return this.createEdge(
      '/media',
      fields,
      params,
      IGMedia,
      pathOverride,
    );
  }

  createMediaPublish (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<IGMedia> {
    return this.createEdge(
      '/media_publish',
      fields,
      params,
      IGMedia,
      pathOverride,
    );
  }

  createMention (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/mentions',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getNotificationMessageTokens (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserPageOneTimeOptInTokenSettings,
      fields,
      params,
      fetchFirstPage,
      '/notification_message_tokens'
    );
  }

  getProductAppeal (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGShoppingProductAppeal,
      fields,
      params,
      fetchFirstPage,
      '/product_appeal'
    );
  }

  createProductAppeal (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<IGShoppingProductAppeal> {
    return this.createEdge(
      '/product_appeal',
      fields,
      params,
      IGShoppingProductAppeal,
      pathOverride,
    );
  }

  getRecentlySearchedHashtags (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ShadowIGHashtag,
      fields,
      params,
      fetchFirstPage,
      '/recently_searched_hashtags'
    );
  }

  getStories (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/stories'
    );
  }

  getTags (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/tags'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): IGUser {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
