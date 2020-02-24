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
 * PageAboutStory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAboutStory extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      composed_text: 'composed_text',
      cover_photo: 'cover_photo',
      entity_map: 'entity_map',
      id: 'id',
      is_published: 'is_published',
      page_id: 'page_id',
      title: 'title',
    });
  }


  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): PageAboutStory {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): PageAboutStory {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
