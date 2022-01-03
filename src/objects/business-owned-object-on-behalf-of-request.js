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
 * BusinessOwnedObjectOnBehalfOfRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessOwnedObjectOnBehalfOfRequest extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      business_owned_object: 'business_owned_object',
      id: 'id',
      receiving_business: 'receiving_business',
      requesting_business: 'requesting_business',
      status: 'status',
    });
  }

  static get Status (): Object {
    return Object.freeze({
      approve: 'APPROVE',
      decline: 'DECLINE',
      expired: 'EXPIRED',
      in_progress: 'IN_PROGRESS',
      pending: 'PENDING',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessOwnedObjectOnBehalfOfRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
