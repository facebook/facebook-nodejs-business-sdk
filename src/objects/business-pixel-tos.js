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
 * BusinessPixelTOS
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessPixelTOS extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      accept_time: 'accept_time',
      id: 'id',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): BusinessPixelTOS {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
