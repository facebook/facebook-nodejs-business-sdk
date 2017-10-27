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
 * RoasCohortsData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RoasCohortsData extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      cohorts_end: 'cohorts_end',
      cohorts_start: 'cohorts_start',
      installs: 'installs',
      revenue_cohorts: 'revenue_cohorts',
      spend: 'spend'
    });
  }
}
