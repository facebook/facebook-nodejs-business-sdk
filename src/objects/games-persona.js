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
 * GamesPersona
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GamesPersona extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      external_id: 'external_id',
      id: 'id',
      name: 'name'
    });
  }

  get (fields, params): GamesPersona {
    return this.read(
      fields,
      params
    );
  }
}
