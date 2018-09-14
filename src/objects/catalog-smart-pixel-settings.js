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
 * CatalogSmartPixelSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogSmartPixelSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      catalog: 'catalog',
      cbb_custom_override_filters: 'cbb_custom_override_filters',
      cbb_default_filter: 'cbb_default_filter',
      cbb_override_type_field_mapping: 'cbb_override_type_field_mapping',
      defaults: 'defaults',
      filters: 'filters',
      id: 'id',
      is_cbb_enabled: 'is_cbb_enabled',
      is_create_enabled: 'is_create_enabled',
      is_delete_enabled: 'is_delete_enabled',
      is_update_enabled: 'is_update_enabled',
      pixel: 'pixel',
      property_filter: 'property_filter',
      trusted_domains: 'trusted_domains'
    });
  }

  get (fields, params): CatalogSmartPixelSettings {
    return this.read(
      fields,
      params
    );
  }
}
