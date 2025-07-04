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
import CanvasPreview from './canvas-preview';
import TextWithEntities from './text-with-entities';

/**
 * Canvas
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Canvas extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      background_color: 'background_color',
      body_elements: 'body_elements',
      business_id: 'business_id',
      canvas_link: 'canvas_link',
      collection_hero_image: 'collection_hero_image',
      collection_hero_video: 'collection_hero_video',
      collection_thumbnails: 'collection_thumbnails',
      dynamic_setting: 'dynamic_setting',
      element_payload: 'element_payload',
      elements: 'elements',
      fb_body_elements: 'fb_body_elements',
      id: 'id',
      is_hidden: 'is_hidden',
      is_published: 'is_published',
      last_editor: 'last_editor',
      linked_documents: 'linked_documents',
      name: 'name',
      owner: 'owner',
      property_list: 'property_list',
      source_template: 'source_template',
      store_url: 'store_url',
      style_list: 'style_list',
      tags: 'tags',
      ui_property_list: 'ui_property_list',
      unused_body_elements: 'unused_body_elements',
      update_time: 'update_time',
      use_retailer_item_ids: 'use_retailer_item_ids',
    });
  }


  getPreview (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CanvasPreview,
      fields,
      params,
      fetchFirstPage,
      '/preview'
    );
  }

  getPreViews (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      TextWithEntities,
      fields,
      params,
      fetchFirstPage,
      '/previews'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Canvas {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Canvas {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
