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
 * AdCreativeOptimizationSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeOptimizationSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      bodies: 'bodies',
      descriptions: 'descriptions',
      titles: 'titles',
    });
  }

}
