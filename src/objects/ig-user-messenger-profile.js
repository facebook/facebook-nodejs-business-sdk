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
 * IGUserMessengerProfile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUserMessengerProfile extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ice_breakers: 'ice_breakers',
      persistent_menu: 'persistent_menu',
    });
  }

}
