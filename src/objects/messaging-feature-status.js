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
 * MessagingFeatureStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessagingFeatureStatus extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      hop_v2: 'hop_v2',
    });
  }

}
