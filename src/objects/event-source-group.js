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
import AnalyticsCohortQueryResult from './analytics-cohort-query-result';
import AnalyticsEntityUserConfig from './analytics-entity-user-config';
import AnalyticsEventTypes from './analytics-event-types';
import AnalyticsFunnelQueryResult from './analytics-funnel-query-result';
import AnalyticsQueryResult from './analytics-query-result';
import AnalyticsQueryExportResult from './analytics-query-export-result';
import AnalyticsSegment from './analytics-segment';
import Business from './business';
import BusinessTag from './business-tag';
import BusinessRequest from './business-request';
import BusinessObject from './business-object';
import AdAccount from './ad-account';

/**
 * EventSourceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventSourceGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      event_sources: 'event_sources',
      id: 'id',
      name: 'name'
    });
  }

  static get Role (): Object {
    return Object.freeze({
      analyst: 'ANALYST',
      limited_analyst: 'LIMITED_ANALYST'
    });
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

  getPublisherInsights (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/publisher_insights'
    );
  }

  getShareDAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/shared_accounts'
    );
  }

  createShareDAccount (fields, params): EventSourceGroup {
    return this.createEdge(
      '/shared_accounts',
      fields,
      params,
      EventSourceGroup
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

  createUserPermission (fields, params): EventSourceGroup {
    return this.createEdge(
      '/userpermissions',
      fields,
      params,
      EventSourceGroup
    );
  }

  get (fields, params): EventSourceGroup {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): EventSourceGroup {
    return super.update(
      params
    );
  }
}
