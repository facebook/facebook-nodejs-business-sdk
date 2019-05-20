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
 * AdCreativeDegreesOfFreedomSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeDegreesOfFreedomSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      degrees_of_freedom_type: 'degrees_of_freedom_type',
    });
  }

}
