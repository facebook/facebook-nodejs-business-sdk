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
 * MessengerPlatformReferral
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerPlatformReferral extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_id: 'ad_id',
      id: 'id',
      ref: 'ref',
      source: 'source',
      type: 'type'
    });
  }

  get (fields, params): MessengerPlatformReferral {
    return this.read(
      fields,
      params
    );
  }
}
