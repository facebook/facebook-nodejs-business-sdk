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
 * BusinessImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessImage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      creation_time: 'creation_time',
      hash: 'hash',
      height: 'height',
      id: 'id',
      name: 'name',
      url: 'url',
      url_128: 'url_128',
      width: 'width',
    });
  }


  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessImage {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
