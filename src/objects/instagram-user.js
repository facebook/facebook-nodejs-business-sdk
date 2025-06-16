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
import Cursor from './../cursor';
import Business from './business';
import AREffect from './ar-effect';
import AdAccount from './ad-account';
import IGUpcomingEvent from './ig-upcoming-event';

/**
 * InstagramUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramUser extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      follow_count: 'follow_count',
      followed_by_count: 'followed_by_count',
      has_profile_picture: 'has_profile_picture',
      id: 'id',
      ig_user_id: 'ig_user_id',
      is_private: 'is_private',
      is_published: 'is_published',
      media_count: 'media_count',
      mini_shop_storefront: 'mini_shop_storefront',
      owner_business: 'owner_business',
      profile_pic: 'profile_pic',
      username: 'username',
    });
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

  getArEffects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AREffect,
      fields,
      params,
      fetchFirstPage,
      '/ar_effects'
    );
  }

  getAuthorizedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/authorized_adaccounts'
    );
  }

  getUpcomingEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGUpcomingEvent,
      fields,
      params,
      fetchFirstPage,
      '/upcoming_events'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): InstagramUser {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
