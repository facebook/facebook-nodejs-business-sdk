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
 * CatalogWebsiteOnboardingSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogWebsiteOnboardingSettings extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      quality_band: 'quality_band',
      status: 'status',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): CatalogWebsiteOnboardingSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
