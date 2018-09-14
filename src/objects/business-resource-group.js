/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AssignedUser from './assigned-user';
import AdAccount from './ad-account';
import OfflineConversionDataSet from './offline-conversion-data-set';
import Page from './page';
import AdsPixel from './ads-pixel';

/**
 * BusinessResourceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessResourceGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name: 'name'
    });
  }

  getAssignedUsers (fields, params, fetchFirstPage = true): AssignedUser {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  getContainedAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/contained_adaccounts'
    );
  }

  getContainedOfflineConversionDataSets (fields, params, fetchFirstPage = true): OfflineConversionDataSet {
    return this.getEdge(
      OfflineConversionDataSet,
      fields,
      params,
      fetchFirstPage,
      '/contained_offline_conversion_data_sets'
    );
  }

  getContainedPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/contained_pages'
    );
  }

  getContainedPixels (fields, params, fetchFirstPage = true): AdsPixel {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/contained_pixels'
    );
  }

  get (fields, params): BusinessResourceGroup {
    return this.read(
      fields,
      params
    );
  }
}
