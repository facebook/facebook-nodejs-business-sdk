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
 * AppRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      action_type: 'action_type',
      application: 'application',
      created_time: 'created_time',
      data: 'data',
      from: 'from',
      id: 'id',
      message: 'message',
      object: 'object',
      to: 'to',
    });
  }


  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): AppRequest {
    return this.read(
      fields,
      params
    );
  }
}
