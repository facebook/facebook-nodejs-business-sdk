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

  static get IconSize (): Object {
    return Object.freeze({
      value_24: '24',
      value_36: '36',
      value_48: '48',
      value_72: '72'
    });
  }

  get (fields, params): PlaceTopic {
    return this.read(
      fields,
      params
    );
  }
}
