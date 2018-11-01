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
 * FlightCatalogSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FlightCatalogSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      generate_items_from_events: 'generate_items_from_events',
      id: 'id'
    });
  }

  get (fields, params): FlightCatalogSettings {
    return this.read(
      fields,
      params
    );
  }
}
