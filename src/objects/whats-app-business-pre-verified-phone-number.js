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
 * WhatsAppBusinessPreVerifiedPhoneNumber
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessPreVerifiedPhoneNumber extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      code_verification_status: 'code_verification_status',
      id: 'id',
      phone_number: 'phone_number',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): WhatsAppBusinessPreVerifiedPhoneNumber {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
