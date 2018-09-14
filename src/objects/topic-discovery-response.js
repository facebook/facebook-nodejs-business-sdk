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
 * TopicDiscoveryResponse
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TopicDiscoveryResponse extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      name: 'name',
      type: 'type',
      id: 'id'
    });
  }

  static get QueryMethod (): Object {
    return Object.freeze({
      cooccur_7: 'cooccur_7',
      cooccur_28: 'cooccur_28',
      embedding_w2v_1: 'embedding_w2v_1',
      embedding_w2v_7: 'embedding_w2v_7',
      string_search: 'string_search',
      all: 'all'
    });
  }

  get (fields, params): TopicDiscoveryResponse {
    return this.read(
      fields,
      params
    );
  }
}
