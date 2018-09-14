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
 * HomeListing
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HomeListing extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ac_type: 'ac_type',
      address: 'address',
      agent_company: 'agent_company',
      agent_email: 'agent_email',
      agent_fb_page_id: 'agent_fb_page_id',
      agent_name: 'agent_name',
      agent_phone: 'agent_phone',
      applinks: 'applinks',
      area_size: 'area_size',
      area_unit: 'area_unit',
      availability: 'availability',
      currency: 'currency',
      days_on_market: 'days_on_market',
      description: 'description',
      furnish_type: 'furnish_type',
      group_id: 'group_id',
      heating_type: 'heating_type',
      home_listing_id: 'home_listing_id',
      id: 'id',
      images: 'images',
      laundry_type: 'laundry_type',
      listing_type: 'listing_type',
      max_currency: 'max_currency',
      max_price: 'max_price',
      min_currency: 'min_currency',
      min_price: 'min_price',
      name: 'name',
      num_baths: 'num_baths',
      num_beds: 'num_beds',
      num_rooms: 'num_rooms',
      num_units: 'num_units',
      parking_type: 'parking_type',
      partner_verification: 'partner_verification',
      pet_policy: 'pet_policy',
      price: 'price',
      property_type: 'property_type',
      sanitized_images: 'sanitized_images',
      url: 'url',
      year_built: 'year_built'
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

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): HomeListing {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): HomeListing {
    return super.update(
      params
    );
  }
}
