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
import Comment from './comment';

/**
 * Offer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Offer extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      claim_limit: 'claim_limit',
      coupon_type: 'coupon_type',
      created_time: 'created_time',
      expiration_time: 'expiration_time',
      from: 'from',
      id: 'id',
      image_url: 'image_url',
      message: 'message',
      redemption_code: 'redemption_code',
      redemption_link: 'redemption_link',
      terms: 'terms',
      title: 'title'
    });
  }

  createComment (fields, params): Comment {
    return this.createEdge(
      '/comments',
      fields,
      params,
      Comment
    );
  }

  deleteLikes (params): AbstractObject {
    return super.deleteEdge(
      '/likes',
      params
    );
  }

  createLike (fields, params): Offer {
    return this.createEdge(
      '/likes',
      fields,
      params,
      Offer
    );
  }

  get (fields, params): Offer {
    return this.read(
      fields,
      params
    );
  }
}
