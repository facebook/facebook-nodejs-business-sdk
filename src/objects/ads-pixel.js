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
import CustomAudience from './custom-audience';
import AdAccount from './ad-account';
import Business from './business';
import AdsPixelStatsResult from './ads-pixel-stats-result';

/**
 * AdsPixel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_proxy: 'can_proxy',
      code: 'code',
      creation_time: 'creation_time',
      creator: 'creator',
      id: 'id',
      is_created_by_business: 'is_created_by_business',
      last_fired_time: 'last_fired_time',
      name: 'name',
      owner_ad_account: 'owner_ad_account',
      owner_business: 'owner_business'
    });
  }

  getAudiences (fields, params, fetchFirstPage = true): CustomAudience {
    return this.getEdge(
      CustomAudience,
      fields,
      params,
      fetchFirstPage,
      '/audiences'
    );
  }

  deleteSharedAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/shared_accounts',
      params
    );
  }

  getSharedAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/shared_accounts'
    );
  }

  createSharedAccount (fields, params): AbstractObject {
    return this.createEdge(
      '/shared_accounts',
      fields,
      params

    );
  }

  getSharedAgencies (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/shared_agencies'
    );
  }

  getStats (fields, params, fetchFirstPage = true): AdsPixelStatsResult {
    return this.getEdge(
      AdsPixelStatsResult,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  get (fields, params): AdsPixel {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdsPixel {
    return super.update(
      params
    );
  }
}
