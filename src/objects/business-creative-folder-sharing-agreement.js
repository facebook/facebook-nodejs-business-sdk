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
 * BusinessCreativeFolderSharingAgreement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessCreativeFolderSharingAgreement extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      folder_id: 'folder_id',
      id: 'id',
      requesting_business: 'requesting_business',
      status: 'status',
    });
  }

  static get RequestStatus (): Object {
    return Object.freeze({
      approve: 'APPROVE',
      decline: 'DECLINE',
      expired: 'EXPIRED',
      in_progress: 'IN_PROGRESS',
      pending: 'PENDING',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessCreativeFolderSharingAgreement {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
