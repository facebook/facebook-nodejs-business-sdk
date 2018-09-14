/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * ExternalMerchantSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExternalMerchantSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      connect_woo: 'connect_woo',
      external_platform: 'external_platform',
      id: 'id'
    });
  }

  createLogEvent (fields, params): AbstractObject {
    return this.createEdge(
      '/log_events',
      fields,
      params

    );
  }

  get (fields, params): ExternalMerchantSettings {
    return this.read(
      fields,
      params
    );
  }
}
