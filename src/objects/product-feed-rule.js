/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * ProductFeedRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedRule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attribute: 'attribute',
      id: 'id',
      params: 'params',
      rule_type: 'rule_type'
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

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): ProductFeedRule {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): ProductFeedRule {
    return super.update(
      params
    );
  }
}
