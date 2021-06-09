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
 * NativeOfferView
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class NativeOfferView extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      offer: 'offer',
      save_count: 'save_count',
    });
  }


  createPhoto (fields: Array<string>, params: Object = {}): Promise<NativeOfferView> {
    return this.createEdge(
      '/photos',
      fields,
      params,
      NativeOfferView
    );
  }

  createVideo (fields: Array<string>, params: Object = {}): Promise<NativeOfferView> {
    return this.createEdge(
      '/videos',
      fields,
      params,
      NativeOfferView
    );
  }

  
  get (fields: Array<string>, params: Object = {}): NativeOfferView {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): NativeOfferView {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
