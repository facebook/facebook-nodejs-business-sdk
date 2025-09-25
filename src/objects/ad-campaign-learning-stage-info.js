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
 * AdCampaignLearningStageInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignLearningStageInfo extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      attribution_windows: 'attribution_windows',
      conversions: 'conversions',
      dynamic_lp_conversions_threshold: 'dynamic_lp_conversions_threshold',
      dynamic_lp_days_threshold: 'dynamic_lp_days_threshold',
      dynamic_lp_status: 'dynamic_lp_status',
      last_sig_edit_ts: 'last_sig_edit_ts',
      status: 'status',
    });
  }

}
