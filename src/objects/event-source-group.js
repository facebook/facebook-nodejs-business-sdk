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
      name: 'name',
    });
  }

  static get Tasks (): Object {
    return Object.freeze({
      analyze: 'ANALYZE',
      analyze_with_limitations: 'ANALYZE_WITH_LIMITATIONS',
    });
  }

  getSharedAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/shared_accounts'
    );
  }

  createSharedAccount (fields: Array<string>, params: Object = {}): EventSourceGroup {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/shared_accounts',
      fields,
      params,
      EventSourceGroup
    );
  }

  deleteUserPermissions (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/userpermissions',
      params
    );
  }

  getUserPermissions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/userpermissions'
    );
  }

  createUserPermission (fields: Array<string>, params: Object = {}): EventSourceGroup {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/userpermissions',
      fields,
      params,
      EventSourceGroup
    );
  }

  
  get (fields: Array<string>, params: Object = {}): EventSourceGroup {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): EventSourceGroup {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
