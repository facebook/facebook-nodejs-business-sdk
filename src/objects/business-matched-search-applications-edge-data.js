/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * BusinessMatchedSearchApplicationsEdgeData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessMatchedSearchApplicationsEdgeData extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_id: 'app_id',
      icon_url: 'icon_url',
      name: 'name',
      search_source_store: 'search_source_store',
      store: 'store',
      unique_id: 'unique_id',
      url: 'url'
    });
  }

  static get AppStore (): Object {
    return Object.freeze({
      amazon_app_store: 'AMAZON_APP_STORE',
      google_play: 'GOOGLE_PLAY',
      itunes: 'ITUNES',
      itunes_ipad: 'ITUNES_IPAD',
      fb_canvas: 'FB_CANVAS',
      fb_gameroom: 'FB_GAMEROOM',
      windows_store: 'WINDOWS_STORE',
      fb_android_store: 'FB_ANDROID_STORE',
      windows_10_store: 'WINDOWS_10_STORE',
      roku_store: 'ROKU_STORE',
      instant_game: 'INSTANT_GAME',
      does_not_exist: 'DOES_NOT_EXIST'
    });
  }
}
