/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * BusinessImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessImage extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      business: 'business',
      creation_time: 'creation_time',
      hash: 'hash',
      height: 'height',
      id: 'id',
      media_library_url: 'media_library_url',
      name: 'name',
      url: 'url',
      url_128: 'url_128',
      width: 'width',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): BusinessImage {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
