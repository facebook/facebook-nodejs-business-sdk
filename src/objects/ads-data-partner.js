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

/**
 * AdsDataPartner
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsDataPartner extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name: 'name',
      rev_share_policies: 'rev_share_policies'
    });
  }

  deleteUsersOfAnyAudience (params): AbstractObject {
    return super.deleteEdge(
      '/usersofanyaudience',
      params
    );
  }

  get (fields, params): AdsDataPartner {
    return this.read(
      fields,
      params
    );
  }
}
