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
      blocked_event_types: 'blocked_event_types',
      blocked_websites: 'blocked_websites',
      browser_agent: 'browser_agent',
      capi_publishing_state: 'capi_publishing_state',
      cloud_provider: 'cloud_provider',
      cloud_region: 'cloud_region',
      destination_id: 'destination_id',
      endpoint: 'endpoint',
      event_enrichment_advertiser_state: 'event_enrichment_advertiser_state',
      event_enrichment_meta_state: 'event_enrichment_meta_state',
      event_enrichment_state: 'event_enrichment_state',
      fallback_domain: 'fallback_domain',
      host_business_id: 'host_business_id',
      id: 'id',
      instance_id: 'instance_id',
      instance_version: 'instance_version',
      is_sgw_instance: 'is_sgw_instance',
      is_sgw_pixel_from_meta_pixel: 'is_sgw_pixel_from_meta_pixel',
      partner_name: 'partner_name',
      pixel_id: 'pixel_id',
      sgw_account_id: 'sgw_account_id',
      sgw_instance_url: 'sgw_instance_url',
      sgw_pixel_id: 'sgw_pixel_id',
    });
  }

  static get CapiPublishingState (): Object {
    return Object.freeze({
      disabled: 'DISABLED',
      enabled: 'ENABLED',
      not_initialized: 'NOT_INITIALIZED',
    });
  }
  static get EventEnrichmentAdvertiserState (): Object {
    return Object.freeze({
      disabled: 'DISABLED',
      enabled: 'ENABLED',
      not_initialized: 'NOT_INITIALIZED',
    });
  }
  static get EventEnrichmentMetaState (): Object {
    return Object.freeze({
      allowed: 'ALLOWED',
      blocked: 'BLOCKED',
      not_initialized: 'NOT_INITIALIZED',
    });
  }
  static get EventEnrichmentState (): Object {
    return Object.freeze({
      no: 'NO',
      not_initialized: 'NOT_INITIALIZED',
      yes: 'YES',
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
