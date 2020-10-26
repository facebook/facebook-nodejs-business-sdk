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
import AtlasCampaign from './atlas-campaign';
import BusinessUser from './business-user';

/**
 * BusinessUnit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessUnit extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      business: 'business',
      creation_time: 'creation_time',
      currency: 'currency',
      excluded_sources: 'excluded_sources',
      id: 'id',
      is_enabled_for_measurement: 'is_enabled_for_measurement',
      name: 'name',
      time_zone: 'time_zone',
      visits_available_date: 'visits_available_date',
    });
  }


  getAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/ad_accounts'
    );
  }

  getAdPlatforms (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ad_platforms'
    );
  }

  getAtlasSalesAccesses (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/atlas_sales_accesses'
    );
  }

  createAtlasSalesAccess (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/atlas_sales_accesses',
      fields,
      params,
      
    );
  }

  getCampaigns (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AtlasCampaign,
      fields,
      params,
      fetchFirstPage,
      '/campaigns'
    );
  }

  getConversionEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/conversion_events'
    );
  }

  getConversionPaths (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/conversion_paths'
    );
  }

  getCustomBreakdowns (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/custom_breakdowns'
    );
  }

  getDiagnostics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/diagnostics'
    );
  }

  getExternalImportFile (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/external_import_file'
    );
  }

  getReports (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/reports'
    );
  }

  getSources (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/sources'
    );
  }

  getUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessUser,
      fields,
      params,
      fetchFirstPage,
      '/users'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessUnit {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
