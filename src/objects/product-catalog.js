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
import AutoMarket from './auto-market';
import AutoOffer from './auto-offer';
import AutomotiveModel from './automotive-model';
import Auto from './auto';
import DynamicItemDisplayBundleFolder from './dynamic-item-display-bundle-folder';
import DynamicItemDisplayBundle from './dynamic-item-display-bundle';
import BusinessTag from './business-tag';
import BusinessRequest from './business-request';
import BusinessProductCatalogTOS from './business-product-catalog-tos';
import ProductCatalogCategory from './product-catalog-category';
import CheckBatchRequestStatus from './check-batch-request-status';
import BusinessObject from './business-object';
import DACheck from './da-check';
import ProductDaEventSamplesBatch from './product-da-event-samples-batch';
import Destination from './destination';
import AdAccount from './ad-account';
import ProductEventStat from './product-event-stat';
import ProductCatalogExampleFeed from './product-catalog-example-feed';
import ExternalEventSource from './external-event-source';
import ProductCatalogFacets from './product-catalog-facets';
import Flight from './flight';
import HomeListing from './home-listing';
import HomeServiceProvider from './home-service-provider';
import ProductCatalogHotelRoomsBatch from './product-catalog-hotel-rooms-batch';
import Hotel from './hotel';
import MediaTitle from './media-title';
import MerchantReport from './merchant-report';
import DogNotificationSettings from './dog-notification-settings';
import ProductCatalogPricingVariablesBatch from './product-catalog-pricing-variables-batch';
import ProductFeed from './product-feed';
import ProductGroup from './product-group';
import ProductSet from './product-set';
import ProductCatalogProductSetsBatch from './product-catalog-product-sets-batch';
import ProductItem from './product-item';
import ProductsQualityIssue from './products-quality-issue';
import CatalogSmartPixelSettings from './catalog-smart-pixel-settings';
import SmartPixelInsights from './smart-pixel-insights';
import SuggestedProductSet from './suggested-product-set';
import ProductCatalogUserPermissions from './product-catalog-user-permissions';
import VehicleOffer from './vehicle-offer';
import Vehicle from './vehicle';
import AdVideo from './ad-video';

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
      image_padding_landscape: 'image_padding_landscape',
      image_padding_square: 'image_padding_square',
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
  static get PermittedRoles (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      advertiser: 'ADVERTISER'
    });
  }
  static get Standard (): Object {
    return Object.freeze({
      google: 'google'
    });
  }
  static get Role (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      advertiser: 'ADVERTISER'
    });
  }
  static get OwnerTypes (): Object {
    return Object.freeze({
      business: 'business',
      page: 'page',
      personal: 'personal'
    });
  }

  deleteAgencies (params): AbstractObject {
    return super.deleteEdge(
      '/agencies',
      params
    );
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

  createAgency (fields, params): ProductCatalog {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      ProductCatalog
    );
  }

  getAssignedPartners (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/assigned_partners'
    );
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

  getAutoOffers (fields, params, fetchFirstPage = true): AutoOffer {
    return this.getEdge(
      AutoOffer,
      fields,
      params,
      fetchFirstPage,
      '/auto_offers'
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

  createBatch (fields, params): ProductCatalog {
    return this.createEdge(
      '/batch',
      fields,
      params,
      ProductCatalog
    );
  }

  getBundleFolders (fields, params, fetchFirstPage = true): DynamicItemDisplayBundleFolder {
    return this.getEdge(
      DynamicItemDisplayBundleFolder,
      fields,
      params,
      fetchFirstPage,
      '/bundle_folders'
    );
  }

  getBundles (fields, params, fetchFirstPage = true): DynamicItemDisplayBundle {
    return this.getEdge(
      DynamicItemDisplayBundle,
      fields,
      params,
      fetchFirstPage,
      '/bundles'
    );
  }

  getBusinessObjectTags (fields, params, fetchFirstPage = true): BusinessTag {
    return this.getEdge(
      BusinessTag,
      fields,
      params,
      fetchFirstPage,
      '/business_object_tags'
    );
  }

  getBusinessRequests (fields, params, fetchFirstPage = true): BusinessRequest {
    return this.getEdge(
      BusinessRequest,
      fields,
      params,
      fetchFirstPage,
      '/business_requests'
    );
  }

  getCatalogSegmentMerchantTos (fields, params, fetchFirstPage = true): BusinessProductCatalogTOS {
    return this.getEdge(
      BusinessProductCatalogTOS,
      fields,
      params,
      fetchFirstPage,
      '/catalog_segment_merchant_tos'
    );
  }

  getCatalogSegments (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/catalog_segments'
    );
  }

  getCategories (fields, params, fetchFirstPage = true): ProductCatalogCategory {
    return this.getEdge(
      ProductCatalogCategory,
      fields,
      params,
      fetchFirstPage,
      '/categories'
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

  getConnectedBusinessObjects (fields, params, fetchFirstPage = true): BusinessObject {
    return this.getEdge(
      BusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/connected_business_objects'
    );
  }

  getDaChecks (fields, params, fetchFirstPage = true): DACheck {
    return this.getEdge(
      DACheck,
      fields,
      params,
      fetchFirstPage,
      '/da_checks'
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

  getDestinations (fields, params, fetchFirstPage = true): Destination {
    return this.getEdge(
      Destination,
      fields,
      params,
      fetchFirstPage,
      '/destinations'
    );
  }

  getDpaAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/dpa_ad_accounts'
    );
  }

  getDpaEligibleAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/dpa_eligible_ad_accounts'
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

  getExampleFeed (fields, params, fetchFirstPage = true): ProductCatalogExampleFeed {
    return this.getEdge(
      ProductCatalogExampleFeed,
      fields,
      params,
      fetchFirstPage,
      '/example_feed'
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

  createExternalEventSource (fields, params): ProductCatalog {
    return this.createEdge(
      '/external_event_sources',
      fields,
      params,
      ProductCatalog
    );
  }

  getFacets (fields, params, fetchFirstPage = true): ProductCatalogFacets {
    return this.getEdge(
      ProductCatalogFacets,
      fields,
      params,
      fetchFirstPage,
      '/facets'
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

  createHomeListing (fields, params): HomeListing {
    return this.createEdge(
      '/home_listings',
      fields,
      params,
      HomeListing
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

  getHotelRoomsBatch (fields, params, fetchFirstPage = true): ProductCatalogHotelRoomsBatch {
    return this.getEdge(
      ProductCatalogHotelRoomsBatch,
      fields,
      params,
      fetchFirstPage,
      '/hotel_rooms_batch'
    );
  }

  createHotelRoomsBatch (fields, params): ProductCatalog {
    return this.createEdge(
      '/hotel_rooms_batch',
      fields,
      params,
      ProductCatalog
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

  createHotel (fields, params): Hotel {
    return this.createEdge(
      '/hotels',
      fields,
      params,
      Hotel
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

  getMerchantReports (fields, params, fetchFirstPage = true): MerchantReport {
    return this.getEdge(
      MerchantReport,
      fields,
      params,
      fetchFirstPage,
      '/merchant_reports'
    );
  }

  getNotificationSettings (fields, params, fetchFirstPage = true): DogNotificationSettings {
    return this.getEdge(
      DogNotificationSettings,
      fields,
      params,
      fetchFirstPage,
      '/notification_settings'
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

  createPricingVariablesBatch (fields, params): ProductCatalog {
    return this.createEdge(
      '/pricing_variables_batch',
      fields,
      params,
      ProductCatalog
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

  createProductSetsBatch (fields, params): ProductCatalog {
    return this.createEdge(
      '/product_sets_batch',
      fields,
      params,
      ProductCatalog
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

  getQualityIssueSamples (fields, params, fetchFirstPage = true): ProductItem {
    return this.getEdge(
      ProductItem,
      fields,
      params,
      fetchFirstPage,
      '/quality_issue_samples'
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

  getRiskyProducts (fields, params, fetchFirstPage = true): ProductItem {
    return this.getEdge(
      ProductItem,
      fields,
      params,
      fetchFirstPage,
      '/risky_products'
    );
  }

  getSmartPixelSettings (fields, params, fetchFirstPage = true): CatalogSmartPixelSettings {
    return this.getEdge(
      CatalogSmartPixelSettings,
      fields,
      params,
      fetchFirstPage,
      '/smart_pixel_settings'
    );
  }

  getSmartPixelStats (fields, params, fetchFirstPage = true): SmartPixelInsights {
    return this.getEdge(
      SmartPixelInsights,
      fields,
      params,
      fetchFirstPage,
      '/smart_pixel_stats'
    );
  }

  getSuggestedProductSets (fields, params, fetchFirstPage = true): SuggestedProductSet {
    return this.getEdge(
      SuggestedProductSet,
      fields,
      params,
      fetchFirstPage,
      '/suggested_product_sets'
    );
  }

  deleteUserPermissions (params): AbstractObject {
    return super.deleteEdge(
      '/userpermissions',
      params
    );
  }

  getUserPermissions (fields, params, fetchFirstPage = true): ProductCatalogUserPermissions {
    return this.getEdge(
      ProductCatalogUserPermissions,
      fields,
      params,
      fetchFirstPage,
      '/userpermissions'
    );
  }

  createUserPermission (fields, params): ProductCatalog {
    return this.createEdge(
      '/userpermissions',
      fields,
      params,
      ProductCatalog
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

  createVideo (fields, params): AdVideo {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo
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
