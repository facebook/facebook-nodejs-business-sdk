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
 * MusicWorkCopyright
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MusicWorkCopyright extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      available_ui_actions: 'available_ui_actions',
      claim_status: 'claim_status',
      creation_time: 'creation_time',
      displayed_fb_matches_count: 'displayed_fb_matches_count',
      displayed_ig_matches_count: 'displayed_ig_matches_count',
      displayed_matches_count: 'displayed_matches_count',
      has_rev_share_eligible_isrcs: 'has_rev_share_eligible_isrcs',
      id: 'id',
      is_linking_required_to_monetize_for_manual_claim: 'is_linking_required_to_monetize_for_manual_claim',
      match_rule: 'match_rule',
      status: 'status',
      tags: 'tags',
      update_time: 'update_time',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): MusicWorkCopyright {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
