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
import AutomotiveModel from './automotive-model';
import Destination from './destination';
import Flight from './flight';
import HomeListing from './home-listing';
import Hotel from './hotel';
import ProductItem from './product-item';
import ProductFeedRule from './product-feed-rule';
import ProductFeedUpload from './product-feed-upload';
import Vehicle from './vehicle';

/**
 * ProductFeed
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeed extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      country: 'country',
      created_time: 'created_time',
      default_currency: 'default_currency',
      deletion_enabled: 'deletion_enabled',
      delimiter: 'delimiter',
      encoding: 'encoding',
      file_name: 'file_name',
      id: 'id',
      latest_upload: 'latest_upload',
      name: 'name',
      override_type: 'override_type',
      product_count: 'product_count',
      qualified_product_count: 'qualified_product_count',
      quoted_fields_mode: 'quoted_fields_mode',
      schedule: 'schedule',
      update_schedule: 'update_schedule',
    });
  }

  static get Delimiter (): Object {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      bar: 'BAR',
      comma: 'COMMA',
      semicolon: 'SEMICOLON',
      tab: 'TAB',
      tilde: 'TILDE',
    });
  }
  static get QuotedFieldsMode (): Object {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      off: 'OFF',
      on: 'ON',
    });
  }
  static get Encoding (): Object {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      latin1: 'LATIN1',
      utf16be: 'UTF16BE',
      utf16le: 'UTF16LE',
      utf32be: 'UTF32BE',
      utf32le: 'UTF32LE',
      utf8: 'UTF8',
    });
  }
  static get FeedType (): Object {
    return Object.freeze({
      auto: 'AUTO',
      destination: 'DESTINATION',
      flight: 'FLIGHT',
      home_listing: 'HOME_LISTING',
      hotel: 'HOTEL',
      hotel_room: 'HOTEL_ROOM',
      local_inventory: 'LOCAL_INVENTORY',
      market: 'MARKET',
      media_title: 'MEDIA_TITLE',
      products: 'PRODUCTS',
      vehicles: 'VEHICLES',
      vehicle_offer: 'VEHICLE_OFFER',
    });
  }
  static get OverrideType (): Object {
    return Object.freeze({
      country: 'COUNTRY',
      language: 'LANGUAGE',
    });
  }

  getAutomotiveModels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AutomotiveModel {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AutomotiveModel,
      fields,
      params,
      fetchFirstPage,
      '/automotive_models'
    );
  }

  getDestinations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Destination {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Destination,
      fields,
      params,
      fetchFirstPage,
      '/destinations'
    );
  }

  getFlights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Flight {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Flight,
      fields,
      params,
      fetchFirstPage,
      '/flights'
    );
  }

  getHomeListings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): HomeListing {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      HomeListing,
      fields,
      params,
      fetchFirstPage,
      '/home_listings'
    );
  }

  getHotels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Hotel {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Hotel,
      fields,
      params,
      fetchFirstPage,
      '/hotels'
    );
  }

  getProducts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): ProductItem {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      ProductItem,
      fields,
      params,
      fetchFirstPage,
      '/products'
    );
  }

  getRules (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): ProductFeedRule {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      ProductFeedRule,
      fields,
      params,
      fetchFirstPage,
      '/rules'
    );
  }

  createRule (fields: Array<string>, params: Object = {}): ProductFeedRule {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/rules',
      fields,
      params,
      ProductFeedRule
    );
  }

  getUploads (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): ProductFeedUpload {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      ProductFeedUpload,
      fields,
      params,
      fetchFirstPage,
      '/uploads'
    );
  }

  createUpload (fields: Array<string>, params: Object = {}): ProductFeedUpload {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/uploads',
      fields,
      params,
      ProductFeedUpload
    );
  }

  getVehicles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Vehicle {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Vehicle,
      fields,
      params,
      fetchFirstPage,
      '/vehicles'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): ProductFeed {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): ProductFeed {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
