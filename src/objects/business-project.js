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
import Page from './page';
import ProductCatalog from './product-catalog';

/**
 * BusinessProject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessProject extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      created_time: 'created_time',
      creator: 'creator',
      id: 'id',
      name: 'name'
    });
  }

  deleteAdAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/adaccounts',
      params
    );
  }

  getAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }

  createAdAccount (fields, params): BusinessProject {
    return this.createEdge(
      '/adaccounts',
      fields,
      params,
      BusinessProject
    );
  }

  deleteApps (params): AbstractObject {
    return super.deleteEdge(
      '/apps',
      params
    );
  }

  getApps (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/apps'
    );
  }

  createApp (fields, params): BusinessProject {
    return this.createEdge(
      '/apps',
      fields,
      params,
      BusinessProject
    );
  }

  deleteAssets (params): AbstractObject {
    return super.deleteEdge(
      '/assets',
      params
    );
  }

  createAsset (fields, params): BusinessProject {
    return this.createEdge(
      '/assets',
      fields,
      params,
      BusinessProject
    );
  }

  deletePages (params): AbstractObject {
    return super.deleteEdge(
      '/pages',
      params
    );
  }

  getPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/pages'
    );
  }

  createPage (fields, params): BusinessProject {
    return this.createEdge(
      '/pages',
      fields,
      params,
      BusinessProject
    );
  }

  deleteProductCatalogs (params): AbstractObject {
    return super.deleteEdge(
      '/product_catalogs',
      params
    );
  }

  getProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  createProductCatalog (fields, params): BusinessProject {
    return this.createEdge(
      '/product_catalogs',
      fields,
      params,
      BusinessProject
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): BusinessProject {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): BusinessProject {
    return super.update(
      params
    );
  }
}
