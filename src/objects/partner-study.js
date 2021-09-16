/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';

/**
 * PartnerStudy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerStudy extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      additional_info: 'additional_info',
      brand: 'brand',
      client_name: 'client_name',
      emails: 'emails',
      id: 'id',
      input_ids: 'input_ids',
      is_export: 'is_export',
      lift_study: 'lift_study',
      location: 'location',
      match_file_ds: 'match_file_ds',
      name: 'name',
      partner_defined_id: 'partner_defined_id',
      partner_household_graph_dataset_id: 'partner_household_graph_dataset_id',
      status: 'status',
      study_end_date: 'study_end_date',
      study_start_date: 'study_start_date',
      study_type: 'study_type',
      submit_date: 'submit_date',
    });
  }


  getPartners (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/partners'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): PartnerStudy {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
