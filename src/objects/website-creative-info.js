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
 * WebsiteCreativeInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WebsiteCreativeInfo extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      image_urls: 'image_urls',
      link_url: 'link_url',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): WebsiteCreativeInfo {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
