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
 * PageAboutStory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAboutStory extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      composed_text: 'composed_text',
      cover_photo: 'cover_photo',
      id: 'id',
      page_id: 'page_id',
      title: 'title'
    });
  }

  get (fields, params): PageAboutStory {
    return this.read(
      fields,
      params
    );
  }
}
