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

/**
 * AtlasUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AtlasUser extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_edit: 'can_edit',
      created_by: 'created_by',
      created_date: 'created_date',
      created_time: 'created_time',
      cumulative_edited_date: 'cumulative_edited_date',
      email: 'email',
      first_name: 'first_name',
      id: 'id',
      last_login_date: 'last_login_date',
      last_modified_by: 'last_modified_by',
      last_modified_date: 'last_modified_date',
      last_modified_time: 'last_modified_time',
      last_name: 'last_name',
      name: 'name',
      organization: 'organization',
      state: 'state',
      user_id: 'user_id',
      version: 'version'
    });
  }

  getPermissions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/permissions'
    );
  }

  get (fields, params): AtlasUser {
    return this.read(
      fields,
      params
    );
  }
}
