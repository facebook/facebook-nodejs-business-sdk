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
 * AdAccountPrepayDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPrepayDetails extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      default_funding_amount: 'default_funding_amount',
      max_acceptable_amount: 'max_acceptable_amount',
      min_acceptable_amount: 'min_acceptable_amount',
      should_collect_business_details: 'should_collect_business_details',
      id: 'id'
    });
  }

  get (fields, params): AdAccountPrepayDetails {
    return this.read(
      fields,
      params
    );
  }
}
