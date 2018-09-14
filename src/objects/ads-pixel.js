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
import AdsPixelTrafficAnomalyConfig from './ads-pixel-traffic-anomaly-config';
import AnalyticsCohortQueryResult from './analytics-cohort-query-result';
import AnalyticsEntityUserConfig from './analytics-entity-user-config';
import AnalyticsEventTypes from './analytics-event-types';
import AnalyticsFunnelQueryResult from './analytics-funnel-query-result';
import AnalyticsQueryResult from './analytics-query-result';
import AnalyticsQueryExportResult from './analytics-query-export-result';
import AnalyticsSegment from './analytics-segment';
import Business from './business';
import AssignedUser from './assigned-user';
import CustomAudience from './custom-audience';
import CustomConversion from './custom-conversion';
import DACheck from './da-check';
import ExternalEventSourceDAStatsResult from './external-event-source-da-stats-result';
import AdsPixelDomainControlRule from './ads-pixel-domain-control-rule';
import AdsPixelDomainLastFiredTime from './ads-pixel-domain-last-fired-time';
import AdsPixelEventLastFiredTime from './ads-pixel-event-last-fired-time';
import AdsPixelEventPrediction from './ads-pixel-event-prediction';
import CalibratorExistingRule from './calibrator-existing-rule';
import AdsPixelEventSuggestionRule from './ads-pixel-event-suggestion-rule';
import AdsPixelMicrodataStats from './ads-pixel-microdata-stats';
import DogNotificationSettings from './dog-notification-settings';
import ExternalEventSourcePixelHelperDebuggingInfo from './external-event-source-pixel-helper-debugging-info';
import AdsPixelRawFiresResult from './ads-pixel-raw-fires-result';
import AdsPixelRealTimeEventLogResult from './ads-pixel-real-time-event-log-result';
import ExternalEventSourceDebugging from './external-event-source-debugging';
import AdsPixelRecentEventsResult from './ads-pixel-recent-events-result';
import AdsSegments from './ads-segments';
import AdsPixelServerToServerKey from './ads-pixel-server-to-server-key';
import AdAccount from './ad-account';
import AdsPixelSignalsIWLNux from './ads-pixel-signals-iwl-nux';
import AdsPixelStatsResult from './ads-pixel-stats-result';

