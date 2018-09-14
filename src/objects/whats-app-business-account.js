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
import BusinessOwnedObjectOnBehalfOfRequest from './business-owned-object-on-behalf-of-request';

/**
 * WhatsAppBusinessAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      analytics: 'analytics',
      business_type: 'business_type',
      currency: 'currency',
      friendly_name: 'friendly_name',
      hsm_namespace: 'hsm_namespace',
      id: 'id',
      on_behalf_of_business_computed_info: 'on_behalf_of_business_computed_info',
      primary_funding_id: 'primary_funding_id',
      status: 'status',
      timezone_id: 'timezone_id'
    });
  }

  getAssignedUsers (fields, params, fetchFirstPage = true): AssignedUser {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  getHsms (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/hsms'
    );
  }

  getInProgressOnBehalfRequest (fields, params, fetchFirstPage = true): BusinessOwnedObjectOnBehalfOfRequest {
    return this.getEdge(
      BusinessOwnedObjectOnBehalfOfRequest,
      fields,
      params,
      fetchFirstPage,
      '/in_progress_onbehalf_request'
    );
  }

  getPhoneNumberStatuses (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/phone_number_statuses'
    );
  }

  get (fields, params): WhatsAppBusinessAccount {
    return this.read(
      fields,
      params
    );
  }
}
