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
 * PageStatusCard
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageStatusCard extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      detail_url: 'detail_url',
      details_screen: 'details_screen',
      duration_in_secs: 'duration_in_secs',
      id: 'id',
      page: 'page',
      preview: 'preview',
      start_time: 'start_time',
      title: 'title'
    });
  }

  get (fields, params): PageStatusCard {
    return this.read(
      fields,
      params
    );
  }
}
