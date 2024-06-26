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
 * ThirdPartyPartnerPanelScheduled
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerPanelScheduled extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      adentities_ids: 'adentities_ids',
      cadence: 'cadence',
      country: 'country',
      created_time: 'created_time',
      description: 'description',
      end_time: 'end_time',
      id: 'id',
      modified_time: 'modified_time',
      owner_instance_id: 'owner_instance_id',
      owner_panel_id: 'owner_panel_id',
      owner_panel_name: 'owner_panel_name',
      start_time: 'start_time',
      status: 'status',
      study_type: 'study_type',
    });
  }

  static get Status (): Object {
    return Object.freeze({
      cancelled: 'CANCELLED',
      created: 'CREATED',
      finished: 'FINISHED',
      ongoing: 'ONGOING',
    });
  }
  static get StudyType (): Object {
    return Object.freeze({
      brand_lift: 'BRAND_LIFT',
      panel_sales_attribution: 'PANEL_SALES_ATTRIBUTION',
      reach: 'REACH',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): ThirdPartyPartnerPanelScheduled {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
