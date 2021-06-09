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
 * PageAdminNote
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAdminNote extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      body: 'body',
      from: 'from',
      id: 'id',
      note_label: 'note_label',
      user: 'user',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): PageAdminNote {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
