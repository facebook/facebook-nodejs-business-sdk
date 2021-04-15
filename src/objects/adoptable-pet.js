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
 * AdoptablePet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdoptablePet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      address: 'address',
      adoptable_pet_id: 'adoptable_pet_id',
      adoption_application_form_url: 'adoption_application_form_url',
      age_bucket: 'age_bucket',
      animal_type: 'animal_type',
      applinks: 'applinks',
      availability: 'availability',
      breed: 'breed',
      category_specific_fields: 'category_specific_fields',
      coat_length: 'coat_length',
      color: 'color',
      currency: 'currency',
      description: 'description',
      features: 'features',
      gender: 'gender',
      id: 'id',
      images: 'images',
      name: 'name',
      price: 'price',
      sanitized_images: 'sanitized_images',
      secondary_color: 'secondary_color',
      shelter_email: 'shelter_email',
      shelter_name: 'shelter_name',
      shelter_page_id: 'shelter_page_id',
      shelter_phone: 'shelter_phone',
      size: 'size',
      tertiary_color: 'tertiary_color',
      url: 'url',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AdoptablePet {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
