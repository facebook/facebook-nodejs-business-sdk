 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * FBPageAndInstagramAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FBPageAndInstagramAccount extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_permissions: 'ad_permissions',
      bc_permission_status: 'bc_permission_status',
      bc_permissions: 'bc_permissions',
      is_managed: 'is_managed',
      matched_by: 'matched_by',
    });
  }

}
