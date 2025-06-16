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
 * ManagementSiteLink
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ManagementSiteLink extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_account_id: 'ad_account_id',
      id: 'id',
      link_domain: 'link_domain',
      link_hash: 'link_hash',
      link_image_hash: 'link_image_hash',
      link_image_url: 'link_image_url',
      link_title: 'link_title',
      link_type: 'link_type',
      link_url: 'link_url',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): ManagementSiteLink {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
