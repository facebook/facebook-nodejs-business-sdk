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
 * BusinessTag
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessTag extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      name: 'name',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): BusinessTag {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
