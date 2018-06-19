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
import ProductItem from './product-item';
import ProductFeedUpload from './product-feed-upload';

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
      product_count: 'product_count',
      qualified_product_count: 'qualified_product_count',
      quoted_fields_mode: 'quoted_fields_mode',
      schedule: 'schedule',
      update_schedule: 'update_schedule'
    });
  }

  static get Delimiter (): Object {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      bar: 'BAR',
      comma: 'COMMA',
      tab: 'TAB',
      tilde: 'TILDE',
      semicolon: 'SEMICOLON'
    });
  }
  static get QuotedFieldsMode (): Object {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      on: 'ON',
      off: 'OFF'
    });
  }
  static get Encoding (): Object {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      latin1: 'LATIN1',
      utf8: 'UTF8',
      utf16le: 'UTF16LE',
      utf16be: 'UTF16BE',
      utf32le: 'UTF32LE',
      utf32be: 'UTF32BE'
    });
  }
  static get FeedType (): Object {
    return Object.freeze({
      auto: 'AUTO',
      auto_offer: 'AUTO_OFFER',
      destination: 'DESTINATION',
      flight: 'FLIGHT',
      home_listing: 'HOME_LISTING',
      hotel: 'HOTEL',
      hotel_room: 'HOTEL_ROOM',
      local_inventory: 'LOCAL_INVENTORY',
      market: 'MARKET',
      media_title: 'MEDIA_TITLE',
      products: 'PRODUCTS',
      vehicle_offer: 'VEHICLE_OFFER',
      vehicles: 'VEHICLES'
    });
  }

  getProducts (fields, params, fetchFirstPage = true): ProductItem {
    return this.getEdge(
      ProductItem,
      fields,
      params,
      fetchFirstPage,
      '/products'
    );
  }

  createRule (fields, params): AbstractObject {
    return this.createEdge(
      '/rules',
      fields,
      params

    );
  }

  getUploads (fields, params, fetchFirstPage = true): ProductFeedUpload {
    return this.getEdge(
      ProductFeedUpload,
      fields,
      params,
      fetchFirstPage,
      '/uploads'
    );
  }

  createUpload (fields, params): ProductFeedUpload {
    return this.createEdge(
      '/uploads',
      fields,
      params,
      ProductFeedUpload
    );
  }

  getVehicles (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/vehicles'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): ProductFeed {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): ProductFeed {
    return super.update(
      params
    );
  }
}
