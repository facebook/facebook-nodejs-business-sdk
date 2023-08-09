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
 * WhatsAppBusinessPreVerifiedPhoneNumber
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessPreVerifiedPhoneNumber extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      code_verification_status: 'code_verification_status',
      code_verification_time: 'code_verification_time',
      id: 'id',
      phone_number: 'phone_number',
      verification_expiry_time: 'verification_expiry_time',
    });
  }

  static get CodeVerificationStatus (): Object {
    return Object.freeze({
      expired: 'EXPIRED',
      not_verified: 'NOT_VERIFIED',
      verified: 'VERIFIED',
    });
  }

  createRequestCode (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/request_code',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  createVerifyCode (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/verify_code',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): WhatsAppBusinessPreVerifiedPhoneNumber {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
