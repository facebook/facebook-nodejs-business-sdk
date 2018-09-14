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
import Application from './application';
import BusinessResourceGroup from './business-resource-group';
import AdMonetizationProperty from './ad-monetization-property';
import Page from './page';
import ProductCatalog from './product-catalog';
import WhatsAppBusinessAccount from './whats-app-business-account';
import BusinessSettingLogsData from './business-setting-logs-data';

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
      two_fac_status: 'two_fac_status'
    });
  }

  static get Role (): Object {
    return Object.freeze({
      finance_editor: 'FINANCE_EDITOR',
      finance_analyst: 'FINANCE_ANALYST',
      ads_rights_reviewer: 'ADS_RIGHTS_REVIEWER',
      admin: 'ADMIN',
      employee: 'EMPLOYEE',
      fb_employee_sales_rep: 'FB_EMPLOYEE_SALES_REP'
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

  getAssignedApps (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/assigned_apps'
    );
  }

  getAssignedBusinessResourceGroups (fields, params, fetchFirstPage = true): BusinessResourceGroup {
    return this.getEdge(
      BusinessResourceGroup,
      fields,
      params,
      fetchFirstPage,
      '/assigned_business_resource_groups'
    );
  }

  getAssignedMonetizationProperties (fields, params, fetchFirstPage = true): AdMonetizationProperty {
    return this.getEdge(
      AdMonetizationProperty,
      fields,
      params,
      fetchFirstPage,
      '/assigned_monetization_properties'
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

  getAssignedWhatsAppBusinessAccounts (fields, params, fetchFirstPage = true): WhatsAppBusinessAccount {
    return this.getEdge(
      WhatsAppBusinessAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_whatsapp_business_accounts'
    );
  }

  getBusinessSettingLogs (fields, params, fetchFirstPage = true): BusinessSettingLogsData {
    return this.getEdge(
      BusinessSettingLogsData,
      fields,
      params,
      fetchFirstPage,
      '/businesssettinglogs'
    );
  }

  getCrStAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/cr_st_ad_accounts'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): BusinessUser {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): BusinessUser {
    return super.update(
      params
    );
  }
}
