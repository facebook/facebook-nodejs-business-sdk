/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AdAccount from './ad-account';
import Page from './page';
import ProductCatalog from './product-catalog';
import User from './user';

/**
 * SystemUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SystemUser extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      created_by: 'created_by',
      created_time: 'created_time',
      finance_permission: 'finance_permission',
      id: 'id',
      ip_permission: 'ip_permission',
      name: 'name'
    });
  }

  static get Role (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      ads_rights_reviewer: 'ADS_RIGHTS_REVIEWER',
      employee: 'EMPLOYEE',
      finance_analyst: 'FINANCE_ANALYST',
      finance_editor: 'FINANCE_EDITOR'
    });
  }

  getAssignedAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_ad_accounts'
    );
  }

  getAssignedPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/assigned_pages'
    );
  }

  getAssignedProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/assigned_product_catalogs'
    );
  }

  getUpdatedBy (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/updated_by'
    );
  }

  get (fields, params): SystemUser {
    return this.read(
      fields,
      params
    );
  }
}
