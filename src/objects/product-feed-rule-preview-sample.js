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
 * ProductFeedRulePreviewSample
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedRulePreviewSample extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      properties_after: 'properties_after',
      properties_before: 'properties_before',
      id: 'id'
    });
  }

  static get RuleType (): Object {
    return Object.freeze({
      mapping_rule: 'mapping_rule',
      value_mapping_rule: 'value_mapping_rule',
      letter_case_rule: 'letter_case_rule',
      fallback_rule: 'fallback_rule',
      regex_replace_rule: 'regex_replace_rule'
    });
  }

  get (fields, params): ProductFeedRulePreviewSample {
    return this.read(
      fields,
      params
    );
  }
}
