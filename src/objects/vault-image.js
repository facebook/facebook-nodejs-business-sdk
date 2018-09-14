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

/**
 * VaultImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VaultImage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      client_image_hash: 'client_image_hash',
      date_taken: 'date_taken',
      height: 'height',
      id: 'id',
      owner: 'owner',
      picture: 'picture',
      remote_id: 'remote_id',
      source: 'source',
      width: 'width'
    });
  }

  getImages (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/images'
    );
  }

  get (fields, params): VaultImage {
    return this.read(
      fields,
      params
    );
  }
}
