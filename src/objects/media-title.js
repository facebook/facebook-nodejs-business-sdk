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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import CatalogItemChannelsToIntegrityStatus from './catalog-item-channels-to-integrity-status';
import OverrideDetails from './override-details';
import DynamicVideoMetadata from './dynamic-video-metadata';

/**
 * MediaTitle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaTitle extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      applinks: 'applinks',
      category_specific_fields: 'category_specific_fields',
      content_category: 'content_category',
      currency: 'currency',
      description: 'description',
      fb_page_alias: 'fb_page_alias',
      fb_page_id: 'fb_page_id',
      genres: 'genres',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      kg_fb_id: 'kg_fb_id',
      media_title_id: 'media_title_id',
      price: 'price',
      sanitized_images: 'sanitized_images',
      title: 'title',
      title_display_name: 'title_display_name',
      unit_price: 'unit_price',
      url: 'url',
      visibility: 'visibility',
      wiki_data_item: 'wiki_data_item',
    });
  }

  static get ImageFetchStatus (): Object {
    return Object.freeze({
      direct_upload: 'DIRECT_UPLOAD',
      fetched: 'FETCHED',
      fetch_failed: 'FETCH_FAILED',
      no_status: 'NO_STATUS',
      outdated: 'OUTDATED',
      partial_fetch: 'PARTIAL_FETCH',
    });
  }
  static get Visibility (): Object {
    return Object.freeze({
      published: 'PUBLISHED',
      staging: 'STAGING',
    });
  }
  static get ContentCategory (): Object {
    return Object.freeze({
      movie: 'MOVIE',
      music: 'MUSIC',
      tv_show: 'TV_SHOW',
    });
  }

  getChannelsToIntegrityStatus (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CatalogItemChannelsToIntegrityStatus,
      fields,
      params,
      fetchFirstPage,
      '/channels_to_integrity_status'
    );
  }

  getOverrideDetails (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OverrideDetails,
      fields,
      params,
      fetchFirstPage,
      '/override_details'
    );
  }

  getVideosMetadata (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      DynamicVideoMetadata,
      fields,
      params,
      fetchFirstPage,
      '/videos_metadata'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): MediaTitle {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): MediaTitle {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
