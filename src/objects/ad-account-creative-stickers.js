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
import AdAccountCreativeStickersPost from './ad-account-creative-stickers-post';

/**
 * AdAccountCreativeStickers
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountCreativeStickers extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdAccountCreativeStickersPost> {
    return this.createEdge(
      '/creative_stickers',
      fields,
      params,
      AdAccountCreativeStickersPost,
      pathOverride,
    );
  }
}
