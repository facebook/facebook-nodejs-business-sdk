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
import AtlasCampaign from './atlas-campaign';
import BusinessUser from './business-user';

/**
 * BusinessUnit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessUnit extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      creation_time: 'creation_time',
      id: 'id',
      name: 'name'
    });
  }

  getAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/ad_accounts'
    );
  }

  getCampaigns (fields, params, fetchFirstPage = true): AtlasCampaign {
    return this.getEdge(
      AtlasCampaign,
      fields,
      params,
      fetchFirstPage,
      '/campaigns'
    );
  }

  getFbConversionEvents (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/fb_conversion_events'
    );
  }

  getReportColumns (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/report_columns'
    );
  }

  getReports (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/reports'
    );
  }

  getUsers (fields, params, fetchFirstPage = true): BusinessUser {
    return this.getEdge(
      BusinessUser,
      fields,
      params,
      fetchFirstPage,
      '/users'
    );
  }

  get (fields, params): BusinessUnit {
    return this.read(
      fields,
      params
    );
  }
}
