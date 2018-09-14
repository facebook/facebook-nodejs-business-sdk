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
 * LeadGenDirectCRMIntegrationThirdPartyApp
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenDirectCRMIntegrationThirdPartyApp extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      application: 'application',
      country_code: 'country_code',
      id: 'id',
      integration_type: 'integration_type',
      page: 'page'
    });
  }

  get (fields, params): LeadGenDirectCRMIntegrationThirdPartyApp {
    return this.read(
      fields,
      params
    );
  }
}
