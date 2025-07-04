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

/**
 * BusinessRoleRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessRoleRequest extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      created_by: 'created_by',
      created_time: 'created_time',
      email: 'email',
      expiration_time: 'expiration_time',
      expiry_time: 'expiry_time',
      finance_role: 'finance_role',
      id: 'id',
      invite_link: 'invite_link',
      invited_user_type: 'invited_user_type',
      ip_role: 'ip_role',
      owner: 'owner',
      role: 'role',
      status: 'status',
      tasks: 'tasks',
      updated_by: 'updated_by',
      updated_time: 'updated_time',
    });
  }

  static get Role (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      ads_rights_reviewer: 'ADS_RIGHTS_REVIEWER',
      default: 'DEFAULT',
      developer: 'DEVELOPER',
      employee: 'EMPLOYEE',
      finance_analyst: 'FINANCE_ANALYST',
      finance_edit: 'FINANCE_EDIT',
      finance_editor: 'FINANCE_EDITOR',
      finance_view: 'FINANCE_VIEW',
      manage: 'MANAGE',
      partner_center_admin: 'PARTNER_CENTER_ADMIN',
      partner_center_analyst: 'PARTNER_CENTER_ANALYST',
      partner_center_education: 'PARTNER_CENTER_EDUCATION',
      partner_center_marketing: 'PARTNER_CENTER_MARKETING',
      partner_center_operations: 'PARTNER_CENTER_OPERATIONS',
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      ads_rights_reviewer: 'ADS_RIGHTS_REVIEWER',
      default: 'DEFAULT',
      developer: 'DEVELOPER',
      employee: 'EMPLOYEE',
      finance_analyst: 'FINANCE_ANALYST',
      finance_edit: 'FINANCE_EDIT',
      finance_editor: 'FINANCE_EDITOR',
      finance_view: 'FINANCE_VIEW',
      manage: 'MANAGE',
      partner_center_admin: 'PARTNER_CENTER_ADMIN',
      partner_center_analyst: 'PARTNER_CENTER_ANALYST',
      partner_center_education: 'PARTNER_CENTER_EDUCATION',
      partner_center_marketing: 'PARTNER_CENTER_MARKETING',
      partner_center_operations: 'PARTNER_CENTER_OPERATIONS',
    });
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessRoleRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): BusinessRoleRequest {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
