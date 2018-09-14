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
 * WorkExperience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WorkExperience extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      employer: 'employer',
      end_date: 'end_date',
      from: 'from',
      id: 'id',
      location: 'location',
      position: 'position',
      projects: 'projects',
      start_date: 'start_date',
      with: 'with'
    });
  }

  get (fields, params): WorkExperience {
    return this.read(
      fields,
      params
    );
  }
}
