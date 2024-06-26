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
 * ThirdPartyPartnerPanelRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerPanelRequest extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      adentities_ids: 'adentities_ids',
      country: 'country',
      created_time: 'created_time',
      description: 'description',
      id: 'id',
      modified_time: 'modified_time',
      owner_instance_id: 'owner_instance_id',
      owner_panel_id: 'owner_panel_id',
      owner_panel_name: 'owner_panel_name',
      status: 'status',
      study_end_time: 'study_end_time',
      study_start_time: 'study_start_time',
      study_type: 'study_type',
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
  static get StudyType (): Object {
    return Object.freeze({
      brand_lift: 'BRAND_LIFT',
      panel_sales_attribution: 'PANEL_SALES_ATTRIBUTION',
      reach: 'REACH',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): ThirdPartyPartnerPanelRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
