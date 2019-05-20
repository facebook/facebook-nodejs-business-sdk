/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

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
      version: 'version',
    });
  }

  static get Status (): Object {
    return Object.freeze({
      capture: 'CAPTURE',
      live: 'LIVE',
      none: 'NONE',
      preview: 'PREVIEW',
      ready: 'READY',
      register: 'REGISTER',
    });
  }

  createTelemetry (fields, params): LiveEncoder {
    return this.createEdge(
      '/telemetry',
      fields,
      params,
      LiveEncoder
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): LiveEncoder {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): LiveEncoder {
    return super.update(
      params
    );
  }
}
