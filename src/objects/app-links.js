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
 * AppLinks
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppLinks extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      android: 'android',
      id: 'id',
      ios: 'ios',
      ipad: 'ipad',
      iphone: 'iphone',
      web: 'web',
      windows: 'windows',
      windows_phone: 'windows_phone',
      windows_universal: 'windows_universal'
    });
  }

  get (fields, params): AppLinks {
    return this.read(
      fields,
      params
    );
  }
}
