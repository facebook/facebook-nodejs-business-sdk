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

/**
 * BusinessAgreement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAgreement extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      request_status: 'request_status',
    });
  }

  static get RequestStatus (): Object {
    return Object.freeze({
      approve: 'APPROVE',
      canceled: 'CANCELED',
      decline: 'DECLINE',
      expired: 'EXPIRED',
      in_progress: 'IN_PROGRESS',
      mma_direct_assets_approved: 'MMA_DIRECT_ASSETS_APPROVED',
      mma_direct_assets_declined: 'MMA_DIRECT_ASSETS_DECLINED',
      mma_direct_assets_expired: 'MMA_DIRECT_ASSETS_EXPIRED',
      mma_direct_assets_pending: 'MMA_DIRECT_ASSETS_PENDING',
      pending: 'PENDING',
      pending_email_verification: 'PENDING_EMAIL_VERIFICATION',
      pending_integrity_review: 'PENDING_INTEGRITY_REVIEW',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessAgreement {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): BusinessAgreement {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
