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
      description: 'description',
      drivetrain: 'drivetrain',
      exterior_color: 'exterior_color',
      finance_description: 'finance_description',
      finance_type: 'finance_type',
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
      year: 'year',
    });
  }

  static get BodyStyle (): Object {
    return Object.freeze({
      convertible: 'CONVERTIBLE',
      coupe: 'COUPE',
      crossover: 'CROSSOVER',
      estate: 'ESTATE',
      grandtourer: 'GRANDTOURER',
      hatchback: 'HATCHBACK',
      minibus: 'MINIBUS',
      minivan: 'MINIVAN',
      mpv: 'MPV',
      none: 'NONE',
      other: 'OTHER',
      pickup: 'PICKUP',
      roadster: 'ROADSTER',
      saloon: 'SALOON',
      sedan: 'SEDAN',
      sportscar: 'SPORTSCAR',
      supercar: 'SUPERCAR',
      supermini: 'SUPERMINI',
      suv: 'SUV',
      truck: 'TRUCK',
      van: 'VAN',
      wagon: 'WAGON',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): AutomotiveModel {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
