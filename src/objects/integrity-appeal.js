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
import Cursor from './../cursor';
import IntegrityAppealGetAdAppealBulkEligibility from './integrity-appeal-get-ad-appeal-bulk-eligibility';
import IntegrityAppealGetAdAppealBulkStatus from './integrity-appeal-get-ad-appeal-bulk-status';
import IntegrityAppealGetAdAppealEligibility from './integrity-appeal-get-ad-appeal-eligibility';
import IntegrityAppealGetAdAppealStatus from './integrity-appeal-get-ad-appeal-status';
import IntegrityAppealPostAdAppealBulk from './integrity-appeal-post-ad-appeal-bulk';

/**
 * IntegrityAppeal
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IntegrityAppeal extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  gengetadappealbulkeligibility (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IntegrityAppealGetAdAppealBulkEligibility,
      fields,
      params,
      fetchFirstPage,
      '/'
    );
  }

  gengetadappealbulkstatus (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IntegrityAppealGetAdAppealBulkStatus,
      fields,
      params,
      fetchFirstPage,
      '/'
    );
  }

  gengetadappealeligibility (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IntegrityAppealGetAdAppealEligibility,
      fields,
      params,
      fetchFirstPage,
      '/eligibility'
    );
  }

  gengetadappealstatus (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IntegrityAppealGetAdAppealStatus,
      fields,
      params,
      fetchFirstPage,
      '/status'
    );
  }

  genpostadappealbulk (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<IntegrityAppealPostAdAppealBulk> {
    return this.createEdge(
      '/',
      fields,
      params,
      IntegrityAppealPostAdAppealBulk,
      pathOverride,
    );
  }
}
