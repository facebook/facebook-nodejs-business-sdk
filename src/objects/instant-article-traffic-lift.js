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
 * InstantArticleTrafficLift
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstantArticleTrafficLift extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      android_confidence: 'android_confidence',
      android_lift: 'android_lift',
      iphone_confidence: 'iphone_confidence',
      iphone_lift: 'iphone_lift',
      overall_confidence: 'overall_confidence',
      overall_lift: 'overall_lift',
      id: 'id'
    });
  }

  get (fields, params): InstantArticleTrafficLift {
    return this.read(
      fields,
      params
    );
  }
}
