/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import InstagramComment from './instagram-comment';

/**
 * RTBDynamicPost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RTBDynamicPost extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      child_attachments: 'child_attachments',
      created: 'created',
      description: 'description',
      id: 'id',
      image_url: 'image_url',
      link: 'link',
      message: 'message',
      owner_id: 'owner_id',
      place_id: 'place_id',
      product_id: 'product_id',
      title: 'title',
    });
  }


  getInstagramComments (fields, params, fetchFirstPage = true): InstagramComment {
    return this.getEdge(
      InstagramComment,
      fields,
      params,
      fetchFirstPage,
      '/instagram_comments'
    );
  }

  get (fields, params): RTBDynamicPost {
    return this.read(
      fields,
      params
    );
  }
}
