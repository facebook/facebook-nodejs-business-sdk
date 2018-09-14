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
 * BusinessAssetSharingAgreement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAssetSharingAgreement extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      initiator: 'initiator',
      recipient: 'recipient',
      relationship_type: 'relationship_type',
      request_status: 'request_status',
      request_type: 'request_type'
    });
  }

  static get RequestStatus (): Object {
    return Object.freeze({
      approve: 'APPROVE',
      decline: 'DECLINE',
      in_progress: 'IN_PROGRESS',
      expired: 'EXPIRED'
    });
  }

  get (fields, params): BusinessAssetSharingAgreement {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): BusinessAssetSharingAgreement {
    return super.update(
      params
    );
  }
}
