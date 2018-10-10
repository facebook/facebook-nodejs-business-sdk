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
 * EventSourceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventSourceGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      event_sources: 'event_sources',
      id: 'id',
      name: 'name'
    });
  }

  static get Role (): Object {
    return Object.freeze({
      analyst: 'ANALYST',
      limited_analyst: 'LIMITED_ANALYST'
    });
  }

  getShareDAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/shared_accounts'
    );
  }

  createShareDAccount (fields, params): EventSourceGroup {
    return this.createEdge(
      '/shared_accounts',
      fields,
      params,
      EventSourceGroup
    );
  }

  deleteUserPermissions (params): AbstractObject {
    return super.deleteEdge(
      '/userpermissions',
      params
    );
  }

  getUserPermissions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/userpermissions'
    );
  }

  createUserPermission (fields, params): EventSourceGroup {
    return this.createEdge(
      '/userpermissions',
      fields,
      params,
      EventSourceGroup
    );
  }

  get (fields, params): EventSourceGroup {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): EventSourceGroup {
    return super.update(
      params
    );
  }
}
