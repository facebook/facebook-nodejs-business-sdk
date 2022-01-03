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
 * DeliveryCheckExtraInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DeliveryCheckExtraInfo extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      adgroup_ids: 'adgroup_ids',
      campaign_ids: 'campaign_ids',
      countries: 'countries',
    });
  }

}
