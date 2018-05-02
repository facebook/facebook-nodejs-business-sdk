/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * PageAdminNote
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAdminNote extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      body: 'body',
      from: 'from',
      id: 'id',
      user: 'user'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): PageAdminNote {
    return this.read(
      fields,
      params
    );
  }
}
