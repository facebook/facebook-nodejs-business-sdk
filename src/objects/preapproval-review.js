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
 * PreapprovalReview
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PreapprovalReview extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      comp_type: 'comp_type',
      crow_component_id: 'crow_component_id',
      is_human_reviewed: 'is_human_reviewed',
      is_reviewed: 'is_reviewed',
      policy_info: 'policy_info',
    });
  }

}
