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
import AutoMarket from './auto-market';
import AutomotiveModel from './automotive-model';
import Auto from './auto';
import Destination from './destination';
import Flight from './flight';
import HomeListing from './home-listing';
import HomeServiceProvider from './home-service-provider';
import Hotel from './hotel';
import MediaTitle from './media-title';
import ProductItem from './product-item';
import ProductsQualityIssue from './products-quality-issue';
import ProductFeedRulePreviewSample from './product-feed-rule-preview-sample';
import ProductFeedRule from './product-feed-rule';
import ProductFeedUpload from './product-feed-upload';
import VehicleOffer from './vehicle-offer';
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
      quoted_fields: 'quoted_fields',
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

  getAutoMarkets (fields, params, fetchFirstPage = true): AutoMarket {
    return this.getEdge(
      AutoMarket,
      fields,
      params,
      fetchFirstPage,
      '/auto_markets'
    );
  }

  getAutomotiveModels (fields, params, fetchFirstPage = true): AutomotiveModel {
    return this.getEdge(
      AutomotiveModel,
      fields,
      params,
      fetchFirstPage,
      '/automotive_models'
    );
  }

  getAutos (fields, params, fetchFirstPage = true): Auto {
    return this.getEdge(
      Auto,
      fields,
      params,
      fetchFirstPage,
      '/autos'
    );
  }

  getDestinations (fields, params, fetchFirstPage = true): Destination {
    return this.getEdge(
      Destination,
      fields,
      params,
      fetchFirstPage,
      '/destinations'
    );
  }

  getFlights (fields, params, fetchFirstPage = true): Flight {
    return this.getEdge(
      Flight,
      fields,
      params,
      fetchFirstPage,
      '/flights'
    );
  }

  getHomeListings (fields, params, fetchFirstPage = true): HomeListing {
    return this.getEdge(
      HomeListing,
      fields,
      params,
      fetchFirstPage,
      '/home_listings'
    );
  }

  getHomeServiceProviders (fields, params, fetchFirstPage = true): HomeServiceProvider {
    return this.getEdge(
      HomeServiceProvider,
      fields,
      params,
      fetchFirstPage,
      '/home_service_providers'
    );
  }

  getHotels (fields, params, fetchFirstPage = true): Hotel {
    return this.getEdge(
      Hotel,
      fields,
      params,
      fetchFirstPage,
      '/hotels'
    );
  }

  getMediaTitles (fields, params, fetchFirstPage = true): MediaTitle {
    return this.getEdge(
      MediaTitle,
      fields,
      params,
      fetchFirstPage,
      '/media_titles'
    );
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

  getQualityIssues (fields, params, fetchFirstPage = true): ProductsQualityIssue {
    return this.getEdge(
      ProductsQualityIssue,
      fields,
      params,
      fetchFirstPage,
      '/quality_issues'
    );
  }

  getRulePreviewSamples (fields, params, fetchFirstPage = true): ProductFeedRulePreviewSample {
    return this.getEdge(
      ProductFeedRulePreviewSample,
      fields,
      params,
      fetchFirstPage,
      '/rule_preview_samples'
    );
  }

  getRules (fields, params, fetchFirstPage = true): ProductFeedRule {
    return this.getEdge(
      ProductFeedRule,
      fields,
      params,
      fetchFirstPage,
      '/rules'
    );
  }

  createRule (fields, params): ProductFeedRule {
    return this.createEdge(
      '/rules',
      fields,
      params,
      ProductFeedRule
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

  getVehicleOffers (fields, params, fetchFirstPage = true): VehicleOffer {
    return this.getEdge(
      VehicleOffer,
      fields,
      params,
      fetchFirstPage,
      '/vehicle_offers'
    );
  }

  getVehicles (fields, params, fetchFirstPage = true): Vehicle {
    return this.getEdge(
      Vehicle,
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
