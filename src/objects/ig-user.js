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
import Business from './business';
import AdAccount from './ad-account';
import UserAvailableCatalogs from './user-available-catalogs';
import IGBCAdsPermission from './igbc-ads-permission';
import BrandedContentShadowIGMediaID from './branded-content-shadow-ig-media-id';
import BrandedContentShadowIGUserID from './branded-content-shadow-ig-user-id';
import ShadowIGUserCatalogProductSearch from './shadow-ig-user-catalog-product-search';
import ThreadsUser from './threads-user';
import ContentPublishingLimitResponse from './content-publishing-limit-response';
import IGUserExportForCAM from './ig-user-export-for-cam';
import Dataset from './dataset';
import InstagramInsightsResult from './instagram-insights-result';
import IGMedia from './ig-media';
import UserPageOneTimeOptInTokenSettings from './user-page-one-time-opt-in-token-settings';
import IGShoppingProductAppeal from './ig-shopping-product-appeal';
import ShadowIGHashtag from './shadow-ig-hashtag';
import IGUpcomingEvent from './ig-upcoming-event';
import ShadowIGUserCTXPartnerAppWelcomeMessageFlow from './shadow-ig-user-ctx-partner-app-welcome-message-flow';

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
      has_profile_pic: 'has_profile_pic',
      id: 'id',
      ig_id: 'ig_id',
      is_published: 'is_published',
      legacy_instagram_user_id: 'legacy_instagram_user_id',
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


  getAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  getAuthorizedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/authorized_adaccounts'
    );
  }

  createAuthorizedAdAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<IGUser> {
    return this.createEdge(
      '/authorized_adaccounts',
      fields,
      params,
      IGUser,
      pathOverride,
    );
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

  getBrandedContentAdPermissions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGBCAdsPermission,
      fields,
      params,
      fetchFirstPage,
      '/branded_content_ad_permissions'
    );
  }

  createBrandedContentAdPermission (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<IGBCAdsPermission> {
    return this.createEdge(
      '/branded_content_ad_permissions',
      fields,
      params,
      IGBCAdsPermission,
      pathOverride,
    );
  }

  getBrandedContentAdvertisableMedias (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BrandedContentShadowIGMediaID,
      fields,
      params,
      fetchFirstPage,
      '/branded_content_advertisable_medias'
    );
  }

  deleteBrandedContentTagApproval (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/branded_content_tag_approval',
      params
    );
  }

  getBrandedContentTagApproval (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BrandedContentShadowIGUserID,
      fields,
      params,
      fetchFirstPage,
      '/branded_content_tag_approval'
    );
  }

  createBrandedContentTagApproval (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BrandedContentShadowIGUserID> {
    return this.createEdge(
      '/branded_content_tag_approval',
      fields,
      params,
      BrandedContentShadowIGUserID,
      pathOverride,
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

  getConnectedThreadsUser (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ThreadsUser,
      fields,
      params,
      fetchFirstPage,
      '/connected_threads_user'
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

  getCreatorMarketPlaceCreators (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGUserExportForCAM,
      fields,
      params,
      fetchFirstPage,
      '/creator_marketplace_creators'
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

  createDataset (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Dataset> {
    return this.createEdge(
      '/dataset',
      fields,
      params,
      Dataset,
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

  getInstagramBackedThreadsUser (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ThreadsUser,
      fields,
      params,
      fetchFirstPage,
      '/instagram_backed_threads_user'
    );
  }

  createInstagramBackedThreadsUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ThreadsUser> {
    return this.createEdge(
      '/instagram_backed_threads_user',
      fields,
      params,
      ThreadsUser,
      pathOverride,
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

  getUpcomingEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGUpcomingEvent,
      fields,
      params,
      fetchFirstPage,
      '/upcoming_events'
    );
  }

  createUpcomingEvent (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/upcoming_events',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getWelcomeMessageFlows (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ShadowIGUserCTXPartnerAppWelcomeMessageFlow,
      fields,
      params,
      fetchFirstPage,
      '/welcome_message_flows'
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
