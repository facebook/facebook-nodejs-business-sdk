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
 * CustomAudienceIntegrityFlagsAndAppealStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceIntegrityFlagsAndAppealStatus extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      closeout_time: 'closeout_time',
      flagged_fields: 'flagged_fields',
      latest_appeal_requestor: 'latest_appeal_requestor',
      latest_appeal_time: 'latest_appeal_time',
      restriction_status: 'restriction_status',
    });
  }

}
