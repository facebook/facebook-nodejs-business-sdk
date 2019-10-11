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
 * BusinessCreative
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessCreative extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_time: 'creation_time',
      duration: 'duration',
      hash: 'hash',
      height: 'height',
      id: 'id',
      name: 'name',
      thumbnail: 'thumbnail',
      type: 'type',
      url: 'url',
      video_id: 'video_id',
      width: 'width',
    });
  }


  getAdPlacementValidationResults (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ad_placement_validation_results'
    );
  }
}
