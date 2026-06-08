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
import AdAccountAccountControlsPost from './ad-account-account-controls-post';

/**
 * AdAccountAccountControls
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAccountControls extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdAccountAccountControlsPost> {
    return this.createEdge(
      '/account_controls',
      fields,
      params,
      AdAccountAccountControlsPost,
      pathOverride,
    );
  }
}
