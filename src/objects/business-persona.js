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
 * BusinessPersona
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessPersona extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      created_by: 'created_by',
      created_time: 'created_time',
      email: 'email',
      first_name: 'first_name',
      id: 'id',
      last_name: 'last_name',
      marked_for_removal: 'marked_for_removal',
      name: 'name',
      pending_email: 'pending_email',
      title: 'title',
      updated_by: 'updated_by',
      updated_time: 'updated_time'
    });
  }

  get (fields, params): BusinessPersona {
    return this.read(
      fields,
      params
    );
  }
}
