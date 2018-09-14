/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import ProfilePictureSource from './profile-picture-source';

/**
 * UserInvitableFriend
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserInvitableFriend extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      first_name: 'first_name',
      id: 'id',
      last_name: 'last_name',
      middle_name: 'middle_name',
      name: 'name'
    });
  }

  getPicture (fields, params, fetchFirstPage = true): ProfilePictureSource {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  get (fields, params): UserInvitableFriend {
    return this.read(
      fields,
      params
    );
  }
}
