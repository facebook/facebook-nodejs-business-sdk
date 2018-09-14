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
 * GamesStat
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GamesStat extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      count: 'count',
      stat_name: 'stat_name',
      timestamp: 'timestamp',
      id: 'id'
    });
  }

  get (fields, params): GamesStat {
    return this.read(
      fields,
      params
    );
  }
}
