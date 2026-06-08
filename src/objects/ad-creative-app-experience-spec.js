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
 * AdCreativeAppExperienceSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeAppExperienceSpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      reveal_details: 'reveal_details',
      show_spotlights: 'show_spotlights',
      website_summary: 'website_summary',
    });
  }

}
