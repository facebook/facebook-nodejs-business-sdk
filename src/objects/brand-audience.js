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
 * BrandAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandAudience extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account: 'account',
      delivery_targeting: 'delivery_targeting',
      description: 'description',
      id: 'id',
      name: 'name',
      sentence_lines: 'sentence_lines',
      status: 'status',
      targeting: 'targeting',
      time_created: 'time_created',
      time_updated: 'time_updated',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): BrandAudience {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
