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
import AdAccount from './ad-account';
import Business from './business';
import AssignedUser from './assigned-user';
import DACheck from './da-check';
import OfflineConversionDataSetUpload from './offline-conversion-data-set-upload';
import OpenBridgeConfiguration from './open-bridge-configuration';
import AdsPixelStatsResult from './ads-pixel-stats-result';

/**
 * AdsPixel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixel extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      automatic_matching_fields: 'automatic_matching_fields',
      can_proxy: 'can_proxy',
      code: 'code',
      config: 'config',
      creation_time: 'creation_time',
      creator: 'creator',
      data_use_setting: 'data_use_setting',
      description: 'description',
      duplicate_entries: 'duplicate_entries',
      enable_auto_assign_to_accounts: 'enable_auto_assign_to_accounts',
      enable_automatic_matching: 'enable_automatic_matching',
      event_stats: 'event_stats',
      event_time_max: 'event_time_max',
      event_time_min: 'event_time_min',
      first_party_cookie_status: 'first_party_cookie_status',
      id: 'id',
      is_consolidated_container: 'is_consolidated_container',
      is_created_by_business: 'is_created_by_business',
      is_crm: 'is_crm',
      is_mta_use: 'is_mta_use',
      is_restricted_use: 'is_restricted_use',
      is_unavailable: 'is_unavailable',
      last_fired_time: 'last_fired_time',
      last_upload_app: 'last_upload_app',
      last_upload_app_changed_time: 'last_upload_app_changed_time',
      match_rate_approx: 'match_rate_approx',
      matched_entries: 'matched_entries',
      name: 'name',
      owner_ad_account: 'owner_ad_account',
      owner_business: 'owner_business',
      usage: 'usage',
      valid_entries: 'valid_entries',
    });
  }

  static get SortBy (): Object {
    return Object.freeze({
      last_fired_time: 'LAST_FIRED_TIME',
      name: 'NAME',
    });
  }
  static get AutomaticMatchingFields (): Object {
    return Object.freeze({
      country: 'country',
      ct: 'ct',
      db: 'db',
      em: 'em',
      external_id: 'external_id',
      fn: 'fn',
      ge: 'ge',
      ln: 'ln',
      ph: 'ph',
      st: 'st',
      zp: 'zp',
    });
  }
  static get DataUseSetting (): Object {
    return Object.freeze({
      advertising_and_analytics: 'ADVERTISING_AND_ANALYTICS',
      analytics_only: 'ANALYTICS_ONLY',
      empty: 'EMPTY',
    });
  }
  static get FirstPartyCookieStatus (): Object {
    return Object.freeze({
      empty: 'EMPTY',
      first_party_cookie_disabled: 'FIRST_PARTY_COOKIE_DISABLED',
      first_party_cookie_enabled: 'FIRST_PARTY_COOKIE_ENABLED',
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      aa_analyze: 'AA_ANALYZE',
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      edit: 'EDIT',
      upload: 'UPLOAD',
    });
  }

  getAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
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

  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdsPixel> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      AdsPixel,
      pathOverride,
    );
  }

  getDaChecks (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      DACheck,
      fields,
      params,
      fetchFirstPage,
      '/da_checks'
    );
  }

  createEvent (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/events',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  createMeapitocapiconsolidationhelper (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/meapitocapiconsolidationhelper',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getOfflineEventUploads (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OfflineConversionDataSetUpload,
      fields,
      params,
      fetchFirstPage,
      '/offline_event_uploads'
    );
  }

  getOpenBridgeConfigurations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OpenBridgeConfiguration,
      fields,
      params,
      fetchFirstPage,
      '/openbridge_configurations'
    );
  }

  createShadowTrafficHelper (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/shadowtraffichelper',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  deleteSharedAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/shared_accounts',
      params
    );
  }

  getSharedAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/shared_accounts'
    );
  }

  createSharedAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdsPixel> {
    return this.createEdge(
      '/shared_accounts',
      fields,
      params,
      AdsPixel,
      pathOverride,
    );
  }

  getSharedAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/shared_agencies'
    );
  }

  getStats (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixelStatsResult,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  createTelemetry (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/telemetry',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdsPixel {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdsPixel {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
