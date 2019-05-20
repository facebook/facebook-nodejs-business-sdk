/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Photo from './photo';

/**
 * NativeOfferView
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class NativeOfferView extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      offer: 'offer',
      save_count: 'save_count',
    });
  }


  getPhotos (fields, params, fetchFirstPage = true): Photo {
    return this.getEdge(
      Photo,
      fields,
      params,
      fetchFirstPage,
      '/photos'
    );
  }

  createPhoto (fields, params): NativeOfferView {
    return this.createEdge(
      '/photos',
      fields,
      params,
      NativeOfferView
    );
  }

  createVideo (fields, params): NativeOfferView {
    return this.createEdge(
      '/videos',
      fields,
      params,
      NativeOfferView
    );
  }

  get (fields, params): NativeOfferView {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): NativeOfferView {
    return super.update(
      params
    );
  }
}
