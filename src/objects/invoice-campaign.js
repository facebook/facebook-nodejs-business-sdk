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
 * InvoiceCampaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InvoiceCampaign extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_account_id: 'ad_account_id',
      billed_amount_details: 'billed_amount_details',
      campaign_id: 'campaign_id',
      campaign_name: 'campaign_name',
      clicks: 'clicks',
      conversions: 'conversions',
      description: 'description',
      impressions: 'impressions',
      tags: 'tags',
    });
  }

}
