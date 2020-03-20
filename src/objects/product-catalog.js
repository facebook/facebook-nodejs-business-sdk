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
import Cursor from './../cursor';
import Business from './business';
import AssignedUser from './assigned-user';
import AutomotiveModel from './automotive-model';
import DynamicItemDisplayBundleFolder from './dynamic-item-display-bundle-folder';
import DynamicItemDisplayBundle from './dynamic-item-display-bundle';
import ProductCatalogCategory from './product-catalog-category';
import CheckBatchRequestStatus from './check-batch-request-status';
import CollaborativeAdsShareSettings from './collaborative-ads-share-settings';
import Destination from './destination';
import ProductEventStat from './product-event-stat';
import ExternalEventSource from './external-event-source';
import Flight from './flight';
import HomeListing from './home-listing';
import ProductCatalogHotelRoomsBatch from './product-catalog-hotel-rooms-batch';
import Hotel from './hotel';
import ProductCatalogPricingVariablesBatch from './product-catalog-pricing-variables-batch';
import ProductFeed from './product-feed';
import ProductGroup from './product-group';
import ProductSet from './product-set';
import ProductCatalogProductSetsBatch from './product-catalog-product-sets-batch';
import ProductItem from './product-item';
import VehicleOffer from './vehicle-offer';
import Vehicle from './vehicle';

