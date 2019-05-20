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
 * VideoPoll
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoPoll extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      close_after_voting: 'close_after_voting',
      default_open: 'default_open',
      id: 'id',
      question: 'question',
      show_gradient: 'show_gradient',
      show_results: 'show_results',
      status: 'status',
    });
  }

  static get Action (): Object {
    return Object.freeze({
      attach_to_video: 'ATTACH_TO_VIDEO',
      close: 'CLOSE',
      delete_poll: 'DELETE_POLL',
      show_results: 'SHOW_RESULTS',
      show_voting: 'SHOW_VOTING',
    });
  }

  getPollOptions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/poll_options'
    );
  }

  get (fields, params): VideoPoll {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): VideoPoll {
    return super.update(
      params
    );
  }
}
