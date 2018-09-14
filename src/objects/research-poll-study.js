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
 * ResearchPollStudy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ResearchPollStudy extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account: 'account',
      id: 'id',
      name: 'name'
    });
  }

  getExperiments (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/experiments'
    );
  }

  get (fields, params): ResearchPollStudy {
    return this.read(
      fields,
      params
    );
  }
}
