/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import BusinessObject from './business-object';

/**
 * BusinessTag
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessTag extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name: 'name'
    });
  }

  static get Order (): Object {
    return Object.freeze({
      name_asc: 'name_asc',
      name_desc: 'name_desc',
      recently_used: 'recently_used'
    });
  }

  getTaggedObjects (fields, params, fetchFirstPage = true): BusinessObject {
    return this.getEdge(
      BusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/tagged_objects'
    );
  }

  get (fields, params): BusinessTag {
    return this.read(
      fields,
      params
    );
  }
}
