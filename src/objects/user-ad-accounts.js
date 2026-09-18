 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import UserAdAccountsGet from './user-ad-accounts-get';

/**
 * UserAdAccounts
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserAdAccounts extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genget (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserAdAccountsGet,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }
}
