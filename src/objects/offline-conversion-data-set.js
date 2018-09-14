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
import AdAccount from './ad-account';
import Business from './business';
import AnalyticsCohortQueryResult from './analytics-cohort-query-result';
import AnalyticsEntityUserConfig from './analytics-entity-user-config';
import AnalyticsEventTypes from './analytics-event-types';
import AnalyticsFunnelQueryResult from './analytics-funnel-query-result';
import AnalyticsQueryResult from './analytics-query-result';
import AnalyticsQueryExportResult from './analytics-query-export-result';
import AnalyticsSegment from './analytics-segment';
import AssignedUser from './assigned-user';
import CustomAudience from './custom-audience';
import BusinessTag from './business-tag';
import BusinessRequest from './business-request';
import BusinessObject from './business-object';
import CustomConversion from './custom-conversion';
import DACheck from './da-check';
import ExternalEventSourceDAStatsResult from './external-event-source-da-stats-result';
import ProductCatalog from './product-catalog';

/**
 * OfflineConversionDataSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSet extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attribute_stats: 'attribute_stats',
      business: 'business',
      config: 'config',
      creation_time: 'creation_time',
      data_origin: 'data_origin',
      description: 'description',
      duplicate_entries: 'duplicate_entries',
      enable_auto_assign_to_accounts: 'enable_auto_assign_to_accounts',
      event_stats: 'event_stats',
      event_time_max: 'event_time_max',
      event_time_min: 'event_time_min',
      id: 'id',
      is_restricted_use: 'is_restricted_use',
      last_upload_app: 'last_upload_app',
      match_rate_approx: 'match_rate_approx',
      matched_entries: 'matched_entries',
      matched_unique_users: 'matched_unique_users',
      name: 'name',
      usage: 'usage',
      valid_entries: 'valid_entries'
    });
  }

  static get DataOrigin (): Object {
    return Object.freeze({
      directly_from_people: 'DIRECTLY_FROM_PEOPLE',
      people_and_partners: 'PEOPLE_AND_PARTNERS',
      directly_from_partners: 'DIRECTLY_FROM_PARTNERS',
      none: 'NONE'
    });
  }
  static get PermittedRoles (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      uploader: 'UPLOADER',
      advertiser: 'ADVERTISER'
    });
  }
  static get Role (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      uploader: 'UPLOADER',
      advertiser: 'ADVERTISER'
    });
  }

  getActivities (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/activities'
    );
  }

  deleteAdAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/adaccounts',
      params
    );
  }

  getAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }

  createAdAccount (fields, params): OfflineConversionDataSet {
    return this.createEdge(
      '/adaccounts',
      fields,
      params,
      OfflineConversionDataSet
    );
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

  createAgency (fields, params): OfflineConversionDataSet {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      OfflineConversionDataSet
    );
  }

  getAnalyticsCohortQuery (fields, params, fetchFirstPage = true): AnalyticsCohortQueryResult {
    return this.getEdge(
      AnalyticsCohortQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_cohort_query'
    );
  }

  getAnalyticsEntityUserConfig (fields, params, fetchFirstPage = true): AnalyticsEntityUserConfig {
    return this.getEdge(
      AnalyticsEntityUserConfig,
      fields,
      params,
      fetchFirstPage,
      '/analytics_entity_user_config'
    );
  }

  getAnalyticsEventTypes (fields, params, fetchFirstPage = true): AnalyticsEventTypes {
    return this.getEdge(
      AnalyticsEventTypes,
      fields,
      params,
      fetchFirstPage,
      '/analytics_event_types'
    );
  }

  getAnalyticsFunnelQuery (fields, params, fetchFirstPage = true): AnalyticsFunnelQueryResult {
    return this.getEdge(
      AnalyticsFunnelQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_funnel_query'
    );
  }

  getAnalyticsQuery (fields, params, fetchFirstPage = true): AnalyticsQueryResult {
    return this.getEdge(
      AnalyticsQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_query'
    );
  }

  getAnalyticsQueryExport (fields, params, fetchFirstPage = true): AnalyticsQueryExportResult {
    return this.getEdge(
      AnalyticsQueryExportResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_query_export'
    );
  }

  getAnalyticsSegments (fields, params, fetchFirstPage = true): AnalyticsSegment {
    return this.getEdge(
      AnalyticsSegment,
      fields,
      params,
      fetchFirstPage,
      '/analytics_segments'
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

  getAssignedUsers (fields, params, fetchFirstPage = true): AssignedUser {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  getAttributedEvents (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/attributed_events'
    );
  }

  getAudiences (fields, params, fetchFirstPage = true): CustomAudience {
    return this.getEdge(
      CustomAudience,
      fields,
      params,
      fetchFirstPage,
      '/audiences'
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

  getConnectedBusinessObjects (fields, params, fetchFirstPage = true): BusinessObject {
    return this.getEdge(
      BusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/connected_business_objects'
    );
  }

  getCustomConversions (fields, params, fetchFirstPage = true): CustomConversion {
    return this.getEdge(
      CustomConversion,
      fields,
      params,
      fetchFirstPage,
      '/customconversions'
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

  getDaStats (fields, params, fetchFirstPage = true): ExternalEventSourceDAStatsResult {
    return this.getEdge(
      ExternalEventSourceDAStatsResult,
      fields,
      params,
      fetchFirstPage,
      '/da_stats'
    );
  }

  createEvent (fields, params): AbstractObject {
    return this.createEdge(
      '/events',
      fields,
      params

    );
  }

  getOptimizationStatuses (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/optimization_statuses'
    );
  }

  getProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  getStats (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  getUploads (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/uploads'
    );
  }

  createUpload (fields, params): AbstractObject {
    return this.createEdge(
      '/uploads',
      fields,
      params

    );
  }

  deleteUserPermissions (params): AbstractObject {
    return super.deleteEdge(
      '/userpermissions',
      params
    );
  }

  getUserPermissions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/userpermissions'
    );
  }

  createUserPermission (fields, params): OfflineConversionDataSet {
    return this.createEdge(
      '/userpermissions',
      fields,
      params,
      OfflineConversionDataSet
    );
  }

  createValidate (fields, params): OfflineConversionDataSet {
    return this.createEdge(
      '/validate',
      fields,
      params,
      OfflineConversionDataSet
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): OfflineConversionDataSet {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): OfflineConversionDataSet {
    return super.update(
      params
    );
  }
}
