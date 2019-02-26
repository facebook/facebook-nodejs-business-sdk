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
 * BusinessAgreement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAgreement extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      request_status: 'request_status'
    });
  }

  static get RequestStatus (): Object {
    return Object.freeze({
      approve: 'APPROVE',
      decline: 'DECLINE',
      expired: 'EXPIRED',
      in_progress: 'IN_PROGRESS'
    });
  }

  get (fields, params): BusinessAgreement {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): BusinessAgreement {
    return super.update(
      params
    );
  }
}
