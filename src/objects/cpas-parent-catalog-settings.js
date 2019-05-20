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
 * CPASParentCatalogSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASParentCatalogSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attribution_windows: 'attribution_windows',
      default_currency: 'default_currency',
      id: 'id',
    });
  }

  static get AttributionWindows (): Object {
    return Object.freeze({
      default: 'DEFAULT',
      x1d_click: 'X1D_CLICK',
      x1d_view: 'X1D_VIEW',
      x28d_click: 'X28D_CLICK',
      x28d_view: 'X28D_VIEW',
      x7d_click: 'X7D_CLICK',
      x7d_view: 'X7D_VIEW',
    });
  }

  get (fields, params): CPASParentCatalogSettings {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): CPASParentCatalogSettings {
    return super.update(
      params
    );
  }
}
