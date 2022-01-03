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
 * DestinationCatalogSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DestinationCatalogSettings extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      generate_items_from_pages: 'generate_items_from_pages',
      id: 'id',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): DestinationCatalogSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
