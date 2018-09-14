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
 * AtlasNotification
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AtlasNotification extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      created_by: 'created_by',
      created_date: 'created_date',
      created_time: 'created_time',
      cumulative_edited_date: 'cumulative_edited_date',
      id: 'id',
      is_unread: 'is_unread',
      last_modified_by: 'last_modified_by',
      last_modified_date: 'last_modified_date',
      last_modified_time: 'last_modified_time',
      object: 'object',
      subject: 'subject',
      type: 'type',
      version: 'version'
    });
  }

  get (fields, params): AtlasNotification {
    return this.read(
      fields,
      params
    );
  }
}
