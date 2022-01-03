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
 * CustomAudienceSharingStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceSharingStatus extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      sharing_relationship_id: 'sharing_relationship_id',
      status: 'status',
    });
  }

}
