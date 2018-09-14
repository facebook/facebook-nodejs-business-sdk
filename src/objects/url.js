/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Post from './post';

/**
 * URL
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class URL extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_links: 'app_links',
      development_instant_article: 'development_instant_article',
      engagement: 'engagement',
      id: 'id',
      instant_article: 'instant_article',
      og_object: 'og_object',
      ownership_permissions: 'ownership_permissions',
      share: 'share'
    });
  }

  getShareDPosts (fields, params, fetchFirstPage = true): Post {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/sharedposts'
    );
  }

  get (fields, params): URL {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): URL {
    return super.update(
      params
    );
  }
}
