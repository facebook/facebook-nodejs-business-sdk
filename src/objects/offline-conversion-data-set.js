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

/**
 * OfflineConversionDataSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSet extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attribute_stats: 'attribute_stats',
      business: 'business',
      config: 'config',
      creation_time: 'creation_time',
      description: 'description',
      duplicate_entries: 'duplicate_entries',
      enable_auto_assign_to_accounts: 'enable_auto_assign_to_accounts',
      event_stats: 'event_stats',
      event_time_max: 'event_time_max',
      event_time_min: 'event_time_min',
      id: 'id',
      is_restricted_use: 'is_restricted_use',
      last_upload_app: 'last_upload_app',
      matched_entries: 'matched_entries',
      matched_unique_users: 'matched_unique_users',
      name: 'name',
      usage: 'usage',
      valid_entries: 'valid_entries'
    });
  }

  getActivities (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/activities'
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

  createAdAccount (fields, params): AbstractObject {
    return this.createEdge(
      '/adaccounts',
      fields,
      params
    );
  }

  createEvent (fields, params): AbstractObject {
    return this.createEdge(
      '/events',
      fields,
      params
    );
  }

  getStats (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  getUploads (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/uploads'
    );
  }

  get (fields, params): OfflineConversionDataSet {
    return this.read(
      fields,
      params
    );
  }
}
