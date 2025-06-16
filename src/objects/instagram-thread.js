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
 * InstagramThread
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramThread extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      folder: 'folder',
      id: 'id',
      participants: 'participants',
      updated_time: 'updated_time',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): InstagramThread {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
