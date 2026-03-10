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
 * PageRecommendedPostsInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageRecommendedPostsInfo extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      recommendation_source: 'recommendation_source',
      recommended_posts: 'recommended_posts',
    });
  }

}
