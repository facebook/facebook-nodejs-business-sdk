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
 * ALMGuidance
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ALMGuidance extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_account_id: 'ad_account_id',
      guidances: 'guidances',
      opportunity_score: 'opportunity_score',
      parent_advertiser_id: 'parent_advertiser_id',
      parent_advertiser_name: 'parent_advertiser_name',
    });
  }

}
