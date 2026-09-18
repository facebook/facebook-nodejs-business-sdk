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
 * CreativeDiagnosticsPost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreativeDiagnosticsPost extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      applied_config: 'applied_config',
      creative_strategies: 'creative_strategies',
      generation_request_id: 'generation_request_id',
    });
  }

}
