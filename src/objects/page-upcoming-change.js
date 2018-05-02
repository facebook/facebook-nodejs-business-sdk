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
 * PageUpcomingChange
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageUpcomingChange extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      change_type: 'change_type',
      effective_time: 'effective_time',
      id: 'id',
      page: 'page',
      proposal: 'proposal',
      timer_status: 'timer_status'
    });
  }

  get (fields, params): PageUpcomingChange {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): PageUpcomingChange {
    return super.update(
      params
    );
  }
}
