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
 * AdCampaignLearningStageInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignLearningStageInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attribution_windows: 'attribution_windows',
      conversions: 'conversions',
      exit_reason: 'exit_reason',
      last_sig_edit_ts: 'last_sig_edit_ts',
      status: 'status',
      types: 'types',
      id: 'id'
    });
  }

  get (fields, params): AdCampaignLearningStageInfo {
    return this.read(
      fields,
      params
    );
  }
}
