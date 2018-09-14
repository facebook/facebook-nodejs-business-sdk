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
 * AudienceSharingAccountValid
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudienceSharingAccountValid extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      account_type: 'account_type',
      business_id: 'business_id',
      business_name: 'business_name',
      sharing_agreement_status: 'sharing_agreement_status',
      id: 'id'
    });
  }

  get (fields, params): AudienceSharingAccountValid {
    return this.read(
      fields,
      params
    );
  }
}
