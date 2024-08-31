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
import AdAccount from './ad-account';
import IGMedia from './ig-media';

/**
 * ContentBlockList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ContentBlockList extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      business: 'business',
      id: 'id',
      name: 'name',
    });
  }


  getAppliedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/applied_ad_accounts'
    );
  }

  getFacebookContent (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/facebook_content'
    );
  }

  getInstagramContent (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGMedia,
      fields,
      params,
      fetchFirstPage,
      '/instagram_content'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): ContentBlockList {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
