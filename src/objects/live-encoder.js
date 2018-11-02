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
 * LiveEncoder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveEncoder extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      brand: 'brand',
      creation_time: 'creation_time',
      current_broadcast: 'current_broadcast',
      current_input_stream: 'current_input_stream',
      device_id: 'device_id',
      id: 'id',
      last_heartbeat_time: 'last_heartbeat_time',
      model: 'model',
      name: 'name',
      status: 'status',
      version: 'version'
    });
  }

  get (fields, params): LiveEncoder {
    return this.read(
      fields,
      params
    );
  }
}
