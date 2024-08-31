 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import InsightsResult from './insights-result';

/**
 * Stories
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Stories extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      creation_time: 'creation_time',
      media_id: 'media_id',
      media_type: 'media_type',
      post_id: 'post_id',
      status: 'status',
      url: 'url',
      id: 'id',
    });
  }

  static get Status (): Object {
    return Object.freeze({
      archived: 'ARCHIVED',
      published: 'PUBLISHED',
    });
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Stories {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
