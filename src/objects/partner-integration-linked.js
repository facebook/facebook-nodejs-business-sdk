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
 * PartnerIntegrationLinked
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerIntegrationLinked extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ads_pixel: 'ads_pixel',
      application: 'application',
      external_id: 'external_id',
      has_oauth_token: 'has_oauth_token',
      id: 'id',
      name: 'name',
      offline_conversion_data_set: 'offline_conversion_data_set',
      partner: 'partner',
      partner_profile: 'partner_profile',
      product_catalog: 'product_catalog',
      setup_status: 'setup_status'
    });
  }

  get (fields, params): PartnerIntegrationLinked {
    return this.read(
      fields,
      params
    );
  }
}
