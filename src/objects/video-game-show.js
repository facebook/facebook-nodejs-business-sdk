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
 * VideoGameShow
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoGameShow extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      end_time: 'end_time',
      game_status: 'game_status',
      game_type: 'game_type',
      id: 'id',
      start_time: 'start_time',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): VideoGameShow {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
