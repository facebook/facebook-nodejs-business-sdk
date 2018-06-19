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
import Business from './business';
import ProductItem from './product-item';
import CheckBatchRequestStatus from './check-batch-request-status';
import ProductDaEventSamplesBatch from './product-da-event-samples-batch';
import ProductEventStat from './product-event-stat';
import ExternalEventSource from './external-event-source';
import ProductCatalogHotelRoomsBatch from './product-catalog-hotel-rooms-batch';
import ProductCatalogPricingVariablesBatch from './product-catalog-pricing-variables-batch';
import ProductFeed from './product-feed';
import ProductGroup from './product-group';
import ProductSet from './product-set';
import ProductCatalogProductSetsBatch from './product-catalog-product-sets-batch';
import ProductsQualityIssue from './products-quality-issue';

/**
 * ProductCatalog
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalog extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      da_display_settings: 'da_display_settings',
      default_image_url: 'default_image_url',
      fallback_image_url: 'fallback_image_url',
      feed_count: 'feed_count',
      flight_catalog_settings: 'flight_catalog_settings',
      id: 'id',
      name: 'name',
      product_count: 'product_count',
      qualified_product_count: 'qualified_product_count',
      vertical: 'vertical'
    });
  }

  static get Vertical (): Object {
    return Object.freeze({
      commerce: 'commerce',
      destinations: 'destinations',
      flights: 'flights',
      home_listings: 'home_listings',
      hotels: 'hotels',
      vehicles: 'vehicles'
    });
  }

  getAgencies (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  createBatch (fields, params): ProductItem {
    return this.createEdge(
      '/batch',
      fields,
      params,
      ProductItem
    );
  }

  getCheckBatchRequestStatus (fields, params, fetchFirstPage = true): CheckBatchRequestStatus {
    return this.getEdge(
      CheckBatchRequestStatus,
      fields,
      params,
      fetchFirstPage,
      '/check_batch_request_status'
    );
  }

  getDaEventSamples (fields, params, fetchFirstPage = true): ProductDaEventSamplesBatch {
    return this.getEdge(
      ProductDaEventSamplesBatch,
      fields,
      params,
      fetchFirstPage,
      '/da_event_samples'
    );
  }

  getDestinations (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/destinations'
    );
  }

  getEventStats (fields, params, fetchFirstPage = true): ProductEventStat {
    return this.getEdge(
      ProductEventStat,
      fields,
      params,
      fetchFirstPage,
      '/event_stats'
    );
  }

  deleteExternalEventSources (params): AbstractObject {
    return super.deleteEdge(
      '/external_event_sources',
      params
    );
  }

  getExternalEventSources (fields, params, fetchFirstPage = true): ExternalEventSource {
    return this.getEdge(
      ExternalEventSource,
      fields,
      params,
      fetchFirstPage,
      '/external_event_sources'
    );
  }

  createExternalEventSource (fields, params): ExternalEventSource {
    return this.createEdge(
      '/external_event_sources',
      fields,
      params,
      ExternalEventSource
    );
  }

  getFlights (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/flights'
    );
  }

  getHomeListings (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/home_listings'
    );
  }

  createHomeListing (fields, params): AbstractObject {
    return this.createEdge(
      '/home_listings',
      fields,
      params

    );
  }

  getHotelRoomsBatch (fields, params, fetchFirstPage = true): ProductCatalogHotelRoomsBatch {
    return this.getEdge(
      ProductCatalogHotelRoomsBatch,
      fields,
      params,
      fetchFirstPage,
      '/hotel_rooms_batch'
    );
  }

  createHotelRoomsBatch (fields, params): ProductCatalogHotelRoomsBatch {
    return this.createEdge(
      '/hotel_rooms_batch',
      fields,
      params,
      ProductCatalogHotelRoomsBatch
    );
  }

  getHotels (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/hotels'
    );
  }

  createHotel (fields, params): AbstractObject {
    return this.createEdge(
      '/hotels',
      fields,
      params

    );
  }

  getPricingVariablesBatch (fields, params, fetchFirstPage = true): ProductCatalogPricingVariablesBatch {
    return this.getEdge(
      ProductCatalogPricingVariablesBatch,
      fields,
      params,
      fetchFirstPage,
      '/pricing_variables_batch'
    );
  }

  createPricingVariablesBatch (fields, params): ProductCatalogPricingVariablesBatch {
    return this.createEdge(
      '/pricing_variables_batch',
      fields,
      params,
      ProductCatalogPricingVariablesBatch
    );
  }

  getProductFeeds (fields, params, fetchFirstPage = true): ProductFeed {
    return this.getEdge(
      ProductFeed,
      fields,
      params,
      fetchFirstPage,
      '/product_feeds'
    );
  }

  createProductFeed (fields, params): ProductFeed {
    return this.createEdge(
      '/product_feeds',
      fields,
      params,
      ProductFeed
    );
  }

  getProductGroups (fields, params, fetchFirstPage = true): ProductGroup {
    return this.getEdge(
      ProductGroup,
      fields,
      params,
      fetchFirstPage,
      '/product_groups'
    );
  }

  createProductGroup (fields, params): ProductGroup {
    return this.createEdge(
      '/product_groups',
      fields,
      params,
      ProductGroup
    );
  }

  getProductSets (fields, params, fetchFirstPage = true): ProductSet {
    return this.getEdge(
      ProductSet,
      fields,
      params,
      fetchFirstPage,
      '/product_sets'
    );
  }

  createProductSet (fields, params): ProductSet {
    return this.createEdge(
      '/product_sets',
      fields,
      params,
      ProductSet
    );
  }

  getProductSetsBatch (fields, params, fetchFirstPage = true): ProductCatalogProductSetsBatch {
    return this.getEdge(
      ProductCatalogProductSetsBatch,
      fields,
      params,
      fetchFirstPage,
      '/product_sets_batch'
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

  createProduct (fields, params): ProductItem {
    return this.createEdge(
      '/products',
      fields,
      params,
      ProductItem
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

  getVehicles (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/vehicles'
    );
  }

  createVideo (fields, params): AbstractObject {
    return this.createEdge(
      '/videos',
      fields,
      params

    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): ProductCatalog {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): ProductCatalog {
    return super.update(
      params
    );
  }
}
