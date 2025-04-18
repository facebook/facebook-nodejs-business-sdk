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
 * AdCreativeRegionalRegulationDisclaimer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeRegionalRegulationDisclaimer extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      australia_finserv: 'australia_finserv',
      india_finserv: 'india_finserv',
      singapore_universal: 'singapore_universal',
      taiwan_finserv: 'taiwan_finserv',
      taiwan_universal: 'taiwan_universal',
    });
  }

}
