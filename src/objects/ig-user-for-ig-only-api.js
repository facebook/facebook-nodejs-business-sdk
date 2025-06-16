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
import ContentPublishingLimitResponse from './content-publishing-limit-response';
import UnifiedThread from './unified-thread';
import InsightsResult from './insights-result';
import CTXPartnerAppWelcomeMessageFlow from './ctx-partner-app-welcome-message-flow';

/**
 * IGUserForIGOnlyAPI
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUserForIGOnlyAPI extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account_type: 'account_type',
      biography: 'biography',
      followers_count: 'followers_count',
      follows_count: 'follows_count',
      id: 'id',
      media_count: 'media_count',
      name: 'name',
      profile_picture_url: 'profile_picture_url',
      user_id: 'user_id',
      username: 'username',
      website: 'website',
    });
  }


  getBusinessMessagingFeatureStatus (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/business_messaging_feature_status'
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

  getConversations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UnifiedThread,
      fields,
      params,
      fetchFirstPage,
      '/conversations'
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getLiveMedia (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/live_media'
    );
  }

  getMedia (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/media'
    );
  }

  createMedia (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/media',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  createMediaPublish (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/mediapublish',
      fields,
      params,
      null,
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

  createMessageAttachment (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/messageattachments',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  createMessage (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/messages',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  deleteMessengerProfile (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/messenger_profile',
      params
    );
  }

  getMessengerProfile (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/messenger_profile'
    );
  }

  createMessengerProfile (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/messenger_profile',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getStories (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/stories'
    );
  }

  deleteSubscribedApps (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/subscribed_apps',
      params
    );
  }

  getSubscribedApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/subscribed_apps'
    );
  }

  createSubscribedApp (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/subscribed_apps',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getTags (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/tags'
    );
  }

  deleteWelcomeMessageFlows (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/welcome_message_flows',
      params
    );
  }

  getWelcomeMessageFlows (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CTXPartnerAppWelcomeMessageFlow,
      fields,
      params,
      fetchFirstPage,
      '/welcome_message_flows'
    );
  }

  createWelcomeMessageFlow (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/welcome_message_flows',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  
  get (fields: Array<string>, params: Object = {}): IGUserForIGOnlyAPI {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
