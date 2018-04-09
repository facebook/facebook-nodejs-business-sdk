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
 * AdStudyCell
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudyCell extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_entities_count: 'ad_entities_count',
      control_percentage: 'control_percentage',
      id: 'id',
      name: 'name',
      treatment_percentage: 'treatment_percentage'
    });
  }

  get (fields, params): AdStudyCell {
    return this.read(
      fields,
      params
    );
  }
}
