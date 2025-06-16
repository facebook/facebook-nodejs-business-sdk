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
 * AdCampaignGroupAgencyFeeConfigForApi
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupAgencyFeeConfigForApi extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      agency_fee_pct: 'agency_fee_pct',
      is_agency_fee_disabled: 'is_agency_fee_disabled',
      is_default_agency_fee: 'is_default_agency_fee',
    });
  }

}
