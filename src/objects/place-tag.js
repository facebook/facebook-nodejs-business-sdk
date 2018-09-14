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
import ProfilePictureSource from './profile-picture-source';

/**
 * PlaceTag
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlaceTag extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      created_time: 'created_time',
      id: 'id',
      place: 'place'
    });
  }

  getContents (fields, params, fetchFirstPage = true): Photo {
    return this.getEdge(
      Photo,
      fields,
      params,
      fetchFirstPage,
      '/contents'
    );
  }

  getPicture (fields, params, fetchFirstPage = true): ProfilePictureSource {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  get (fields, params): PlaceTag {
    return this.read(
      fields,
      params
    );
  }
}
