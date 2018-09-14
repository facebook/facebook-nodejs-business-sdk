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
 * NativeMegaphone
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class NativeMegaphone extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      action: 'action',
      content: 'content',
      id: 'id',
      image: 'image',
      title: 'title'
    });
  }

  static get MegaphoneLocation (): Object {
    return Object.freeze({
      newsfeed: 'NEWSFEED',
      messenger_bottom: 'MESSENGER_BOTTOM',
      app_top: 'APP_TOP',
      pages_manager_app_top: 'PAGES_MANAGER_APP_TOP',
      snaptu_main_screen: 'SNAPTU_MAIN_SCREEN'
    });
  }

  get (fields, params): NativeMegaphone {
    return this.read(
      fields,
      params
    );
  }
}
