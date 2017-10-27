/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import AdAccount from './ad-account';

/**
 * OffsitePixel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OffsitePixel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creator: 'creator',
      id: 'id',
      js_pixel: 'js_pixel',
      last_firing_time: 'last_firing_time',
      name: 'name',
      tag: 'tag'
    });
  }

  static get Tag (): Object {
    return Object.freeze({
      checkout: 'CHECKOUT',
      registration: 'REGISTRATION',
      lead: 'LEAD',
      key_page_view: 'KEY_PAGE_VIEW',
      add_to_cart: 'ADD_TO_CART',
      other: 'OTHER'
    });
  }

  deleteAdAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/adaccounts',
      params
    );
  }

  getAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }

  createAdAccount (fields, params): AdAccount {
    return this.createEdge(
      '/adaccounts',
      fields,
      params
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): OffsitePixel {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): OffsitePixel {
    return super.update(
      params
    );
  }
}
