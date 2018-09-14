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
 * DocumentFont
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DocumentFont extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      display_name: 'display_name',
      full_name: 'full_name',
      id: 'id',
      is_library_font: 'is_library_font',
      postscript_name: 'postscript_name',
      url: 'url'
    });
  }

  get (fields, params): DocumentFont {
    return this.read(
      fields,
      params
    );
  }
}
