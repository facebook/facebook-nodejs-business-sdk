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
 * VideoGameShow
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoGameShow extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      end_time: 'end_time',
      game_status: 'game_status',
      game_type: 'game_type',
      id: 'id',
      start_time: 'start_time',
    });
  }

  static get Action (): Object {
    return Object.freeze({
      end_game: 'END_GAME',
      start_game: 'START_GAME',
    });
  }

  getQuestions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/questions'
    );
  }

  createQuestion (fields, params): AbstractObject {
    return this.createEdge(
      '/questions',
      fields,
      params,
      
    );
  }

  get (fields, params): VideoGameShow {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): VideoGameShow {
    return super.update(
      params
    );
  }
}
