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
 * ApplicationThirdPartyPayload
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ApplicationThirdPartyPayload extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      campaign: 'campaign',
      id: 'id',
      last_update_time: 'last_update_time',
      metadata: 'metadata'
    });
  }

  get (fields, params): ApplicationThirdPartyPayload {
    return this.read(
      fields,
      params
    );
  }
}
