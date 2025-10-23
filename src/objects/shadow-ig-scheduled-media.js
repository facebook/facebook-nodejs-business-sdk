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
 * ShadowIGScheduledMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGScheduledMedia extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      caption: 'caption',
      id: 'id',
      media_type: 'media_type',
      media_url: 'media_url',
      publish_timestamp: 'publish_timestamp',
      thumbnail_url: 'thumbnail_url',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): ShadowIGScheduledMedia {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
