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
 * ThirdPartyPartnerViewabilityRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerViewabilityRequest extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      created_time: 'created_time',
      description: 'description',
      ds: 'ds',
      hour: 'hour',
      id: 'id',
      metric: 'metric',
      modified_time: 'modified_time',
      owner_instance_id: 'owner_instance_id',
      platform: 'platform',
      status: 'status',
      total_file_count: 'total_file_count',
    });
  }

  static get Metric (): Object {
    return Object.freeze({
      display_event: 'DISPLAY_EVENT',
      impression: 'IMPRESSION',
      video_event: 'VIDEO_EVENT',
    });
  }
  static get Platform (): Object {
    return Object.freeze({
      audience_network: 'AUDIENCE_NETWORK',
      facebook: 'FACEBOOK',
      instagram: 'INSTAGRAM',
    });
  }
  static get Status (): Object {
    return Object.freeze({
      created: 'CREATED',
      failure: 'FAILURE',
      in_progress: 'IN_PROGRESS',
      scheduled: 'SCHEDULED',
      success: 'SUCCESS',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): ThirdPartyPartnerViewabilityRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
