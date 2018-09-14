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
 * AdAccountPlacementUsage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPlacementUsage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adset_id: 'adset_id',
      placements: 'placements',
      id: 'id'
    });
  }

  get (fields, params): AdAccountPlacementUsage {
    return this.read(
      fields,
      params
    );
  }
}
