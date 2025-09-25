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
import AssignedUser from './assigned-user';

/**
 * InstagramBusinessAsset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramBusinessAsset extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      ig_user_id: 'ig_user_id',
      ig_username: 'ig_username',
    });
  }

  static get PermittedTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      community_activity: 'COMMUNITY_ACTIVITY',
      content: 'CONTENT',
      messages: 'MESSAGES',
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      community_activity: 'COMMUNITY_ACTIVITY',
      content: 'CONTENT',
      messages: 'MESSAGES',
    });
  }

  deleteAgencies (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/agencies',
      params
    );
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

  createAgency (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<InstagramBusinessAsset> {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      InstagramBusinessAsset,
      pathOverride,
    );
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

  createAssignedUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<InstagramBusinessAsset> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      InstagramBusinessAsset,
      pathOverride,
    );
  }

  
  get (fields: Array<string>, params: Object = {}): InstagramBusinessAsset {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
