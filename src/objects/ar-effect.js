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
 * AREffect
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AREffect extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      creation_time: 'creation_time',
      id: 'id',
      last_modified_time: 'last_modified_time',
      name: 'name',
      status: 'status',
      surfaces: 'surfaces',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AREffect {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
