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
 * CopyrightAudioAsset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightAudioAsset extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      copyright: 'copyright',
      creation_time: 'creation_time',
      id: 'id',
      title: 'title',
      update_time: 'update_time',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): CopyrightAudioAsset {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
