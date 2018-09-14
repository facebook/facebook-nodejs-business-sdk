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
 * AdAccountContextualTargeting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountContextualTargeting extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      enabled_in_ui: 'enabled_in_ui',
      id: 'id',
      key: 'key',
      name: 'name',
      parent: 'parent',
      path: 'path',
      type: 'type'
    });
  }

  get (fields, params): AdAccountContextualTargeting {
    return this.read(
      fields,
      params
    );
  }
}
