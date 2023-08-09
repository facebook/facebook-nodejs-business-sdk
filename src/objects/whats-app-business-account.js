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
import AssignedUser from './assigned-user';
import ProductCatalog from './product-catalog';

/**
 * WhatsAppBusinessAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account_review_status: 'account_review_status',
      analytics: 'analytics',
      business_verification_status: 'business_verification_status',
      country: 'country',
      creation_time: 'creation_time',
      currency: 'currency',
      id: 'id',
      message_template_namespace: 'message_template_namespace',
      name: 'name',
      on_behalf_of_business_info: 'on_behalf_of_business_info',
      owner_business: 'owner_business',
      owner_business_info: 'owner_business_info',
      ownership_type: 'ownership_type',
      primary_funding_id: 'primary_funding_id',
      purchase_order_number: 'purchase_order_number',
      status: 'status',
      timezone_id: 'timezone_id',
    });
  }

  static get Tasks (): Object {
    return Object.freeze({
      develop: 'DEVELOP',
      full_control: 'FULL_CONTROL',
      manage: 'MANAGE',
      manage_extensions: 'MANAGE_EXTENSIONS',
      manage_phone: 'MANAGE_PHONE',
      manage_phone_assets: 'MANAGE_PHONE_ASSETS',
      manage_templates: 'MANAGE_TEMPLATES',
      messaging: 'MESSAGING',
      view_cost: 'VIEW_COST',
      view_phone_assets: 'VIEW_PHONE_ASSETS',
      view_templates: 'VIEW_TEMPLATES',
    });
  }
  static get Category (): Object {
    return Object.freeze({
      authentication: 'AUTHENTICATION',
      marketing: 'MARKETING',
      utility: 'UTILITY',
    });
  }

  deleteAssignedUsers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/assigned_users',
      params
    );
  }

  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  getAudiences (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/audiences'
    );
  }

  getConversationAnalytics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/conversation_analytics'
    );
  }

  getExtensions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/extensions'
    );
  }

  getMessageCampaigns (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/message_campaigns'
    );
  }

  deleteMessageTemplates (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/message_templates',
      params
    );
  }

  getMessageTemplates (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/message_templates'
    );
  }

  createMessageTemplate (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/message_templates',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  getPhoneNumbers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/phone_numbers'
    );
  }

  createPhoneNumber (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/phone_numbers',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  deleteProductCatalogs (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/product_catalogs',
      params
    );
  }

  getProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  createProductCatalog (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalog> {
    return this.createEdge(
      '/product_catalogs',
      fields,
      params,
      ProductCatalog,
      pathOverride,
    );
  }

  getSchedules (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/schedules'
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

  createSubscribedApp (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/subscribed_apps',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  getTemplatePerformanceMetrics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/template_performance_metrics'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): WhatsAppBusinessAccount {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
