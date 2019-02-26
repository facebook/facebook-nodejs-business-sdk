/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * StreamingReaction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class StreamingReaction extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      count: 'count',
      reaction_type: 'reaction_type',
      id: 'id'
    });
  }

  static get ReactionType (): Object {
    return Object.freeze({
      angry: 'ANGRY',
      haha: 'HAHA',
      like: 'LIKE',
      love: 'LOVE',
      none: 'NONE',
      pride: 'PRIDE',
      sad: 'SAD',
      thankful: 'THANKFUL',
      wow: 'WOW'
    });
  }
}