/**
 * ProductCatalog
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalog extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      cpas_parent_catalog_settings: 'cpas_parent_catalog_settings',
      da_display_settings: 'da_display_settings',
      default_image_url: 'default_image_url',
      fallback_image_url: 'fallback_image_url',
      feed_count: 'feed_count',
      id: 'id',
      is_catalog_segment: 'is_catalog_segment',
      name: 'name',
      product_count: 'product_count',
      store_catalog_settings: 'store_catalog_settings',
      vertical: 'vertical',
    });
  }

  static get Vertical (): Object {
    return Object.freeze({
      bookable: 'bookable',
      commerce: 'commerce',
      destinations: 'destinations',
      flights: 'flights',
      home_listings: 'home_listings',
      hotels: 'hotels',
      offer_items: 'offer_items',
      offline_commerce: 'offline_commerce',
      ticketed_experiences: 'ticketed_experiences',
      transactable_items: 'transactable_items',
      vehicles: 'vehicles',
    });
  }
  static get PermittedRoles (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      advertiser: 'ADVERTISER',
    });
  }
  static get PermittedTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      manage: 'MANAGE',
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      manage: 'MANAGE',
    });
  }
  static get Standard (): Object {
    return Object.freeze({
      google: 'google',
    });
  }

  deleteAgencies (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  createAgency (fields: Array<string>, params: Object = {}): Promise<ProductCatalog> {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      ProductCatalog
    );
  }

  deleteAssignedUsers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/assigned_users',
      params
    );
  }

  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields: Array<string>, params: Object = {}): Promise<ProductCatalog> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      ProductCatalog
    );
  }

  getAutomotiveModels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AutomotiveModel,
      fields,
      params,
      fetchFirstPage,
      '/automotive_models'
    );
  }

  createBatch (fields: Array<string>, params: Object = {}): Promise<ProductCatalog> {
    return this.createEdge(
      '/batch',
      fields,
      params,
      ProductCatalog
    );
  }

  createBundleFolder (fields: Array<string>, params: Object = {}): Promise<DynamicItemDisplayBundleFolder> {
    return this.createEdge(
      '/bundle_folders',
      fields,
      params,
      DynamicItemDisplayBundleFolder
    );
  }

  createBundle (fields: Array<string>, params: Object = {}): Promise<DynamicItemDisplayBundle> {
    return this.createEdge(
      '/bundles',
      fields,
      params,
      DynamicItemDisplayBundle
    );
  }

  getCategories (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalogCategory,
      fields,
      params,
      fetchFirstPage,
      '/categories'
    );
  }

  createCategory (fields: Array<string>, params: Object = {}): Promise<ProductCatalogCategory> {
    return this.createEdge(
      '/categories',
      fields,
      params,
      ProductCatalogCategory
    );
  }

  getCheckBatchRequestStatus (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CheckBatchRequestStatus,
      fields,
      params,
      fetchFirstPage,
      '/check_batch_request_status'
    );
  }

  getCollaborativeAdsShareSettings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CollaborativeAdsShareSettings,
      fields,
      params,
      fetchFirstPage,
      '/collaborative_ads_share_settings'
    );
  }

  getDestinations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Destination,
      fields,
      params,
      fetchFirstPage,
      '/destinations'
    );
  }

  getEventStats (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductEventStat,
      fields,
      params,
      fetchFirstPage,
      '/event_stats'
    );
  }

  deleteExternalEventSources (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/external_event_sources',
      params
    );
  }

  getExternalEventSources (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ExternalEventSource,
      fields,
      params,
      fetchFirstPage,
      '/external_event_sources'
    );
  }

  createExternalEventSource (fields: Array<string>, params: Object = {}): Promise<ProductCatalog> {
    return this.createEdge(
      '/external_event_sources',
      fields,
      params,
      ProductCatalog
    );
  }

  getFlights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Flight,
      fields,
      params,
      fetchFirstPage,
      '/flights'
    );
  }

  getHomeListings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      HomeListing,
      fields,
      params,
      fetchFirstPage,
      '/home_listings'
    );
  }

  createHomeListing (fields: Array<string>, params: Object = {}): Promise<HomeListing> {
    return this.createEdge(
      '/home_listings',
      fields,
      params,
      HomeListing
    );
  }

  getHotelRoomsBatch (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalogHotelRoomsBatch,
      fields,
      params,
      fetchFirstPage,
      '/hotel_rooms_batch'
    );
  }

  createHotelRoomsBatch (fields: Array<string>, params: Object = {}): Promise<ProductCatalog> {
    return this.createEdge(
      '/hotel_rooms_batch',
      fields,
      params,
      ProductCatalog
    );
  }

  getHotels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Hotel,
      fields,
      params,
      fetchFirstPage,
      '/hotels'
    );
  }

  createHotel (fields: Array<string>, params: Object = {}): Promise<Hotel> {
    return this.createEdge(
      '/hotels',
      fields,
      params,
      Hotel
    );
  }

  createItemsBatch (fields: Array<string>, params: Object = {}): Promise<ProductCatalog> {
    return this.createEdge(
      '/items_batch',
      fields,
      params,
      ProductCatalog
    );
  }

  getPricingVariablesBatch (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalogPricingVariablesBatch,
      fields,
      params,
      fetchFirstPage,
      '/pricing_variables_batch'
    );
  }

  createPricingVariablesBatch (fields: Array<string>, params: Object = {}): Promise<ProductCatalog> {
    return this.createEdge(
      '/pricing_variables_batch',
      fields,
      params,
      ProductCatalog
    );
  }

  getProductFeeds (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductFeed,
      fields,
      params,
      fetchFirstPage,
      '/product_feeds'
    );
  }

  createProductFeed (fields: Array<string>, params: Object = {}): Promise<ProductFeed> {
    return this.createEdge(
      '/product_feeds',
      fields,
      params,
      ProductFeed
    );
  }

  getProductGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductGroup,
      fields,
      params,
      fetchFirstPage,
      '/product_groups'
    );
  }

  createProductGroup (fields: Array<string>, params: Object = {}): Promise<ProductGroup> {
    return this.createEdge(
      '/product_groups',
      fields,
      params,
      ProductGroup
    );
  }

  getProductSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductSet,
      fields,
      params,
      fetchFirstPage,
      '/product_sets'
    );
  }

  createProductSet (fields: Array<string>, params: Object = {}): Promise<ProductSet> {
    return this.createEdge(
      '/product_sets',
      fields,
      params,
      ProductSet
    );
  }

  getProductSetsBatch (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalogProductSetsBatch,
      fields,
      params,
      fetchFirstPage,
      '/product_sets_batch'
    );
  }

  getProducts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductItem,
      fields,
      params,
      fetchFirstPage,
      '/products'
    );
  }

  createProduct (fields: Array<string>, params: Object = {}): Promise<ProductItem> {
    return this.createEdge(
      '/products',
      fields,
      params,
      ProductItem
    );
  }

  getVehicleOffers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      VehicleOffer,
      fields,
      params,
      fetchFirstPage,
      '/vehicle_offers'
    );
  }

  getVehicles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Vehicle,
      fields,
      params,
      fetchFirstPage,
      '/vehicles'
    );
  }

  createVehicle (fields: Array<string>, params: Object = {}): Promise<Vehicle> {
    return this.createEdge(
      '/vehicles',
      fields,
      params,
      Vehicle
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): ProductCatalog {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): ProductCatalog {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
