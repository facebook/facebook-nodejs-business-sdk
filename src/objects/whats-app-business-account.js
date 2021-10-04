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
      creation_time: 'creation_time',
      currency: 'currency',
      id: 'id',
      message_template_namespace: 'message_template_namespace',
      name: 'name',
      on_behalf_of_business_info: 'on_behalf_of_business_info',
      owner_business_info: 'owner_business_info',
      primary_funding_id: 'primary_funding_id',
      purchase_order_number: 'purchase_order_number',
      status: 'status',
      timezone_id: 'timezone_id',
    });
  }

  static get Tasks (): Object {
    return Object.freeze({
      develop: 'DEVELOP',
      manage: 'MANAGE',
      manage_phone: 'MANAGE_PHONE',
      manage_templates: 'MANAGE_TEMPLATES',
      messaging: 'MESSAGING',
      view_cost: 'VIEW_COST',
    });
  }
  static get Category (): Object {
    return Object.freeze({
      account_update: 'ACCOUNT_UPDATE',
      alert_update: 'ALERT_UPDATE',
      appointment_update: 'APPOINTMENT_UPDATE',
      auto_reply: 'AUTO_REPLY',
      issue_resolution: 'ISSUE_RESOLUTION',
      payment_update: 'PAYMENT_UPDATE',
      personal_finance_update: 'PERSONAL_FINANCE_UPDATE',
      reservation_update: 'RESERVATION_UPDATE',
      shipping_update: 'SHIPPING_UPDATE',
      ticket_update: 'TICKET_UPDATE',
      transportation_update: 'TRANSPORTATION_UPDATE',
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

  createAssignedUser (fields: Array<string>, params: Object = {}): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      WhatsAppBusinessAccount
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

  createMessageTemplate (fields: Array<string>, params: Object = {}): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/message_templates',
      fields,
      params,
      WhatsAppBusinessAccount
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

  createPhoneNumber (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/phone_numbers',
      fields,
      params,
      
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

  createProductCatalog (fields: Array<string>, params: Object = {}): Promise<ProductCatalog> {
    return this.createEdge(
      '/product_catalogs',
      fields,
      params,
      ProductCatalog
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

  createSubscribedApp (fields: Array<string>, params: Object = {}): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/subscribed_apps',
      fields,
      params,
      WhatsAppBusinessAccount
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
