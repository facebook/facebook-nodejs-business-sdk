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
 * AdAccountAdVolume
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAdVolume extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      actor_id: 'actor_id',
      ads_running_or_in_review_count: 'ads_running_or_in_review_count',
      current_account_ads_running_or_in_review_count: 'current_account_ads_running_or_in_review_count',
    });
  }

}
