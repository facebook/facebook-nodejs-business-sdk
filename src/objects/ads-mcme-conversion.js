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
 * AdsMcmeConversion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsMcmeConversion extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      creation_time: 'creation_time',
      description: 'description',
      id: 'id',
      is_archived: 'is_archived',
      mcme_conversion_type: 'mcme_conversion_type',
      name: 'name',
      omnichannel_object_id: 'omnichannel_object_id',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AdsMcmeConversion {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
