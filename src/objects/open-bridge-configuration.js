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
import AbstractObject from './../abstract-object';

/**
 * OpenBridgeConfiguration
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OpenBridgeConfiguration extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      access_key: 'access_key',
      active: 'active',
      endpoint: 'endpoint',
      fallback_domain: 'fallback_domain',
      fallback_domain_enabled: 'fallback_domain_enabled',
      host_business_id: 'host_business_id',
      host_external_id: 'host_external_id',
      id: 'id',
      pixel_id: 'pixel_id',
    });
  }


  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): OpenBridgeConfiguration {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): OpenBridgeConfiguration {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
