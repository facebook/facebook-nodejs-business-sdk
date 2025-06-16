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
 * InstagramBusinessAsset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramBusinessAsset extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      ig_user_id: 'ig_user_id',
      ig_username: 'ig_username',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): InstagramBusinessAsset {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
