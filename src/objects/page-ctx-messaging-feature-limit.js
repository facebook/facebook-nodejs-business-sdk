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
 * PageCTXMessagingFeatureLimit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCTXMessagingFeatureLimit extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      messaging_feature_limit_duration: 'messaging_feature_limit_duration',
      messaging_feature_limit_type: 'messaging_feature_limit_type',
      messaging_violation_type: 'messaging_violation_type',
    });
  }

}
