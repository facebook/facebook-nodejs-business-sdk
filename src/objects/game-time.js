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
 * GameTime
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GameTime extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      owner: 'owner',
      redeemed_time: 'redeemed_time',
      total_time: 'total_time',
      id: 'id'
    });
  }

  static get Action (): Object {
    return Object.freeze({
      start: 'START',
      heartbeat: 'HEARTBEAT',
      end: 'END'
    });
  }

  get (fields, params): GameTime {
    return this.read(
      fields,
      params
    );
  }
}
