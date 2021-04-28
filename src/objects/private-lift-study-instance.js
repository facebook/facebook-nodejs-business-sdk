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
 * PrivateLiftStudyInstance
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PrivateLiftStudyInstance extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      breakdown_key: 'breakdown_key',
      created_time: 'created_time',
      id: 'id',
      latest_status_update_time: 'latest_status_update_time',
      server_ips: 'server_ips',
      status: 'status',
    });
  }

  static get Operation (): Object {
    return Object.freeze({
      aggregate: 'AGGREGATE',
      compute: 'COMPUTE',
      id_match: 'ID_MATCH',
      none: 'NONE',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): PrivateLiftStudyInstance {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): PrivateLiftStudyInstance {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
