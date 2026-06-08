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
 * CustomAudienceMatchRateInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceMatchRateInsights extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      email_quality: 'email_quality',
      email_upload_volume_pct: 'email_upload_volume_pct',
      is_eligible: 'is_eligible',
      madid_quality: 'madid_quality',
      madid_upload_volume_pct: 'madid_upload_volume_pct',
      match_rate_score: 'match_rate_score',
      phone_quality: 'phone_quality',
      phone_upload_volume_pct: 'phone_upload_volume_pct',
    });
  }

}
