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
 * GameItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GameItem extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      count: 'count',
      created: 'created',
      ext_id: 'ext_id',
      id: 'id',
      item_def: 'item_def',
      owner: 'owner',
      status: 'status',
      updated: 'updated'
    });
  }

  static get Action (): Object {
    return Object.freeze({
      mark: 'MARK',
      consume: 'CONSUME',
      drop: 'DROP'
    });
  }
  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      deleted: 'DELETED',
      traded: 'TRADED',
      marked: 'MARKED',
      consumed: 'CONSUMED'
    });
  }

  get (fields, params): GameItem {
    return this.read(
      fields,
      params
    );
  }
}
