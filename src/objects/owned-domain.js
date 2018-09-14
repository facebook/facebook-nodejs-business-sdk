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
import Ad from './ad';
import BusinessTag from './business-tag';
import BusinessRequest from './business-request';
import BusinessObject from './business-object';
import Page from './page';

/**
 * OwnedDomain
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OwnedDomain extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      domain_name: 'domain_name',
      id: 'id'
    });
  }

  static get PermittedRoles (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      webmaster_developer: 'WEBMASTER_DEVELOPER'
    });
  }

  createAgency (fields, params): OwnedDomain {
    return this.createEdge(
      '/Agencies',
      fields,
      params,
      OwnedDomain
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

  getBlockedAdGroups (fields, params, fetchFirstPage = true): Ad {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/blocked_adgroups'
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

  getPagesRunningAdGroups (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/pages_running_adgroups'
    );
  }

  getPermittedPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/permitted_pages'
    );
  }

  getRunningAdGroups (fields, params, fetchFirstPage = true): Ad {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/running_adgroups'
    );
  }

  get (fields, params): OwnedDomain {
    return this.read(
      fields,
      params
    );
  }
}
