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
import Page from './page';
import ProductCatalog from './product-catalog';

/**
 * BusinessUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessUser extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      email: 'email',
      finance_permission: 'finance_permission',
      first_name: 'first_name',
      id: 'id',
      ip_permission: 'ip_permission',
      last_name: 'last_name',
      marked_for_removal: 'marked_for_removal',
      name: 'name',
      pending_email: 'pending_email',
      role: 'role',
      title: 'title',
      two_fac_status: 'two_fac_status',
    });
  }

  static get Role (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      ads_rights_reviewer: 'ADS_RIGHTS_REVIEWER',
      employee: 'EMPLOYEE',
      finance_analyst: 'FINANCE_ANALYST',
      finance_editor: 'FINANCE_EDITOR',
    });
  }

  getAssignedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): AdAccount {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_ad_accounts'
    );
  }

  getAssignedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Page {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/assigned_pages'
    );
  }

  getAssignedProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): ProductCatalog {
    // $FlowFixMe : Support Generic Types
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/assigned_product_catalogs'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessUser {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): BusinessUser {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
