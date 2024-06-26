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
 * SalesRightsInventoryManagement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SalesRightsInventoryManagement extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      available_impressions: 'available_impressions',
      booked_impressions: 'booked_impressions',
      overbooked_impressions: 'overbooked_impressions',
      supported_countries: 'supported_countries',
      total_impressions: 'total_impressions',
      unavailable_impressions: 'unavailable_impressions',
      warning_messages: 'warning_messages',
    });
  }

}
