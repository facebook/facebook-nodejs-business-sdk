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
 * StoreCatalogSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class StoreCatalogSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      page: 'page'
    });
  }

  get (fields, params): StoreCatalogSettings {
    return this.read(
      fields,
      params
    );
  }
}
