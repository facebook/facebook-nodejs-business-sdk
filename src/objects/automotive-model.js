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
 * AutomotiveModel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AutomotiveModel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      applinks: 'applinks',
      automotive_model_id: 'automotive_model_id',
      availability: 'availability',
      body_style: 'body_style',
      currency: 'currency',
      description: 'description',
      drivetrain: 'drivetrain',
      exterior_color: 'exterior_color',
      fuel_type: 'fuel_type',
      generation: 'generation',
      id: 'id',
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
      url: 'url',
      year: 'year'
    });
  }

  getVideosMetadata (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/videos_metadata'
    );
  }

  get (fields, params): AutomotiveModel {
    return this.read(
      fields,
      params
    );
  }
}
