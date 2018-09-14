/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import ProfilePictureSource from './profile-picture-source';

/**
 * PlaceTopic
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlaceTopic extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      count: 'count',
      has_children: 'has_children',
      icon_url: 'icon_url',
      id: 'id',
      name: 'name',
      parent_ids: 'parent_ids',
      plural_name: 'plural_name',
      top_subtopic_names: 'top_subtopic_names'
    });
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

  get (fields, params): PlaceTopic {
    return this.read(
      fields,
      params
    );
  }
}
