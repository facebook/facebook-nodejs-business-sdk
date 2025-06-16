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
 * CopyrightOwnershipTransfer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightOwnershipTransfer extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      receiving_rights_holder: 'receiving_rights_holder',
      sending_rights_holder: 'sending_rights_holder',
      status: 'status',
      transfer_territories: 'transfer_territories',
      transfer_time: 'transfer_time',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): CopyrightOwnershipTransfer {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
