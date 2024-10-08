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
 * IGUserExportForCAM
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUserExportForCAM extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      email: 'email',
      id: 'id',
      is_paid_partnership_messages_enabled: 'is_paid_partnership_messages_enabled',
      messaging_id: 'messaging_id',
      portfolio_url: 'portfolio_url',
      username: 'username',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): IGUserExportForCAM {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
