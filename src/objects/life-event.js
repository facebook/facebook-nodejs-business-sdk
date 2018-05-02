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
 * LifeEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LifeEvent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      created_time: 'created_time',
      description: 'description',
      end_time: 'end_time',
      from: 'from',
      id: 'id',
      is_hidden: 'is_hidden',
      start_time: 'start_time',
      title: 'title',
      updated_time: 'updated_time'
    });
  }

  createComment (fields, params): AbstractObject {
    return this.createEdge(
      '/comments',
      fields,
      params

    );
  }

  get (fields, params): LifeEvent {
    return this.read(
      fields,
      params
    );
  }
}
