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
 * Vehicle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Vehicle extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      address: 'address',
      applinks: 'applinks',
      availability: 'availability',
      body_style: 'body_style',
      condition: 'condition',
      currency: 'currency',
      custom_label_0: 'custom_label_0',
      date_first_on_lot: 'date_first_on_lot',
      dealer_communication_channel: 'dealer_communication_channel',
      dealer_id: 'dealer_id',
      dealer_name: 'dealer_name',
      dealer_phone: 'dealer_phone',
      dealer_privacy_policy_url: 'dealer_privacy_policy_url',
      description: 'description',
      drivetrain: 'drivetrain',
      exterior_color: 'exterior_color',
      fb_page_id: 'fb_page_id',
      features: 'features',
      fuel_type: 'fuel_type',
      id: 'id',
      images: 'images',
      interior_color: 'interior_color',
      make: 'make',
      mileage: 'mileage',
      model: 'model',
      previous_currency: 'previous_currency',
      previous_price: 'previous_price',
      price: 'price',
      sale_currency: 'sale_currency',
      sale_price: 'sale_price',
      sanitized_images: 'sanitized_images',
      state_of_vehicle: 'state_of_vehicle',
      title: 'title',
      transmission: 'transmission',
      trim: 'trim',
      url: 'url',
      vehicle_id: 'vehicle_id',
      vehicle_registration_plate: 'vehicle_registration_plate',
      vin: 'vin',
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

  get (fields, params): Vehicle {
    return this.read(
      fields,
      params
    );
  }
}
