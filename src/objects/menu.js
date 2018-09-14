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
 * Menu
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Menu extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      menu_id: 'menu_id',
      menu_json: 'menu_json',
      id: 'id'
    });
  }

  get (fields, params): Menu {
    return this.read(
      fields,
      params
    );
  }
}
