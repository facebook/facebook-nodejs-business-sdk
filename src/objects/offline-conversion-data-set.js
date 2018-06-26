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
import Business from './business';

/**
 * OfflineConversionDataSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSet extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      config: 'config',
      creation_time: 'creation_time',
      data_origin: 'data_origin',
      description: 'description',
      duplicate_entries: 'duplicate_entries',
      enable_auto_assign_to_accounts: 'enable_auto_assign_to_accounts',
      event_stats: 'event_stats',
      event_time_max: 'event_time_max',
      event_time_min: 'event_time_min',
      id: 'id',
      is_restricted_use: 'is_restricted_use',
      last_upload_app: 'last_upload_app',
      match_rate_approx: 'match_rate_approx',
      matched_entries: 'matched_entries',
      name: 'name',
      usage: 'usage',
      valid_entries: 'valid_entries'
    });
  }

  static get DataOrigin (): Object {
    return Object.freeze({
      directly_from_people: 'DIRECTLY_FROM_PEOPLE',
      people_and_partners: 'PEOPLE_AND_PARTNERS',
      directly_from_partners: 'DIRECTLY_FROM_PARTNERS',
      none: 'NONE'
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

  createAdAccount (fields, params): AbstractObject {
    return this.createEdge(
      '/adaccounts',
      fields,
      params

    );
  }

  deleteAgencies (params): AbstractObject {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  createAgency (fields, params): Business {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      Business
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

  createUpload (fields, params): AbstractObject {
    return this.createEdge(
      '/uploads',
      fields,
      params

    );
  }

  deleteUserPermissions (params): AbstractObject {
    return super.deleteEdge(
      '/userpermissions',
      params
    );
  }

  createUserPermission (fields, params): AbstractObject {
    return this.createEdge(
      '/userpermissions',
      fields,
      params

    );
  }

  createValidate (fields, params): OfflineConversionDataSet {
    return this.createEdge(
      '/validate',
      fields,
      params,
      OfflineConversionDataSet
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): OfflineConversionDataSet {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): OfflineConversionDataSet {
    return super.update(
      params
    );
  }
}
