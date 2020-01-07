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
 * AudienceInsightsRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudienceInsightsRule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      archived: 'archived',
      can_be_updated: 'can_be_updated',
      created_by: 'created_by',
      creation_time: 'creation_time',
      description: 'description',
      id: 'id',
      name: 'name',
      studies: 'studies',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AudienceInsightsRule {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
