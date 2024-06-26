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
 * VideoTextQuestion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoTextQuestion extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      question_target_id: 'question_target_id',
      question_text: 'question_text',
      status: 'status',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): VideoTextQuestion {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
