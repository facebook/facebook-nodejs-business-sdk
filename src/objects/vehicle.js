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
 * Vehicle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Vehicle extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      address: 'address',
      applinks: 'applinks',
      availability: 'availability',
      availability_circle_radius: 'availability_circle_radius',
      availability_circle_radius_unit: 'availability_circle_radius_unit',
      body_style: 'body_style',
      category_specific_fields: 'category_specific_fields',
      condition: 'condition',
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
      date_first_on_lot: 'date_first_on_lot',
      dealer_communication_channel: 'dealer_communication_channel',
      dealer_email: 'dealer_email',
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
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      interior_color: 'interior_color',
      legal_disclosure_impressum_url: 'legal_disclosure_impressum_url',
      make: 'make',
      mileage: 'mileage',
      model: 'model',
      previous_currency: 'previous_currency',
      previous_price: 'previous_price',
      price: 'price',
      product_priority_0: 'product_priority_0',
      product_priority_1: 'product_priority_1',
      product_priority_2: 'product_priority_2',
      product_priority_3: 'product_priority_3',
      product_priority_4: 'product_priority_4',
      sale_currency: 'sale_currency',
      sale_price: 'sale_price',
      sanitized_images: 'sanitized_images',
      state_of_vehicle: 'state_of_vehicle',
      tags: 'tags',
      title: 'title',
      transmission: 'transmission',
      trim: 'trim',
      unit_price: 'unit_price',
      url: 'url',
      vehicle_id: 'vehicle_id',
      vehicle_registration_plate: 'vehicle_registration_plate',
      vehicle_specifications: 'vehicle_specifications',
      vehicle_type: 'vehicle_type',
      vin: 'vin',
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
  static get Availability (): Object {
    return Object.freeze({
      available: 'AVAILABLE',
      not_available: 'NOT_AVAILABLE',
      pending: 'PENDING',
      unknown: 'UNKNOWN',
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
      small_car: 'SMALL_CAR',
      sportscar: 'SPORTSCAR',
      supercar: 'SUPERCAR',
      supermini: 'SUPERMINI',
      suv: 'SUV',
      truck: 'TRUCK',
      van: 'VAN',
      wagon: 'WAGON',
    });
  }
  static get Condition (): Object {
    return Object.freeze({
      excellent: 'EXCELLENT',
      fair: 'FAIR',
      good: 'GOOD',
      none: 'NONE',
      other: 'OTHER',
      poor: 'POOR',
      very_good: 'VERY_GOOD',
    });
  }
  static get Drivetrain (): Object {
    return Object.freeze({
      awd: 'AWD',
      four_wd: 'FOUR_WD',
      fwd: 'FWD',
      none: 'NONE',
      other: 'OTHER',
      rwd: 'RWD',
      two_wd: 'TWO_WD',
    });
  }
  static get FuelType (): Object {
    return Object.freeze({
      diesel: 'DIESEL',
      electric: 'ELECTRIC',
      flex: 'FLEX',
      gasoline: 'GASOLINE',
      hybrid: 'HYBRID',
      none: 'NONE',
      other: 'OTHER',
      petrol: 'PETROL',
      plugin_hybrid: 'PLUGIN_HYBRID',
    });
  }
  static get StateOfVehicle (): Object {
    return Object.freeze({
      cpo: 'CPO',
      new: 'NEW',
      used: 'USED',
    });
  }
  static get Transmission (): Object {
    return Object.freeze({
      automatic: 'AUTOMATIC',
      manual: 'MANUAL',
      none: 'NONE',
      other: 'OTHER',
    });
  }
  static get VehicleType (): Object {
    return Object.freeze({
      boat: 'BOAT',
      car_truck: 'CAR_TRUCK',
      commercial: 'COMMERCIAL',
      motorcycle: 'MOTORCYCLE',
      other: 'OTHER',
      powersport: 'POWERSPORT',
      rv_camper: 'RV_CAMPER',
      trailer: 'TRAILER',
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

  
  get (fields: Array<string>, params: Object = {}): Vehicle {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Vehicle {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
