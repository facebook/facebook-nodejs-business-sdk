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
 * RegionalRegulationIdentities
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RegionalRegulationIdentities extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      australia_finserv_beneficiary: 'australia_finserv_beneficiary',
      australia_finserv_payer: 'australia_finserv_payer',
      taiwan_finserv_beneficiary: 'taiwan_finserv_beneficiary',
      taiwan_finserv_payer: 'taiwan_finserv_payer',
    });
  }

}
