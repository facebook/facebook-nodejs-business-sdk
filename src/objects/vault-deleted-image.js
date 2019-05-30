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
 * VaultDeletedImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VaultDeletedImage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      client_image_hash: 'client_image_hash',
      date_taken: 'date_taken',
      id: 'id',
      owner: 'owner',
      remote_id: 'remote_id',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): VaultDeletedImage {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
