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
 * ShadowIGUserPartnershipAdsMediaErrors
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGUserPartnershipAdsMediaErrors extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_code: 'ad_code',
      error_codes: 'error_codes',
      errors: 'errors',
      permalink: 'permalink',
    });
  }

}