/**
 * AdsPixel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_proxy: 'can_proxy',
      code: 'code',
      creation_time: 'creation_time',
      creator: 'creator',
      id: 'id',
      is_created_by_business: 'is_created_by_business',
      last_fired_time: 'last_fired_time',
      name: 'name',
      owner_ad_account: 'owner_ad_account',
      owner_business: 'owner_business'
    });
  }

  static get SortBy (): Object {
    return Object.freeze({
      last_fired_time: 'LAST_FIRED_TIME',
      name: 'NAME'
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      edit: 'EDIT',
      analyze: 'ANALYZE'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      primary: 'PRIMARY',
      secondary: 'SECONDARY'
    });
  }
  static get RelationshipType (): Object {
    return Object.freeze({
      ad_manager: 'AD_MANAGER',
      audience_manager: 'AUDIENCE_MANAGER',
      agency: 'AGENCY',
      other: 'OTHER'
    });
  }

  getAdsPixelTrafficAnomalyConfig (fields, params, fetchFirstPage = true): AdsPixelTrafficAnomalyConfig {
    return this.getEdge(
      AdsPixelTrafficAnomalyConfig,
      fields,
      params,
      fetchFirstPage,
      '/ads_pixel_traffic_anomaly_config'
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

  deleteAssignedUsers (params): AbstractObject {
    return super.deleteEdge(
      '/assigned_users',
      params
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

  createAssignedUser (fields, params): AdsPixel {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      AdsPixel
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

  createCreateServerToServerKey (fields, params): AdsPixel {
    return this.createEdge(
      '/create_server_to_server_keys',
      fields,
      params,
      AdsPixel
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

  getDomainControlRule (fields, params, fetchFirstPage = true): AdsPixelDomainControlRule {
    return this.getEdge(
      AdsPixelDomainControlRule,
      fields,
      params,
      fetchFirstPage,
      '/domain_control_rule'
    );
  }

  getDomainLastFiredTime (fields, params, fetchFirstPage = true): AdsPixelDomainLastFiredTime {
    return this.getEdge(
      AdsPixelDomainLastFiredTime,
      fields,
      params,
      fetchFirstPage,
      '/domain_last_fired_time'
    );
  }

  getEventLastFiredTime (fields, params, fetchFirstPage = true): AdsPixelEventLastFiredTime {
    return this.getEdge(
      AdsPixelEventLastFiredTime,
      fields,
      params,
      fetchFirstPage,
      '/event_last_fired_time'
    );
  }

  getEventPrediction (fields, params, fetchFirstPage = true): AdsPixelEventPrediction {
    return this.getEdge(
      AdsPixelEventPrediction,
      fields,
      params,
      fetchFirstPage,
      '/event_prediction'
    );
  }

  getEventRules (fields, params, fetchFirstPage = true): CalibratorExistingRule {
    return this.getEdge(
      CalibratorExistingRule,
      fields,
      params,
      fetchFirstPage,
      '/event_rules'
    );
  }

  getEventSuggestionRules (fields, params, fetchFirstPage = true): AdsPixelEventSuggestionRule {
    return this.getEdge(
      AdsPixelEventSuggestionRule,
      fields,
      params,
      fetchFirstPage,
      '/event_suggestion_rules'
    );
  }

  getMicrodataStats (fields, params, fetchFirstPage = true): AdsPixelMicrodataStats {
    return this.getEdge(
      AdsPixelMicrodataStats,
      fields,
      params,
      fetchFirstPage,
      '/microdata_stats'
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

  getPendingShareDAgencies (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/pending_shared_agencies'
    );
  }

  getPixelHelperDebuggingInfo (fields, params, fetchFirstPage = true): ExternalEventSourcePixelHelperDebuggingInfo {
    return this.getEdge(
      ExternalEventSourcePixelHelperDebuggingInfo,
      fields,
      params,
      fetchFirstPage,
      '/pixel_helper_debugging_info'
    );
  }

  getRawFires (fields, params, fetchFirstPage = true): AdsPixelRawFiresResult {
    return this.getEdge(
      AdsPixelRawFiresResult,
      fields,
      params,
      fetchFirstPage,
      '/raw_fires'
    );
  }

  getRealTimeEventLog (fields, params, fetchFirstPage = true): AdsPixelRealTimeEventLogResult {
    return this.getEdge(
      AdsPixelRealTimeEventLogResult,
      fields,
      params,
      fetchFirstPage,
      '/real_time_event_log'
    );
  }

  getRecentDebuggings (fields, params, fetchFirstPage = true): ExternalEventSourceDebugging {
    return this.getEdge(
      ExternalEventSourceDebugging,
      fields,
      params,
      fetchFirstPage,
      '/recent_debuggings'
    );
  }

  getRecentEvents (fields, params, fetchFirstPage = true): AdsPixelRecentEventsResult {
    return this.getEdge(
      AdsPixelRecentEventsResult,
      fields,
      params,
      fetchFirstPage,
      '/recent_events'
    );
  }

  createResetServerToServerKey (fields, params): AdsPixel {
    return this.createEdge(
      '/reset_server_to_server_key',
      fields,
      params,
      AdsPixel
    );
  }

  getSegments (fields, params, fetchFirstPage = true): AdsSegments {
    return this.getEdge(
      AdsSegments,
      fields,
      params,
      fetchFirstPage,
      '/segments'
    );
  }

  getServerToServerKeys (fields, params, fetchFirstPage = true): AdsPixelServerToServerKey {
    return this.getEdge(
      AdsPixelServerToServerKey,
      fields,
      params,
      fetchFirstPage,
      '/server_to_server_keys'
    );
  }

  deleteShareDAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/shared_accounts',
      params
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

  createShareDAccount (fields, params): AdsPixel {
    return this.createEdge(
      '/shared_accounts',
      fields,
      params,
      AdsPixel
    );
  }

  deleteShareDAgencies (params): AbstractObject {
    return super.deleteEdge(
      '/shared_agencies',
      params
    );
  }

  getShareDAgencies (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/shared_agencies'
    );
  }

  createShareDAgency (fields, params): AdsPixel {
    return this.createEdge(
      '/shared_agencies',
      fields,
      params,
      AdsPixel
    );
  }

  getSignalsIwlNux (fields, params, fetchFirstPage = true): AdsPixelSignalsIWLNux {
    return this.getEdge(
      AdsPixelSignalsIWLNux,
      fields,
      params,
      fetchFirstPage,
      '/signals_iwl_nux'
    );
  }

  getStats (fields, params, fetchFirstPage = true): AdsPixelStatsResult {
    return this.getEdge(
      AdsPixelStatsResult,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  get (fields, params): AdsPixel {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdsPixel {
    return super.update(
      params
    );
  }
}
