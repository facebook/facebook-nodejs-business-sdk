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
import AdStudyObjective from './ad-study-objective';

/**
 * AdStudy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudy extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      canceled_time: 'canceled_time',
      cooldown_start_time: 'cooldown_start_time',
      created_by: 'created_by',
      created_time: 'created_time',
      description: 'description',
      end_time: 'end_time',
      id: 'id',
      name: 'name',
      observation_end_time: 'observation_end_time',
      results_first_available_date: 'results_first_available_date',
      start_time: 'start_time',
      type: 'type',
      updated_by: 'updated_by',
      updated_time: 'updated_time'
    });
  }

  static get AudienceType (): Object {
    return Object.freeze({
      most_responsive: 'MOST_RESPONSIVE',
      not_most_responsive: 'NOT_MOST_RESPONSIVE'
    });
  }
  static get Role (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      analyst: 'ANALYST'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      lift: 'LIFT',
      split_test: 'SPLIT_TEST'
    });
  }

  createCustomAudience (fields, params): AdStudy {
    return this.createEdge(
      '/customaudiences',
      fields,
      params,
      AdStudy
    );
  }

  createObjective (fields, params): AdStudyObjective {
    return this.createEdge(
      '/objectives',
      fields,
      params,
      AdStudyObjective
    );
  }

  deleteUserPermissions (params): AbstractObject {
    return super.deleteEdge(
      '/userpermissions',
      params
    );
  }

  createUserPermission (fields, params): AdStudy {
    return this.createEdge(
      '/userpermissions',
      fields,
      params,
      AdStudy
    );
  }

  get (fields, params): AdStudy {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdStudy {
    return super.update(
      params
    );
  }
}
