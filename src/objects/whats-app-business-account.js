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
import AssignedUser from './assigned-user';

/**
 * WhatsAppBusinessAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      analytics: 'analytics',
      currency: 'currency',
      eligible_for_sending_notifications: 'eligible_for_sending_notifications',
      id: 'id',
      ineligible_for_sending_notifications_reason: 'ineligible_for_sending_notifications_reason',
      message_template_namespace: 'message_template_namespace',
      name: 'name',
      on_behalf_of_business_info: 'on_behalf_of_business_info',
      status: 'status',
      timezone_id: 'timezone_id',
    });
  }

  static get Category (): Object {
    return Object.freeze({
      account_update: 'ACCOUNT_UPDATE',
      alert_update: 'ALERT_UPDATE',
      appointment_update: 'APPOINTMENT_UPDATE',
      issue_resolution: 'ISSUE_RESOLUTION',
      payment_update: 'PAYMENT_UPDATE',
      personal_finance_update: 'PERSONAL_FINANCE_UPDATE',
      reservation_update: 'RESERVATION_UPDATE',
      shipping_update: 'SHIPPING_UPDATE',
      ticket_update: 'TICKET_UPDATE',
      transportation_update: 'TRANSPORTATION_UPDATE',
    });
  }

  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AssignedUser {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  deleteMessageTemplates (params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.deleteEdge(
      '/message_templates',
      params
    );
  }

  getMessageTemplates (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/message_templates'
    );
  }

  createMessageTemplate (fields: Array<string>, params: Object = {}): WhatsAppBusinessAccount {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/message_templates',
      fields,
      params,
      WhatsAppBusinessAccount
    );
  }

  getPhoneNumbers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/phone_numbers'
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
