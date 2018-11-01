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
 * CustomConversionActivities
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomConversionActivities extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_id: 'app_id',
      data: 'data',
      event_type: 'event_type',
      timestamp: 'timestamp',
      id: 'id'
    });
  }

  static get EventType (): Object {
    return Object.freeze({
      conversion_create: 'conversion_create',
      conversion_delete: 'conversion_delete',
      conversion_update: 'conversion_update'
    });
  }

  get (fields, params): CustomConversionActivities {
    return this.read(
      fields,
      params
    );
  }
}
