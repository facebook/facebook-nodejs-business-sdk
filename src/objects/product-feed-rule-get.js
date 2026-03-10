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

/**
 * ProductFeedRuleGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedRuleGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      attribute: 'attribute',
      id: 'id',
      params: 'params',
      rule_type: 'rule_type',
    });
  }

  static get RuleType (): Object {
    return Object.freeze({
      fallback_rule: 'FALLBACK_RULE',
      letter_case_rule: 'LETTER_CASE_RULE',
      mapping_rule: 'MAPPING_RULE',
      regex_replace_rule: 'REGEX_REPLACE_RULE',
      value_mapping_rule: 'VALUE_MAPPING_RULE',
    });
  }
}
