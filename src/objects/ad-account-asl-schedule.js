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
 * AdAccountASLSchedule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountASLSchedule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account: 'ad_account',
      id: 'id',
      spend_cap: 'spend_cap',
      temporary_value: 'temporary_value',
      time_created: 'time_created',
      time_updated: 'time_updated'
    });
  }

  get (fields, params): AdAccountASLSchedule {
    return this.read(
      fields,
      params
    );
  }
}
