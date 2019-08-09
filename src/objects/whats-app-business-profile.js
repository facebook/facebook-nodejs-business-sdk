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
 * WhatsAppBusinessProfile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessProfile extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name_verification: 'name_verification',
      verified_name: 'verified_name',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): WhatsAppBusinessProfile {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
