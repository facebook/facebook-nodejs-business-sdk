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
import AtlasUser from './atlas-user';
import AtlasCampaign from './atlas-campaign';

/**
 * AtlasCompany
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AtlasCompany extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      created_by: 'created_by',
      created_date: 'created_date',
      created_time: 'created_time',
      cumulative_edited_date: 'cumulative_edited_date',
      id: 'id',
      is_mta: 'is_mta',
      last_modified_by: 'last_modified_by',
      last_modified_date: 'last_modified_date',
      last_modified_time: 'last_modified_time',
      login_security: 'login_security',
      name: 'name',
      version: 'version',
      visibility_type: 'visibility_type'
    });
  }

  getActionTags (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/action_tags'
    );
  }

  getAdvertisers (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/advertisers'
    );
  }

  getAtlasUsers (fields, params, fetchFirstPage = true): AtlasUser {
    return this.getEdge(
      AtlasUser,
      fields,
      params,
      fetchFirstPage,
      '/atlas_users'
    );
  }

  getBranches (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/branches'
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

  getChannels (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/channels'
    );
  }

  getClients (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/clients'
    );
  }

  getConnectedFbAccounts (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/connected_fb_accounts'
    );
  }

  getCustomDimensions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/custom_dimensions'
    );
  }

  getInProductMetricsByCampaign (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/in_product_metrics_by_campaign'
    );
  }

  getPermissions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/permissions'
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

  getReportRuns (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/report_runs'
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

  getRoles (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/roles'
    );
  }

  getTactics (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/tactics'
    );
  }

  getTrackingConnections (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/tracking_connections'
    );
  }

  get (fields, params): AtlasCompany {
    return this.read(
      fields,
      params
    );
  }
}
