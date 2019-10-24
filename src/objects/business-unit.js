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
 * BusinessUnit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessUnit extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      creation_time: 'creation_time',
      currency: 'currency',
      excluded_sources: 'excluded_sources',
      id: 'id',
      is_enabled_for_measurement: 'is_enabled_for_measurement',
      name: 'name',
      time_zone: 'time_zone',
      visits_available_date: 'visits_available_date',
    });
  }


  getAtlasSalesAccesses (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/atlas_sales_accesses'
    );
  }

  createAtlasSalesAccess (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/atlas_sales_accesses',
      fields,
      params,
      
    );
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessUnit {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
