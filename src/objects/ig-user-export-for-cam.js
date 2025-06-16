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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';

/**
 * IGUserExportForCAM
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUserExportForCAM extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      age_bucket: 'age_bucket',
      biography: 'biography',
      country: 'country',
      email: 'email',
      gender: 'gender',
      id: 'id',
      is_account_verified: 'is_account_verified',
      is_paid_partnership_messages_enabled: 'is_paid_partnership_messages_enabled',
      messaging_id: 'messaging_id',
      onboarded_status: 'onboarded_status',
      portfolio_url: 'portfolio_url',
      username: 'username',
    });
  }


  getBrandedContentMedia (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/branded_content_media'
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getRecentMedia (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/recent_media'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): IGUserExportForCAM {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
