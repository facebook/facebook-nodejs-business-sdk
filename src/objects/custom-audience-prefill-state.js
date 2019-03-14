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
 * CustomAudiencePrefillState
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudiencePrefillState extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      num_added: 'num_added',
      status: 'status'
    });
  }
}
