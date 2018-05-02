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
 * ProductsQualityIssue
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductsQualityIssue extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      count: 'count',
      description: 'description',
      issue_type: 'issue_type',
      property_names: 'property_names',
      samples: 'samples',
      summary: 'summary'
    });
  }
}
