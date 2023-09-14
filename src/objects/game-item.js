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
 * GameItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GameItem extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      count: 'count',
      created: 'created',
      ext_id: 'ext_id',
      id: 'id',
      item_def: 'item_def',
      owner: 'owner',
      status: 'status',
      updated: 'updated',
    });
  }

  static get Action (): Object {
    return Object.freeze({
      consume: 'CONSUME',
      drop: 'DROP',
      mark: 'MARK',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): GameItem {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
