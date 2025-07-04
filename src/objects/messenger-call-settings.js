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
 * MessengerCallSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerCallSettings extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      audio_enabled: 'audio_enabled',
      call_hours: 'call_hours',
      call_routing: 'call_routing',
      icon_enabled: 'icon_enabled',
    });
  }

}
