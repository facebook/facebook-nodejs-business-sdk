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
 * MessengerBusinessTemplate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerBusinessTemplate extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      category: 'category',
      components: 'components',
      creation_time: 'creation_time',
      id: 'id',
      language: 'language',
      language_count: 'language_count',
      last_updated_time: 'last_updated_time',
      library_template_name: 'library_template_name',
      name: 'name',
      rejected_reason: 'rejected_reason',
      status: 'status',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): MessengerBusinessTemplate {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
