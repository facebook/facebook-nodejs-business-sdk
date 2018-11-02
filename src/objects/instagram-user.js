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
import AssignedUser from './assigned-user';
import AdAccount from './ad-account';

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

  static get Role (): Object {
    return Object.freeze({
      manager: 'MANAGER',
      analyst: 'ANALYST'
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

  deleteAssignedUsers (params): AbstractObject {
    return super.deleteEdge(
      '/assigned_users',
      params
    );
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

  createAssignedUser (fields, params): InstagramUser {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      InstagramUser
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

  createUserPermission (fields, params): InstagramUser {
    return this.createEdge(
      '/userpermissions',
      fields,
      params,
      InstagramUser
    );
  }

  get (fields, params): InstagramUser {
    return this.read(
      fields,
      params
    );
  }
}
