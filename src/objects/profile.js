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
 * Profile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Profile extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_post: 'can_post',
      id: 'id',
      link: 'link',
      name: 'name',
      pic: 'pic',
      pic_crop: 'pic_crop',
      pic_large: 'pic_large',
      pic_small: 'pic_small',
      pic_square: 'pic_square',
      profile_type: 'profile_type',
      username: 'username'
    });
  }

  static get ProfileType (): Object {
    return Object.freeze({
      user: 'user',
      page: 'page',
      event: 'event',
      group: 'group',
      application: 'application'
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

  get (fields, params): Profile {
    return this.read(
      fields,
      params
    );
  }
}
