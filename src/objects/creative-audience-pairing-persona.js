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
 * CreativeAudiencePairingPersona
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreativeAudiencePairingPersona extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      age_max: 'age_max',
      age_min: 'age_min',
      genders: 'genders',
    });
  }

}
