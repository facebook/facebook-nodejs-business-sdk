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
 * VideoCopyrightRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightRule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      condition_groups: 'condition_groups',
      copyrights: 'copyrights',
      created_date: 'created_date',
      creator: 'creator',
      id: 'id',
      is_in_migration: 'is_in_migration',
      name: 'name',
    });
  }


  get (fields, params): VideoCopyrightRule {
    return this.read(
      fields,
      params
    );
  }
}
