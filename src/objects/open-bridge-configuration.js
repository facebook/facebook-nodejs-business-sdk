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
      active: 'active',
      cloud_provider: 'cloud_provider',
      cloud_region: 'cloud_region',
      destination_id: 'destination_id',
      endpoint: 'endpoint',
      fallback_domain: 'fallback_domain',
      fallback_domain_enabled: 'fallback_domain_enabled',
      first_party_domain: 'first_party_domain',
      host_business_id: 'host_business_id',
      host_external_id: 'host_external_id',
      id: 'id',
      instance_id: 'instance_id',
      instance_version: 'instance_version',
      is_sgw_instance: 'is_sgw_instance',
      partner_name: 'partner_name',
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
