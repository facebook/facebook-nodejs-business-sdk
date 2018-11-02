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
 * AdsTALNudge
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsTALNudge extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      nudge_type: 'nudge_type',
      objective_id: 'objective_id',
      study_id: 'study_id',
      winner_cell_id: 'winner_cell_id',
      id: 'id'
    });
  }
}
