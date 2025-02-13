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
import CatalogItemChannelsToIntegrityStatus from './catalog-item-channels-to-integrity-status';
import OverrideDetails from './override-details';
import DynamicVideoMetadata from './dynamic-video-metadata';

/**
 * AutomotiveModel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AutomotiveModel extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      applinks: 'applinks',
      automotive_model_id: 'automotive_model_id',
      availability: 'availability',
      body_style: 'body_style',
      category_specific_fields: 'category_specific_fields',
      currency: 'currency',
      custom_label_0: 'custom_label_0',
      custom_label_1: 'custom_label_1',
      custom_label_2: 'custom_label_2',
      custom_label_3: 'custom_label_3',
      custom_label_4: 'custom_label_4',
      custom_number_0: 'custom_number_0',
      custom_number_1: 'custom_number_1',
      custom_number_2: 'custom_number_2',
      custom_number_3: 'custom_number_3',
      custom_number_4: 'custom_number_4',
      description: 'description',
      drivetrain: 'drivetrain',
      exterior_color: 'exterior_color',
      finance_description: 'finance_description',
      finance_type: 'finance_type',
      fuel_type: 'fuel_type',
      generation: 'generation',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      interior_color: 'interior_color',
      interior_upholstery: 'interior_upholstery',
      make: 'make',
      model: 'model',
      price: 'price',
      sanitized_images: 'sanitized_images',
      title: 'title',
      transmission: 'transmission',
      trim: 'trim',
      unit_price: 'unit_price',
      url: 'url',
      visibility: 'visibility',
      year: 'year',
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

  
  get (fields: Array<string>, params: Object = {}): AutomotiveModel {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
