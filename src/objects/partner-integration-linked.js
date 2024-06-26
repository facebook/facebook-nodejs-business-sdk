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
 * PartnerIntegrationLinked
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerIntegrationLinked extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ads_pixel: 'ads_pixel',
      application: 'application',
      completed_integration_types: 'completed_integration_types',
      external_business_connection_id: 'external_business_connection_id',
      external_id: 'external_id',
      has_oauth_token: 'has_oauth_token',
      id: 'id',
      mbe_app_id: 'mbe_app_id',
      mbe_asset_id: 'mbe_asset_id',
      mbe_external_business_id: 'mbe_external_business_id',
      name: 'name',
      offline_conversion_data_set: 'offline_conversion_data_set',
      page: 'page',
      partner: 'partner',
      product_catalog: 'product_catalog',
      setup_status: 'setup_status',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): PartnerIntegrationLinked {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
