/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * MHubTermsOfService
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MHubTermsOfService extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      accept_time: 'accept_time',
      id: 'id',
      user: 'user'
    });
  }

  get (fields, params): MHubTermsOfService {
    return this.read(
      fields,
      params
    );
  }
}
