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
 * IntegrityAppealGetAdAppealStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IntegrityAppealGetAdAppealStatus extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_id: 'ad_id',
      appeal_status: 'appeal_status',
    });
  }

}
