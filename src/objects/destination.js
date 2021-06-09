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
import Cursor from './../cursor';

/**
 * Destination
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Destination extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      address: 'address',
      applinks: 'applinks',
      category_specific_fields: 'category_specific_fields',
      currency: 'currency',
      description: 'description',
      destination_id: 'destination_id',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      name: 'name',
      price: 'price',
      price_change: 'price_change',
      sanitized_images: 'sanitized_images',
      types: 'types',
      url: 'url',
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

  getAugmentedRealitiesMetadata (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/augmented_realities_metadata'
    );
  }

  getVideosMetadata (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/videos_metadata'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Destination {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
