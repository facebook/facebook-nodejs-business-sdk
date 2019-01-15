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
 * BusinessOwnedObjectOnBehalfOfRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessOwnedObjectOnBehalfOfRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business_owned_object: 'business_owned_object',
      id: 'id',
      receiving_business: 'receiving_business',
      requesting_business: 'requesting_business',
      status: 'status'
    });
  }

  static get Status (): Object {
    return Object.freeze({
      approve: 'APPROVE',
      decline: 'DECLINE',
      in_progress: 'IN_PROGRESS',
      expired: 'EXPIRED'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): BusinessOwnedObjectOnBehalfOfRequest {
    return this.read(
      fields,
      params
    );
  }
}
