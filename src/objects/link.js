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
import Cursor from './../cursor';
import Comment from './comment';
import Post from './post';

/**
 * Link
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Link extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      caption: 'caption',
      created_time: 'created_time',
      description: 'description',
      from: 'from',
      icon: 'icon',
      id: 'id',
      link: 'link',
      message: 'message',
      multi_share_optimized: 'multi_share_optimized',
      name: 'name',
      privacy: 'privacy',
      via: 'via',
    });
  }


  createComment (fields: Array<string>, params: Object = {}): Comment {
    // $FlowFixMe : Support Generic Types
    return this.createEdge(
      '/comments',
      fields,
      params,
      Comment
    );
  }

  getSharedPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/sharedposts'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Link {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
