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
 * AdAccountAgencyFeeConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAgencyFeeConfig extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      can_add_agency_fee_to_invoice: 'can_add_agency_fee_to_invoice',
      default_agency_fee_pct: 'default_agency_fee_pct',
      id: 'id',
      is_agency_fee_disabled: 'is_agency_fee_disabled',
      status: 'status',
    });
  }

  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      draft: 'DRAFT',
      unknown: 'UNKNOWN',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): AdAccountAgencyFeeConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
