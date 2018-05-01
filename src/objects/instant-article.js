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

/**
 * InstantArticle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstantArticle extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      canonical_url: 'canonical_url',
      development_mode: 'development_mode',
      html_source: 'html_source',
      id: 'id',
      most_recent_import_status: 'most_recent_import_status',
      photos: 'photos',
      publish_status: 'publish_status',
      published: 'published',
      videos: 'videos'
    });
  }

  deleteInstantArticles (params): AbstractObject {
    return super.deleteEdge(
      '/instant_articles',
      params
    );
  }

  get (fields, params): InstantArticle {
    return this.read(
      fields,
      params
    );
  }
}
