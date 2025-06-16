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
 * AdsValueAdjustmentRuleCollection
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsValueAdjustmentRuleCollection extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      is_default_setting: 'is_default_setting',
      name: 'name',
      product_type: 'product_type',
      status: 'status',
    });
  }

  static get ProductType (): Object {
    return Object.freeze({
      audience: 'AUDIENCE',
      leadgen_ads: 'LEADGEN_ADS',
      omni_channel: 'OMNI_CHANNEL',
    });
  }
  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      deleted: 'DELETED',
    });
  }

  createDeleteRuleSet (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdsValueAdjustmentRuleCollection> {
    return this.createEdge(
      '/delete_rule_set',
      fields,
      params,
      AdsValueAdjustmentRuleCollection,
      pathOverride,
    );
  }

  getRules (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/rules'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdsValueAdjustmentRuleCollection {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdsValueAdjustmentRuleCollection {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
