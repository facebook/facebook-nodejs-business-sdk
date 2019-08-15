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
import AssignedUser from './assigned-user';
import AdAccount from './ad-account';
import Application from './application';
import CustomConversion from './custom-conversion';
import InstagramUser from './instagram-user';
import OfflineConversionDataSet from './offline-conversion-data-set';
import Page from './page';
import AdsPixel from './ads-pixel';
import ProductCatalog from './product-catalog';

/**
 * BusinessAssetGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAssetGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name: 'name',
    });
  }

  static get AdaccountTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      creative: 'CREATIVE',
      draft: 'DRAFT',
      fb_employee_dso_advertise: 'FB_EMPLOYEE_DSO_ADVERTISE',
      manage: 'MANAGE',
    });
  }
  static get OfflineConversionDataSetTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      manage: 'MANAGE',
      upload: 'UPLOAD',
    });
  }
  static get PageTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      create_content: 'CREATE_CONTENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      manage_leads: 'MANAGE_LEADS',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      platform_manage_pages: 'PLATFORM_MANAGE_PAGES',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
    });
  }
  static get PixelTasks (): Object {
    return Object.freeze({
      analyze: 'ANALYZE',
      edit: 'EDIT',
    });
  }

  deleteAssignedUsers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/assigned_users',
      params
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

  createAssignedUser (fields: Array<string>, params: Object = {}): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      BusinessAssetGroup
    );
  }

  deleteContainedAdAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_adaccounts',
      params
    );
  }

  getContainedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/contained_adaccounts'
    );
  }

  createContainedAdAccount (fields: Array<string>, params: Object = {}): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_adaccounts',
      fields,
      params,
      BusinessAssetGroup
    );
  }

  deleteContainedApplications (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_applications',
      params
    );
  }

  getContainedApplications (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/contained_applications'
    );
  }

  createContainedApplication (fields: Array<string>, params: Object = {}): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_applications',
      fields,
      params,
      BusinessAssetGroup
    );
  }

  deleteContainedCustomConversions (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_custom_conversions',
      params
    );
  }

  getContainedCustomConversions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomConversion,
      fields,
      params,
      fetchFirstPage,
      '/contained_custom_conversions'
    );
  }

  createContainedCustomConversion (fields: Array<string>, params: Object = {}): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_custom_conversions',
      fields,
      params,
      BusinessAssetGroup
    );
  }

  deleteContainedInstagramAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_instagram_accounts',
      params
    );
  }

  getContainedInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/contained_instagram_accounts'
    );
  }

  createContainedInstagramAccount (fields: Array<string>, params: Object = {}): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_instagram_accounts',
      fields,
      params,
      BusinessAssetGroup
    );
  }

  deleteContainedOfflineConversionDataSets (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_offline_conversion_data_sets',
      params
    );
  }

  getContainedOfflineConversionDataSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OfflineConversionDataSet,
      fields,
      params,
      fetchFirstPage,
      '/contained_offline_conversion_data_sets'
    );
  }

  createContainedOfflineConversionDataSet (fields: Array<string>, params: Object = {}): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_offline_conversion_data_sets',
      fields,
      params,
      BusinessAssetGroup
    );
  }

  deleteContainedPages (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_pages',
      params
    );
  }

  getContainedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/contained_pages'
    );
  }

  createContainedPage (fields: Array<string>, params: Object = {}): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_pages',
      fields,
      params,
      BusinessAssetGroup
    );
  }

  deleteContainedPixels (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_pixels',
      params
    );
  }

  getContainedPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/contained_pixels'
    );
  }

  createContainedPixel (fields: Array<string>, params: Object = {}): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_pixels',
      fields,
      params,
      BusinessAssetGroup
    );
  }

  deleteContainedProductCatalogs (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/contained_product_catalogs',
      params
    );
  }

  getContainedProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/contained_product_catalogs'
    );
  }

  createContainedProductCatalog (fields: Array<string>, params: Object = {}): Promise<BusinessAssetGroup> {
    return this.createEdge(
      '/contained_product_catalogs',
      fields,
      params,
      BusinessAssetGroup
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessAssetGroup {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): BusinessAssetGroup {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
