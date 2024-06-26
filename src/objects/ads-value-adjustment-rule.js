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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';

/**
 * AdsValueAdjustmentRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsValueAdjustmentRule extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      base_value: 'base_value',
      id: 'id',
    });
  }


  getCriterias (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/criterias'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdsValueAdjustmentRule {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
