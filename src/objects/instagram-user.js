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
import Business from './business';
import AdAccount from './ad-account';
import BusinessTag from './business-tag';
import BusinessRequest from './business-request';
import BusinessObject from './business-object';
import InsightsResult from './insights-result';
import VideoGroup from './video-group';

/**
 * InstagramUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramUser extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      follow_count: 'follow_count',
      followed_by_count: 'followed_by_count',
      has_profile_picture: 'has_profile_picture',
      id: 'id',
      is_private: 'is_private',
      is_published: 'is_published',
      media_count: 'media_count',
      profile_pic: 'profile_pic',
      username: 'username'
    });
  }

  deleteAgencies (params): AbstractObject {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencies (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  createAgency (fields, params): InstagramUser {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      InstagramUser
    );
  }

  getAssignedPartners (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/assigned_partners'
    );
  }

  deleteAuthorizedAdAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/authorized_adaccounts',
      params
    );
  }

  getAuthorizedAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/authorized_adaccounts'
    );
  }

  createAuthorizedAdAccount (fields, params): InstagramUser {
    return this.createEdge(
      '/authorized_adaccounts',
      fields,
      params,
      InstagramUser
    );
  }

  getBrandedContent (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/branded_content'
    );
  }

  getBusinessObjectTags (fields, params, fetchFirstPage = true): BusinessTag {
    return this.getEdge(
      BusinessTag,
      fields,
      params,
      fetchFirstPage,
      '/business_object_tags'
    );
  }

  getBusinessRequests (fields, params, fetchFirstPage = true): BusinessRequest {
    return this.getEdge(
      BusinessRequest,
      fields,
      params,
      fetchFirstPage,
      '/business_requests'
    );
  }

  getConnectedBusinessObjects (fields, params, fetchFirstPage = true): BusinessObject {
    return this.getEdge(
      BusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/connected_business_objects'
    );
  }

  getInsights (fields, params, fetchFirstPage = true): InsightsResult {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getInstagramMedia (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/instagram_media'
    );
  }

  getMobileInsights (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/mobile_insights'
    );
  }

  getVideoGroups (fields, params, fetchFirstPage = true): VideoGroup {
    return this.getEdge(
      VideoGroup,
      fields,
      params,
      fetchFirstPage,
      '/video_groups'
    );
  }

  get (fields, params): InstagramUser {
    return this.read(
      fields,
      params
    );
  }
}
