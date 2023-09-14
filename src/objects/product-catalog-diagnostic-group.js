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
 * ProductCatalogDiagnosticGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogDiagnosticGroup extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      affected_channels: 'affected_channels',
      affected_entity: 'affected_entity',
      affected_features: 'affected_features',
      diagnostics: 'diagnostics',
      error_code: 'error_code',
      number_of_affected_entities: 'number_of_affected_entities',
      number_of_affected_items: 'number_of_affected_items',
      severity: 'severity',
      subtitle: 'subtitle',
      title: 'title',
      type: 'type',
    });
  }

  static get AffectedChannels (): Object {
    return Object.freeze({
      business_inbox_in_messenger: 'business_inbox_in_messenger',
      shops: 'shops',
      test_capability: 'test_capability',
      universal_checkout: 'universal_checkout',
      us_marketplace: 'us_marketplace',
    });
  }
  static get AffectedEntity (): Object {
    return Object.freeze({
      product_catalog: 'product_catalog',
      product_item: 'product_item',
      product_set: 'product_set',
    });
  }
  static get AffectedFeatures (): Object {
    return Object.freeze({
      augmented_reality: 'augmented_reality',
      checkout: 'checkout',
    });
  }
  static get Severity (): Object {
    return Object.freeze({
      must_fix: 'MUST_FIX',
      opportunity: 'OPPORTUNITY',
    });
  }
  static get Type (): Object {
    return Object.freeze({
      ar_visibility_issues: 'AR_VISIBILITY_ISSUES',
      attributes_invalid: 'ATTRIBUTES_INVALID',
      attributes_missing: 'ATTRIBUTES_MISSING',
      category: 'CATEGORY',
      checkout: 'CHECKOUT',
      image_quality: 'IMAGE_QUALITY',
      low_quality_title_and_description: 'LOW_QUALITY_TITLE_AND_DESCRIPTION',
      policy_violation: 'POLICY_VIOLATION',
      shops_visibility_issues: 'SHOPS_VISIBILITY_ISSUES',
    });
  }
  static get AffectedEntities (): Object {
    return Object.freeze({
      product_catalog: 'product_catalog',
      product_item: 'product_item',
      product_set: 'product_set',
    });
  }
  static get Severities (): Object {
    return Object.freeze({
      must_fix: 'MUST_FIX',
      opportunity: 'OPPORTUNITY',
    });
  }
  static get Types (): Object {
    return Object.freeze({
      ar_visibility_issues: 'AR_VISIBILITY_ISSUES',
      attributes_invalid: 'ATTRIBUTES_INVALID',
      attributes_missing: 'ATTRIBUTES_MISSING',
      category: 'CATEGORY',
      checkout: 'CHECKOUT',
      image_quality: 'IMAGE_QUALITY',
      low_quality_title_and_description: 'LOW_QUALITY_TITLE_AND_DESCRIPTION',
      policy_violation: 'POLICY_VIOLATION',
      shops_visibility_issues: 'SHOPS_VISIBILITY_ISSUES',
    });
  }
}
